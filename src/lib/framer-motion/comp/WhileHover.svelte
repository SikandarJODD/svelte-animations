<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
    import { Motion } from "svelte-motion";
  </script>
  
  <Box cls="bg-slate-800 flex gap-3 md:gap-10 flex-col md:flex-row text-black">
      <Motion
        whileHover={{
          scale: 0.86,
        }}
        let:motion><div class="box" use:motion>
          Scale
        </div></Motion
      >
      <Motion
        whileHover={{
          scale: 0.8,
          rotate: 45,
        }}
        let:motion><div class="box" use:motion>
          Hover Rotate
        </div></Motion
      >
      <Motion
        whileHover={{
          backgroundColor: "#0091FF",
        }}
        let:motion><div class="box" use:motion>
          BgColor
        </div></Motion
      >
  </Box>
  