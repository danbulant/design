---
title: Mimikatz on linux
tags: [security]
date: 2025-03-29
---

*pypykatz* is a Python library to parse credentials from Windows Security. Pypykatz is portable, unlike mimikatz which requires windows to run.

SUID is the users secure id. Usually the name of their folder in AppData (S-1-5-21-...). Certain password hashes (I think SHA1) can be used instead of plaintext, see pypykatz/mimikatz docs.

```bash
pypykatz dpapi prekey password <SUID> <password in plaintext> -o prekeys
pypykatz dpapi masterkey <SUID> <path to prekeys> -o masterkeys
pypykatz dpapi chrome <masterkey> <path to chrome local state> --logindata <path to login data /Default/Login\ Data> --cookies <path to cookies /Default/Network/Cookies>
```
