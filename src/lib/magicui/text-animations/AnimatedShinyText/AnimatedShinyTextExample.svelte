<script lang="ts">
  import { cn } from "$lib/utils";
  import AnimatedShinyText from "./AnimatedShinyText.svelte";
</script>

<div class="z-10 flex  items-center justify-center">
  <div
    class={cn(
      "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    )}
  >
    <AnimatedShinyText
      class=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
    >
      <span>✨ Introducing Magic UI</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
      >
    </AnimatedShinyText>
  </div>
</div>
