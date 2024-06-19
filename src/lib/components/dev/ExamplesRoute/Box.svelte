<script lang="ts">
  export let minHeight = 300;
</script>

<div
  style="min-height: {minHeight}px; height:fit-content;"
  class="flex justify-center items-center border border-primary/40 rounded-xl my-2 p-4 md:p-6"
>
  <slot></slot>
</div>
