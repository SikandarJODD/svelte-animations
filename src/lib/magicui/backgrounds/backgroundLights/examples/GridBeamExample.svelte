<script>
  import GridBeam from "../GridBeam.svelte";
  // for bg-grid : please scroll to the bottom of the page to see the bg-grid :  tailwind.config.ts file.
  // No need to install base components for this example. just checkout tailwind.config.ts file. 
</script>

<div
  class="w-full h-[400px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]"
>
  <GridBeam class="sm:pl-16 pt-28 pl-4 flex items-start justify-start">
    <div class="grid gap-2">
      <h1 class="sm:text-5xl text-4xl font-bold max-w-sm">
        Hello Amazing Svelte Developer
      </h1>
      <p class="text-neutral-500 max-w-lg">
        Beautiful beam which I btw reverse engineered from <span
          class="text-primary">Aceternity UI</span
        >
      </p>
      <p class="text-neutral-500 max-w-lg">
        Just Copied it from : <a
          href="https://ui.lukacho.com/components/background-grid-beam"
          target="_blank"
          class="text-primary">Lukacho UI</a
        >
      </p>
    </div>
  </GridBeam>
</div>
