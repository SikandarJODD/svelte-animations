<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion, useTransform, useMotionValue } from "svelte-motion";
    let x = useMotionValue(0);
    let y = useMotionValue(0);
    let rotateX = useTransform(y, [-100, 100], [60, -60]);
    let rotateY = useTransform(x, [-100, 100], [-60, 60]);
  </script>
  
  <Box cls="bg-slate-800 flex" minHeight={450}>
    <div class="small_circle">
      <Motion
        let:motion
        style={{
          left: -30,
          top: -30,
          position: "relative",
          cursor: "grab",
          x,
          y,
          rotateX,
          rotateY,
        }}
        drag={true}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0.6}
        whileTap={{ cursor: "grabbing" }}
        ><div class="box" use:motion></div></Motion
      >
    </div>
  </Box>
  
  <style>
    .small_circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: radial-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3)
      );
      perspective: 800;
    }
  </style>
  