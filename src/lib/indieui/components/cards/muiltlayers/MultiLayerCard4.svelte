<script>
  import MCardBody1 from "./cardbody/MCardBody1.svelte";
</script>

<div class="py-4">
  <div class="relative mx-auto h-72 sm:h-48">
    <div
      class="dark:bg-zinc-900/30 bg-zinc-50 absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-[0.95] -top-6"
      style="transform-origin: top center"
    ></div>
    <div
      class="dark:bg-zinc-900/40 bg-zinc-50 absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-[0.97] -top-3"
      style="transform-origin: top center"
    ></div>
    <div
      class="absolute dark:bg-zinc-950 bg-white size-full rounded-3xl p-2 md:p-6 shadow-xl border border-neutral-200 dark:border-zinc-800 shadow-black/[0.1] dark:shadow-white/[0.02] flex justify-center items-center"
      style="transform-origin: top center"
    >
      <slot>
        <MCardBody1 />
      </slot>
    </div>
  </div>
</div>
