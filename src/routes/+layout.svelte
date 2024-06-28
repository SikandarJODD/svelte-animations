<script>
	import { onMount } from 'svelte';
  import { page } from "$app/stores";
  import Navbar from "$lib/components/dev/Navbar/Navbar.svelte";
  import "../app.css";
  import "./global.css";
  import { ModeWatcher } from "mode-watcher";
  $: routeID = $page.url.pathname.split("/");
  let pageWidth = 0;
 
</script>

<svelte:window bind:innerWidth={pageWidth} />
<ModeWatcher />
{#if pageWidth > 1023 && routeID[1] === "examples"}
  <Navbar />
{:else if routeID[1] === ""}
  <Navbar />
{/if}
<div>
  <slot />
</div>
