<script lang="ts">
  import { Motion, useMotionValue } from "svelte-motion";
  import IconContainer from "./IconContainer.svelte";

  type Item = {
    title: string;
    icon: any;
    href: string;
  };
  export let items: Item[] = [];
  export let className = "";

  const mouseX = useMotionValue(Infinity);
  const containerX = useMotionValue(0);

  let containerRef: HTMLDivElement;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<Motion let:motion>
  <div
    use:motion
    bind:this={containerRef}
    on:mouseleave={() => mouseX.set(Infinity)}
    on:mousemove={(e) => {
      const rect = containerRef.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        containerX.set(rect.x);
      }
    }}
    class="mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 {className}"
  >
    {#each items as item (item.title)}
      <IconContainer {mouseX} {containerX} {...item} />
    {/each}
  </div>
</Motion>
