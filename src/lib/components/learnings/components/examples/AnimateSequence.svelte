<script>
    import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
    import { Motion, useAnimation } from "svelte-motion";
    let controls = useAnimation();
    let startCode = () => {
      let all = [{ rotate: -90 }, { scale: 1.5 }, { rotate: 0 }, { scale: 1 }];
      controls.mount();
      controls.start(all[0]).then(() => {
        controls.mount();
        controls.start(all[1]).then(() => {
          controls.mount();
          controls.start(all[2]).then(() => {
            controls.mount();
            controls.start(all[3]);
          });
        });
      });
      
    };
  </script>
  
  <Box cls="bg-slate-800">
    <Motion animate={controls} onTap={startCode} let:motion
      ><div class="box"  use:motion></div></Motion
    >
  </Box>
  