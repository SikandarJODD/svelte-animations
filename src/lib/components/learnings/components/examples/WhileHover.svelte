<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion } from "svelte-motion";
  </script>
  
  <Box cls="bg-slate-900 flex ">
      <Motion
        whileHover={{
          scale: 0.8,
        }}
        let:motion><div class="box" use:motion></div></Motion
      >
  </Box>
  