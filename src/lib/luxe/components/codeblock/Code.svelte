<script lang="ts">
  import { codeToHtml } from "shiki";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";

  export let code = "";
  let htmlCode: any = "Loading...";
  onMount(async () => {
    htmlCode = await codeToHtml(code, {
      lang: "svelte",
      theme: "vesper",
    });
  });
</script>

{#key htmlCode}
  <div in:fade>
    {@html htmlCode}
  </div>
{/key}
