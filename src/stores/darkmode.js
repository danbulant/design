import { writable } from "svelte/store";

const darkmode = writable(localStorage.getItem("darkmode") || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

export default darkmode;