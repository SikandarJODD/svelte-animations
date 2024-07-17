<script>
  import Ellipses from "./Ellipses.svelte";
</script>

<div
  class="relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8"
>
  <div
    class="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"
  ></div>
  <div
    class="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"
  ></div>
  <div class="relative w-full border-x border-zinc-400 dark:border-zinc-700">
    <Ellipses />
    <div class="relative z-20 mx-auto py-8">
      <slot></slot>
    </div>
  </div>
</div>
