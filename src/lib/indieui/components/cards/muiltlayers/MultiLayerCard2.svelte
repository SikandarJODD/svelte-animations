<script>
  import MCardBody1 from "./cardbody/MCardBody1.svelte";
</script>

<div class="py-6 w-full">
  <div class="relative max-w-xl mx-auto h-72 sm:h-52">
    <div
      class="dark:bg-zinc-900 bg-zinc-100 absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-y-[1.15] scale-x-90 -top-4"
      style="transform-origin: top center"
    ></div>
    <div
      class="absolute dark:bg-zinc-950 bg-white size-full rounded-3xl p-2 md:p-6 shadow-[0px_0px_16px_#D4D4D8] border border-neutral-200 dark:border-zinc-800 flex justify-center items-center dark:shadow-[0px_0px_64px_rgba(39,39,42,0.6)]"
      style="transform-origin: top center"
    >
      <slot>
        <MCardBody1 />
      </slot>
    </div>
  </div>
</div>
