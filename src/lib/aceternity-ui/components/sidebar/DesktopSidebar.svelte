<script lang="ts">
  import { vopen } from "./svelteContent";
  export let className = "";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  style="width: {$vopen ? '200px' : '60px'}; transition: width 0.4s;"
  class="h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 {className}"
  on:mouseenter={() => {
    vopen.set(true);
  }}
  on:mouseleave={() => {
    vopen.set(false);
  }}
>
  <slot></slot>
</div>
