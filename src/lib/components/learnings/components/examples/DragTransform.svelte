<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion, useTransform, useMotionValue } from "svelte-motion";
    let x = useMotionValue(0);
    let scale = useTransform(x, [-150, 0, 150], [1.5, 1, 0.4]);
    let rotate = useTransform(x, [-150, 0, 150], [-120, 0, 120]);
    // let borderRadius = useTransform(x, [-150, 0, 150], [50, 50, 100]);
  </script>
  
  <Box cls="bg-slate-800 " minHeight={450}>
    <Motion
      style={{
        x,
        scale,
        rotate,
      }}
      let:motion
      drag="x"
      dragConstraints={{
        right: 0,
        left: 0,
      }}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 20,
      }}
      whileTap={{
        cursor: "grabbing",
      }}><div class="box" use:motion></div></Motion
    >
  </Box>
  