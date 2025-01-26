<script lang="ts">
  import { Motion } from "svelte-motion";

  export let text: string = "This is a text generation effect.";
  export let duration = 0.3;
  let _class: string = "";
  export { _class as class };
</script>

<div class="inline-block whitespace-pre tracking-[-3.8px]">
  {#each text.split("") as item, index}
    <Motion
      initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
      transition={{
        ease: "easeOut",
        duration: duration,
        delay: index * 0.015,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        rotateX: 0,
        y: 0,
      }}
      let:motion
    >
      <span
        use:motion
        class="inline-block whitespace-pre tracking-tighter text-neutral-200"
      >
        {item}
      </span>
    </Motion>
  {/each}
</div>
