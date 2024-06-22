<script>
  import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
  import { Motion, useAnimation } from "svelte-motion";
  let controls = useAnimation();
</script>

<Box cls="bg-slate-800" minHeight={450}>
  <div
    class="bg-gray-500/10 h-80  w-80 flex justify-center items-center rounded-xl shadow-md"
  >
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
      }}
      
      ><div class="box" use:motion>Smooth Drag</div></Motion
    >
  </div>
</Box>
