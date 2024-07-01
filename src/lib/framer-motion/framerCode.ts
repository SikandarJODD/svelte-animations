export let fmcode = [
    {
        id: 1,
        code: `<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Motion } from "svelte-motion";
  let i = 0;
</script>

  {#key i}
    <Motion
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 2,
      }}
      let:motion><div class="box" use:motion></div></Motion
    >
  {/key}
  <div>
    <Button
      on:click={() => (i += 1)}
      variant="outline"
      class="bg-gray-700/30 border-white/30 text-white"
      size="sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-rotate-ccw"
        ><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
          d="M3 3v5h5"
        /></svg
      >
    </Button>
  </div>
`
    },
    {
        id: 2,
        code: `<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { Motion } from "svelte-motion";
    let i = 0;
  </script>
  
    {#key i}
      <Motion
        animate={{
          rotate: 180,
        }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
        let:motion><div class="box" use:motion></div></Motion
      >
    {/key}
    <div>
      <Button
        on:click={() => (i += 1)}
        variant="outline"
        class="bg-gray-700/30 border-white/30 text-white"
        size="sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rotate-ccw"
          ><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
            d="M3 3v5h5"
          /></svg
        >
      </Button>
    </div>`
    }, {
        id: 3,
        code: `<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { Motion } from "svelte-motion";
    let i = 0;
</script>
  
    {#key i}
      <Motion
        animate={{
          rotate: 360,
        }}
        transition={{
          type: "spring",
          duration: 5,
          bounce: 0.6,
        }}
        let:motion><div class="box" use:motion></div></Motion
      >
    {/key}
    <div>
      <Button
        on:click={() => (i += 1)}
        variant="outline"
        class="bg-gray-700/30 border-white/30 text-white"
        size="sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rotate-ccw"
          ><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
            d="M3 3v5h5"
          /></svg
        >
      </Button>
    </div>`
    }, {
        id: 4,
        code: `<script>
    import { Motion } from "svelte-motion";
    let i = 0;
</script>
  
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
  `
    },
    {
        id: 5,
        code: `<script>
    import { Motion } from "svelte-motion";
    let i = 0;
</script>
  
{#key i}
  <Motion
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    let:motion><div class="box" use:motion></div></Motion
  >
{/key}
  `
    }, {
        id: 6,
        code: `<script>
    import { Motion } from "svelte-motion";
</script>
  
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
  </div>
</Motion>
<Motion
  whileHover={{
    backgroundColor: "#0091FF",
  }}
  let:motion><div class="box" use:motion>
    BgColor
  </div>
</Motion>`
    },
    {
        id: 7,
        code: `<script>
  import { Motion } from "svelte-motion";
</script>

<Motion
  whileTap={{
    rotate: 45,
    scale: 0.75,
  }}
  let:motion><div class="box" use:motion>Rotate</div>
</Motion>
<Motion
  whileTap={{
    scale: 0.84,
  }}
  let:motion><div class="box" use:motion>Simple</div>
</Motion>
`
    },
    {
        id: 8,
        code: `<script>
    import { Motion } from "svelte-motion";
</script>
  
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
  let:motion><div class="box" use:motion>Drag</div>
</Motion>
  `
    },
    {
        id: 9,
        code: `<script>

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
  </div>
</Motion>`
    },
    {
        id: 10,
        code: `<script>
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

  <Motion animate={controls} onTap={startCode} let:motion
    ><div class="box" use:motion>
      Tap 
    </div>
  </Motion>
`
    },
    {
        id: 11,
        code: `<script>
  import { Motion, useAnimation } from "svelte-motion";
  let controls = useAnimation();
</script>

  <div
    class="bg-gray-500/10 h-80  w-80 flex justify-center items-center rounded-xl shadow-md"
  >
    <Motion
      let:motion
      drag={true}
      dragConstraints={{
        top: -100,
        bottom: 100,
        right: 100,
        left: -100,
      }}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 20,
      }}
      
      dragElastic={0.5}
      whileTap={{
        cursor: "grabbing",
      }}
      
      ><div class="box" use:motion>Smooth Drag</div>
    </Motion>
  </div>
`
    },
    {
        id: 12,
        code: `<script>
  import { Motion } from "svelte-motion";
</script>

  <Motion
    let:motion
    drag={true}
    dragDirectionLock
    dragConstraints={{
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }}
    dragTransition={{
      bounceStiffness: 600,
      bounceDamping: 20,
    }}
    dragElastic={0.5}
    whileTap={{
      cursor: "grabbing",
    }}
    ><div class="box relative" use:motion>
      <div class="absolute top-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg
        >
      </div>
      <div class="absolute bottom-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
        >
      </div>
      <div class='absolute right-1'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
        >
      </div>
      <div class='absolute left-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </div> Drag
    </div>
  </Motion>
`
    },
    {
        id: 13,
        code: `<script>
    import { Motion, useTransform, useMotionValue } from "svelte-motion";
    let x = useMotionValue(0);
    let scale = useTransform(x, [-150, 0, 150], [1.5, 1, 0.4]);
    let rotate = useTransform(x, [-150, 0, 150], [-120, 0, 120]);
    // let borderRadius = useTransform(x, [-150, 0, 150], [50, 50, 100]);
  </script>
  
    <Motion
      style={{
        x,
        scale,
        rotate,
      }}
      let:motion
      drag="x"
      dragConstraints={{
        right: 0,
        left: 0,
      }}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 20,
      }}
      whileTap={{
        cursor: "grabbing",
      }}
      ><div class="box relative" use:motion>
        Drag
        <div class="absolute left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00133D"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg
          >
        </div>
        <div class="absolute right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00133D"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
          >
        </div>
      </div>
    </Motion>
  `
    },
    {
        id: 14,
        code: `<script>
  import { Motion, useTransform, useMotionValue } from "svelte-motion";
  let x = useMotionValue(0);
  let y = useMotionValue(0);
  let rotateX = useTransform(y, [-100, 100], [60, -60]);
  let rotateY = useTransform(x, [-100, 100], [-60, 60]);
</script>

  <div class="small_circle">
    <Motion
      let:motion
      style={{
        left: -25,
        top: -25,
        position: "relative",
        cursor: "grab",
        x,
        y,
        rotateX,
        rotateY,
      }}
      drag={true}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      ><div class="box font-medium" use:motion>3D</div>
    </Motion>
  </div>
<style>
  .small_circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3)
    );
    perspective: 800;
  }
</style>
`
    },
]