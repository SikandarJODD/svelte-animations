<script>
  import MCardBody1 from "./cardbody/MCardBody1.svelte";
</script>

<div class="py-8">
  <div class="relative max-w-xl">
    <div
      class="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-zinc-800 py-10"
    />
    <!-- Write Content Here  -->
    <slot>
      <MCardBody1
        class="px-6 py-10 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
      />
    </slot>
  </div>
</div>
