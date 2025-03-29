import { writable } from "svelte/store";

// no idea how to make this better.
// it works! But isn't very performant - darkmode is switched after loading the page, not very friendly
// could probably set a cookie and have the class be set in SSR as well, I don't really want to spend the time on that now.
// TODO: make this use cookies and SSR
// const darkmode = writable(
//     typeof window === "undefined" ? false :
//     (JSON.parse(localStorage.getItem("darkmode")) || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
// );
const darkmode = writable(true)

darkmode.subscribe(v => {
    if(typeof window !== "undefined")
        localStorage.setItem("darkmode", JSON.stringify(v));

    
    if(typeof document !== "undefined") {
        if(v) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }
});

export default darkmode;