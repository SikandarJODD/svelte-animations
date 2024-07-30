<script lang="ts">
  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";

  export let word: string = "Blur In";
  export let variant: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  } = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  export let duration: number = 1;
  let className = "";
  export { className as class };

  let defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  let combinedVariants = variant || defaultVariants;
</script>

<Motion
  initial="hidden"
  animate="visible"
  transition={{ duration }}
  variants={combinedVariants}
  let:motion
>
  <h1
    class={cn(
      className,
      "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    )}
    use:motion
  >
    {word}
  </h1>
</Motion>
