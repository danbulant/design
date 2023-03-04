<script>
</script>

{#if $$props["data-mdx-pretty-code"]}
    <code data-theme={$$props["data-theme"]} style:color={$$props["data-color"]}><slot /></code>
{:else}
    <span {...$$props}><slot /></span>
{/if}