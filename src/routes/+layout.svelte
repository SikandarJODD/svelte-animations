<script>
  import "../app.css";
  import "./global.css";
  import { ModeWatcher } from "mode-watcher";
  import { setMode } from "mode-watcher";

  import NewNavbar from "$lib/components/dev/Navbar/NewNavbar.svelte";
  onMount(() => {
    setMode("dark");
  });
  let pageWidth = 0;
  import "./carbon.css";
  import { onMount } from "svelte";
  import Banner from "$lib/components/dev/Navbar/Banner.svelte";
  import { page } from "$app/stores";
</script>

<svelte:window bind:innerWidth={pageWidth} />
<ModeWatcher />
{#if $page.url.pathname === "/"}
  <Banner />
{/if}
<NewNavbar />
<div>
  <slot />
</div>
