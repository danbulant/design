import { writable } from "svelte/store";

const darkmode = writable(
    typeof window === "undefined" ? false :
    (JSON.parse(localStorage.getItem("darkmode")) || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

darkmode.subscribe(v => {
    if(typeof window !== "undefined")
        localStorage.setItem("darkmode", JSON.stringify(v));
});

export default darkmode;