<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { Motion } from "svelte-motion";
    let i = 0;
  </script>
  
  <Box cls="bg-slate-900 " minHeight={400}>
    {#key i}
      <Motion
        animate={{
          rotate: 360,
        }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
        }}
        let:motion><div class="box" use:motion></div></Motion
      >
    {/key}
  </Box>
  