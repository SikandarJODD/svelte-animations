<script>
  import Box from "$lib/components/dev/tags/Box.svelte";

  // Cycling through states
  import { Motion, useCycle } from "svelte-motion";
  let stateText = "State 1";
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
  let scale = useCycle(0.8, 1.2);
  let x = useCycle(0, 140);
  let backgroundColor = useCycle("#9EF4FF", "#0FBFFF");
</script>

<Box cls="bg-slate-800 text-black">
  <Motion
    animate={{
      scale: $scale,
      backgroundColor: $backgroundColor,
    }}
    transition={{
      duration: 0.3,
    }}
    onTap={() => {
      scale.next();
      backgroundColor.next();
      if (stateText === "State 1") {
        stateText = "State 2";
      } else {
        stateText = "State 1";
      }
    }}
    let:motion
    ><div class="box" use:motion>
      {stateText}
    </div></Motion
  >
</Box>
