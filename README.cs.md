# Informace o projektu

Moje online portfolio na ukázku mých schopností a projektů.

Sveltekit web používající moderní CSS k ukázce projektů, a k zobrazení blog příspěvků.

## Spuštění

Online verze k dispozici [zde](https://danbulant.eu). Historie dostupná na [GitHub](https://github.com/danbulant/design).

Lokální verze:

- `pnpm install` (nejspíš funguje i s "klasickým" npm, není testováno). `pnpm` se dá nainstalovat `npm i -g pnpm`.
- `pnpm run dev`

Pro release verzi (rychlejší načítání, etc):

- `pnpm install`
- `pnpm run build`
- `pnpm run preview`

Stránká má pouze build step ale v release verzi je statická (předrenderují se stránky, včetně "API" route).

## Technologie v projektu

- svelte+sveltekit
- vite
- css + windicss
- markdown (resp. sveltemdx)
- nodejs (viz `remark/`)

## Technologie

- [svelte](https://svelte.dev) (+[sveltekit](https://kit.svelte.dev)), [vite](https://vitejs.dev)/[rollup](https://rollupjs.org)
- html/css/js
- node.js/[deno](https://deno.com) (zatim ne na weby)/[rust](https://www.rust-lang.org)
- typescript
- ([p](https://pnpm.io))npm
- react
- scss
- tailwind/[windi](https://windicss.org)/[unocss](https://unocss.dev/interactive/)
- MySQL/MongoDB/trochu postgresql
- websocket/WebRTC
- docker/[nomad](https://www.nomadproject.io) (service scheduler; vicemene kubernetes alternativa. Bezi na tom treba tictactoe)/[consul](https://consul.io) (service discovery)
- electron
- nginx/[caddy](https://caddyserver.com)

Weby programuju už několik let, víceméně od té doby co mám notebook. Nejdřív jsem si na telefonu programoval aplikace ve jazyce scratch, potom jsem k aplikacím chtěl přidat serverovou část, tak jsem se začal učit PHP a nakonec jsem se přesunul k webům úplně.  
Když mi rodiče darovali notebook, tak jsem k němu dostal i malou knížečku na základy HTML/CSS, asi projekt nebo dva jsme udělali s tátou společně, a poté jsem se již učil sám různě online.  
Od PHP jsem se postupně přesunul k Node.JS protože měl míň "divností". Pak jsem nějak narazil na svelte a od té doby dělám všechny projekty v tom.  
V reactu jsem udělal jeden větší projekt (Animasher), ten jsem ale potom během asi jednoho dne přepsal do svelte (má dostatečně podobnou syntaxi na to že jsem spíš dal pár regex find&replace a pak spíš jen mazal kód navíc).

DVOP3 chci studovat protože si myslím že stále jsou věci o kterých nevím a mohli by se mi hodit, a také protože mám relativně málo zkušeností z "reálného světa", dělal jsem jen asi 2 projekty s vícero lidma a i tam to většinou bylo tak že jsem dělal web sám.
