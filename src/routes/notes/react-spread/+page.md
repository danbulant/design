---
title: React spread operator is dangerous
tags: [cybersec]
date: 2025-07-06
---

Using spread operator within react with untrusted user input is a recipe for XSS; embedding raw HTML into website.

React supports embedding raw HTML via an attribute called `dangerouslySetInnerHTML.__html{:jsx}`.

```jsx
return (
    <p dangerouslySetInnerHTML={{__html:"<b>hello world</b>"}} />
)
```

Which is different from how for example svelte handles it - by using a different tag / template (the equivalent would be `<p>{@html "..."}</p>{:jsx}`).

JSX supports spread operators just like any JS object, as it creates one under the hood anyway.
Which is nice for passing props to another component:

```jsx
return (
    <Component {...props} />
)
```

But this could be coupled to make a mostly hidden bug with no 'danger' in it's sources being explicitly present:

```jsx
import { useSearchParams } from 'next/navigation';
import { parse } from 'qs';

function useQs() {
    const searchParams = useSearchParams();
    const search = searchParams.toString();

    return parse(search, {
        ignoreQueryPrefix: true,
        decoder: (str) => {
            str = decodeURIComponent(str);
            return str
        }
    });
}
function Page() {
    // load query string, i.e. parses http://tld/path?key=val into { key: "val" }
    const qs = useQs();

    return (<Component props={{ }} {...qs} />)
}

function Component({ props, key }) {
    return (
        <div {...props}>
            Your key is {key || "empty"}
        </div>
    )
}
```

The above app is vulnerable, because the latter spread operator can override `props{:jsx}`, which is then spreaded `div`.  
This would be safe - if buggy - if all we could do is set `props{:jsx}` to a string value.

But `qs{:jsx}` also parses objects. So you're just one `?props[dangerouslySetInnerHTML][__html]="<b>pwned</b>"` away from danger.
Check your vibe coded apps, and perhaps choose technologies with sane & safe defaults.