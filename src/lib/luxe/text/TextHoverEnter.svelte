<script>
  import { Motion } from "svelte-motion";

  let DURATION = 0.25;
  let STAGGER = 0.025;
  export let text = "Hover Button";
  let letters = text
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter));
</script>

<Motion initial="initial" whileHover="hovered" let:motion>
  <div
    use:motion
    class="relative block overflow-hidden text-base font-medium text-neutral-400"
  >
    <div class="w-full px-1">
      {#each letters as letter, i}
        <Motion
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
          let:motion
        >
          <span class="inline-block tracking-[-3.8px]" use:motion>{letter}</span>
        </Motion>
      {/each}
    </div>
    <div class="absolute inset-0">
      {#each letters as letter, i}
        <Motion
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
          let:motion
        >
          <span class="inline-block tracking-[-3.8px]" use:motion>{letter}</span>
        </Motion>
      {/each}
    </div>
  </div>
</Motion>
