<script>
  import Line from "./Line.svelte";
</script>

<div class="relative mx-auto w-fit px-4 sm:px-6 md:px-8">
  <Line class="bg-gradient-to-l left-0 top-2 sm:top-4 md:top-6" />
  <Line class="bg-gradient-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0" />

  <Line
    class="w-px bg-gradient-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0"
  />
  <Line
    class="w-px bg-gradient-to-t left-2 sm:left-4 md:left-6 h-full inset-y-0"
  />
  <div class="relative z-20 mx-auto py-8">
    <slot></slot>
  </div>
</div>
