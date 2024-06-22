<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion } from "svelte-motion";
  </script>
  
  <Box cls="bg-slate-900 flex">
    <Motion
      whileTap={{
        rotate: 45,
        scale: 0.75,
        
      }}
      let:motion><div class="box" use:motion></div></Motion
    >
  </Box>
  