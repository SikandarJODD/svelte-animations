<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
    import { Motion } from "svelte-motion";
  </script>
  
  <Box cls="bg-slate-800 flex text-black">
    <Motion
      drag={true}
      whileHover={{
        opacity: 1,
      }}
      whileTap={{
        opacity: 1,
        scale: 1.05,
        boxShadow: "0px 5px 8px #222",
      }}
      whileDrag={{
        boxShadow: "0px 8px 12px #222",
        cursor: "grabbing",
        border: "2px solid #0091FF",
      }}
      transition={{
        duration: 0.2,
      }}
      let:motion><div class="box" use:motion>Drag</div></Motion
    >
  </Box>
  