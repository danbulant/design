---
title: MySQL, express, and the importance of types
tags: [security, javascript]
date: 2025-03-29
---

*note that this might have changed silently, though there is still an [open issue](https://github.com/sidorares/node-mysql2/issues/1247) referencing this*

TLDR object serialization via [sqlstring](https://www.npmjs.com/package/sqlstring), vulnerable if user input is not primitive (e.g. unchecked object).

```js
const app = express()
const db = await mysql.createConnection({ ... })

app.get("/", (req, res) => {
    // unsafety here :)
    let users = await db.query("SELECT * FROM table WHERE name = ?", [req.query.name])
    res.json(users)
})
```

*There's no way to prevent this, says only language where this regularly happens*

SQL Injection is bad! Use a library to prevent SQL Injection!

Nowhere in [MySQL2 docs](https://sidorares.github.io/node-mysql2/docs) does it mention that objects are serialized into SQL (Note that this may have changed - this is more of a guide for testing vulns / ctf challenges than a bug report, this is not new research). Via dependencies, you can find it uses [sqlstring](https://www.npmjs.com/package/sqlstring). That does mention that it does object serialization:

```js
var post = {id: 1, title: 'Hello MySQL'};
var sql = SqlString.format('INSERT INTO posts SET ?', post);
console.log(sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
```

But wait! Query is surely just string?  
No

Express parses query string like `name[obj]=val`. And MySQL accepts `1 = 1 = 1`. Also, people often allow both urlencoded and json as input, even if their pages use urlencoded forms, so try submitting a JSON body with a similar payload.

This is based on [previous research](https://flatt.tech/research/posts/finding-an-unseen-sql-injection-by-bypassing-escape-functions-in-mysqljs-mysql/) and solving a CTF challenge. I get reminded of it every few months by reading another project which uses mysql2 and express. I do not support using express from a technical view - it is full of surpises, took really long to get promises support (so long that most libraries based on express still don't support it), and is actually the slowest of the commonly used frameworks.
