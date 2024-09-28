<script>
  import { Motion } from "svelte-motion";
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
</script>

<div class="absolute inset-0">
  {#each { length: 12 } as _, i}
    <Motion
      animate={{
        top: `calc(${random() * 100}% + ${randomMove()}px)`,
        left: `calc(${random() * 100}% + ${randomMove()}px)`,
        opacity: randomOpacity(),
        scale: [1, 1.2, 0],
      }}
      transition={{
        duration: random() * 2 + 4,
        repeat: Infinity,
        ease: "linear",
      }}
      let:motion
    >
      <span
        use:motion
        style="position: absolute; top: {random() * 100}%; left: {random() *
          100}%; width: 2px; height: 2px; border-radius: 50%; z-index: 1;"
        class="inline-block bg-black dark:bg-white"
      ></span>
    </Motion>
  {/each}
</div>
