<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";
  import BackgroundSvg from "./BackgroundSvg.svelte";

  export let duration: number = 10;
  let _class = "";
  export { _class as class };
  let isMounted = false;
  onMount(() => {
    isMounted = true;
  });
</script>

<!-- md:h-[90vh] -->
<div class={cn("h-[20rem] md:h-screen w-full bg-white dark:bg-black", _class)}>
  {#if isMounted}
    <BackgroundSvg {duration} />
  {/if}
  <slot></slot>
</div>
