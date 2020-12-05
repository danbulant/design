import { writable } from "svelte/store";

const darkmode = writable(JSON.parse(localStorage.getItem("darkmode")) || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

darkmode.subscribe(v => {
    localStorage.setItem("darkmode", JSON.stringify(v));
});

export default darkmode;