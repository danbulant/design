import { crossfade } from "svelte/transition";


export const [heaventakerSendTransition, heaventakerReceiveTransition] = crossfade({
    duration: 700
});