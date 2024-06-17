<script>
  import { page } from "$app/stores";
  import Navbar from "$lib/components/dev/Navbar/Navbar.svelte";
  import "../app.css";
  let routeID = $page.url.pathname.split("/");
  let pageWidth = 0;
  $: console.log(routeID, pageWidth);
</script>

<svelte:window bind:innerWidth={pageWidth} />

{#if routeID.length > 1 && routeID[1] === "examples" && pageWidth > 624}
  <Navbar />
{:else if routeID.length === 1}
  <Navbar />
{/if}

<slot></slot>

<style></style>
