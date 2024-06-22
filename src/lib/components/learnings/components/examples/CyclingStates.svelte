<script>
  // Cycling through states
  import Box from "$lib/components/dev/ExamplesRoute/Box.svelte";
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
  let scale = useCycle(1, 1.25);
  let x = useCycle(0, 100);
</script>

<Box cls="bg-slate-800">
  <Motion
    animate={{
      rotate: $rotate,
      scale: $scale,
      x: $x,
    }}
    onTap={() => {
      rotate.next();
      scale.next();
      x.next();
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
