<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion, useAnimation } from "svelte-motion";
    let controls = useAnimation();
  </script>
  
  <Box cls="bg-slate-800" minHeight={450}>
    <Motion
      let:motion
      drag={true}
      dragConstraints={{
        top: -100,
        bottom: 100,
        right: 100,
        left: -100,
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
  