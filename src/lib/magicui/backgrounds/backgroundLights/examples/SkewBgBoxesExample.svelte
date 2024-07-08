<script>
    import BgTiles from "$lib/magicui/backgrounds/backgroundLights/BgTiles.svelte";
    import { cn } from "$lib/utils";
  </script>
  
  <div
    class="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg"
  >
    <div
      class="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
    />
    <BgTiles />
    <h1 class={cn("md:text-4xl text-xl text-white relative z-20")}>
      Tailwind is Awesome
    </h1>
    <p class="text-center mt-2 text-neutral-300 relative z-20">
      Framer motion is the best animation library ngl
    </p>
  </div>
  