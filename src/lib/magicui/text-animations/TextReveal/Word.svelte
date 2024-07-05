<script lang="ts">
  import { Motion, useTransform } from "svelte-motion";
  export let progress: any = 0;
  export let range: [number, number];
  export let wordsLen = 0;
  let rangeValue1 = range[0] / wordsLen;
  let rangeValue2 = range[1] / wordsLen;
  let opacity = useTransform(progress, [rangeValue1, rangeValue2], [0.2, 1]);
</script>

<span class="xl:lg-3 relative mx-1 lg:mx-2.5">
  <span class="absolute opacity-30">
    <slot></slot>
  </span>
  <Motion style={{ opacity: opacity }} let:motion>
    <span class="text-black dark:text-white" use:motion>
      <slot></slot>
    </span>
  </Motion>
</span>
