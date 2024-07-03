<script lang="ts">
  import { Motion, useMotionValue, useTransform } from "svelte-motion";

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const height = 70;
  const padding = 10;
  const size = 150;
  let scrollY = useMotionValue(0);
  function getHeight(items: Number[]) {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalHeight + totalPadding;
    return totalScroll;
  }
  let width = useTransform(
    scrollY,
    [0, -getHeight(items) + size],
    ["calc(0% - 0px)", "calc(100% - 40px)"]
  );
</script>

<Motion let:motion whileTap={{ cursor: "grabbing" }}>
  <div
    style="transform: translateZ(0);"
    class="w-[150px] h-[150px] rounded-[30px] border border-primary overflow-hidden cursor-grab relative"
    use:motion
  >
    <Motion
      style={{
        width: 150,
        height: getHeight(items),
        y: scrollY,
      }}
      drag="y"
      dragConstraints={{
        top: -getHeight(items) + size,
        bottom: 0,
      }}
      let:motion
    >
      <div style="height:{getHeight(items)}px;" class="w-[150px]" use:motion>
        {#each items as item (item)}
          <div
            style="border-radius:20px; height: {height}px; top:{(height +
              padding) *
              item}px; "
            class="bg-[#fff] w-[150px] absolute flex justify-center items-center text-black"
          >
            {item}
          </div>
        {/each}
      </div>
    </Motion>
  </div>
</Motion>
<Motion
  style={{
    width,
  }}
  let:motion
>
  <div
    use:motion
    style="transform-origin: 0%; position:absolute; left:25px; top:10px;"
    class="h-[6px] bg-[#fff] rounded-full"
  ></div>
</Motion>
