<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
  import { Motion, useAnimation } from "svelte-motion";
  let controls = useAnimation();
  let startCode = async () => {
    let all = [{ rotate: -90 }, { scale: 1.5 }, { rotate: 0 },{
      scale: 1,
      borderRadius: "50%",
    }, { scale: 0.9,borderRadius: "20%", }];
    await controls.start(all[0]);
    await controls.start(all[1]);
    await controls.start(all[2]);
    await controls.start(all[3]);
    await controls.start(all[4]);
  };
</script>

<Box cls="bg-slate-800 text-black">
  <Motion animate={controls} onTap={startCode} let:motion
    ><div class="box" use:motion>
      Tap 
    </div></Motion
  >
</Box>
