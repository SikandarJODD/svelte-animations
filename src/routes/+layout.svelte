<script>
  import "../app.css";
  import "./global.css";
  import { ModeWatcher } from "mode-watcher";
  import { setMode } from "mode-watcher";

  import NewNavbar from "$lib/components/dev/Navbar/NewNavbar.svelte";
  setMode("dark");
  let pageWidth = 0;
  import "./carbon.css";
</script>

<svelte:window bind:innerWidth={pageWidth} />
<ModeWatcher />

<NewNavbar />
<div>
  <slot />
</div>
