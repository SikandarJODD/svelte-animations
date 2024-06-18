<script lang="ts">
  export let minHeight = 300;
</script>

<div
  style="min-height: {minHeight}px;"
  class="flex justify-center items-center border border-primary/40 rounded-xl my-2"
>
  <slot></slot>
</div>
