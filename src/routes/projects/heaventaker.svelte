<script>
import { heaventakerReceiveTransition, heaventakerSendTransition } from "$lib/stores/transitions";
</script>

<img class="banner" in:heaventakerReceiveTransition={{ key: "heaventaker" }} out:heaventakerSendTransition={{ key: "heaventaker" }} src="/screenshots/heaventaker.webp" alt="">

<style>
    .banner {
        width: 100vw;
        height: auto;
        object-fit: cover;
    }
</style>