<script>
  import { page } from "$app/stores";
  import Navbar from "$lib/components/dev/Navbar/Navbar.svelte";
  import "../app.css";
  import "./global.css";
  $: routeID = $page.url.pathname.split("/");
  let pageWidth = 0;
</script>

<svelte:window bind:innerWidth={pageWidth} />

{#if pageWidth > 1023 && routeID[1] === "examples"}
  <Navbar />
{:else if routeID[1] === ""}
  <Navbar />
{/if}
<slot />
