<script>
  import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
  import { Motion } from "svelte-motion";
</script>

<Box cls="bg-slate-800 flex" minHeight={450}>
  <Motion
    let:motion
    drag={true}
    dragDirectionLock
    dragConstraints={{
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }}
    dragTransition={{
      bounceStiffness: 600,
      bounceDamping: 20,
    }}
    dragElastic={0.5}
    whileTap={{
      cursor: "grabbing",
    }}><div class="box" use:motion></div></Motion
  >
</Box>
