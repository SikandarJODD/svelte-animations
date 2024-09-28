<script lang="ts">
  import { vopen } from "./svelteContent";
  export let className = "";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  style="width: {$vopen ? '300px' : '60px'}; transition: width 0.3s;"
  class="h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 {className}"
  on:mouseenter={() => {
    vopen.set(true);
    console.log("open");
  }}
  on:mouseleave={() => {
    console.log("close");
    vopen.set(false);
  }}
>
  <slot></slot>
</div>
