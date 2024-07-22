<script>
  import AnimatedGradientText from "./AnimatedGradientText.svelte";
  import { cn } from "$lib/utils";
</script>

<div class="z-10 flex  items-center justify-center">
  <AnimatedGradientText>
    🎉 <hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
    {" "}
    <span
      class={cn(
        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
      )}
    >
      Introducing Magic UI
    </span>
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
      ><path d="m9 18 6-6-6-6" /></svg
    >
  </AnimatedGradientText>
</div>
