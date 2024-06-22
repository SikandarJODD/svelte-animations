<script>
    // Cycling through states
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion, useCycle } from "svelte-motion";
    // In React 
    // const [animate, cycle] = useCycle(
    //   {
    //     scale: 1,
    //     rotate: 0,
    //   },
    //   {
    //     scale: 1.25,
    //     rotate: 90,
    //   }
    // );
    // In Svelte 
    let rotate = useCycle(0, 90);
    let scale = useCycle(1, 1.25);
  </script>
  
  <Box cls="bg-slate-800">
    <Motion
      animate={{
        rotate: $rotate,
        scale: $scale,
      }}
      onTap={() => {
        rotate.next();
        scale.next();
      }}
      let:motion><div class="box" use:motion></div></Motion
    >
  </Box>
  