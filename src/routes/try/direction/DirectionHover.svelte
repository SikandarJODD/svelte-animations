<script>
  import { Motion, AnimatePresence } from "svelte-motion";
  import { writable } from "svelte/store";
  import { cn } from "$lib/utils";

  export let imageUrl =
    "https://i.pinimg.com/736x/98/d8/f2/98d8f20aebc103a2bd97d15c6c56fca1.jpg";
  export let children = "coding";
  export let childrenClassName = "";
  export let imageClassName = "";
  export let className = "";

  let ref;
  const direction = writable("left");

  function handleMouseEnter(event) {
    if (!ref) return;

    const directionValue = getDirection(event, ref);
    console.log("direction", directionValue);

    switch (directionValue) {
      case 0:
        direction.set("top");
        break;
      case 1:
        direction.set("right");
        break;
      case 2:
        direction.set("bottom");
        break;
      case 3:
        direction.set("left");
        break;
      default:
        direction.set("left");
        break;
    }
  }

  function getDirection(ev, obj) {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  }

  const variants = {
    initial: { x: 0 },
    exit: { x: 0, y: 0 },
    top: { y: 20 },
    bottom: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const textVariants = {
    initial: { y: 0, x: 0, opacity: 0 },
    exit: { y: 0, x: 0, opacity: 0 },
    top: { y: -20, opacity: 1 },
    bottom: { y: 2, opacity: 1 },
    left: { x: -2, opacity: 1 },
    right: { x: 20, opacity: 1 },
  };
</script>

<div class="flex justify-center items-center h-[80vh]">
  <Motion let:motion>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      use:motion
      class={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden relative group/card",
        className
      )}
      bind:this={ref}
      on:mouseenter={handleMouseEnter}
    >
      <AnimatePresence let:item list={[{ key: "s" }]}>
        <Motion
          initial="initial"
          whileHover={$direction}
          exit="exit"
          let:motion
        >
          <div class="relative h-full w-full" use:motion>
            <div
              class="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-700"
            />
            <Motion
              transition={{ duration: 0.2, ease: "easeOut" }}
              {variants}
              let:motion
            >
              <div
                use:motion
                class="h-full w-full relative bg-gray-50 dark:bg-black"
              >
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                  alt="image"
                  class="h-full w-full object-cover scale-[1.15]"
                  src={imageUrl}
                />
              </div>
            </Motion>
            <Motion
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={textVariants}
              let:motion
            >
              <div
                use:motion
                class="text-white absolute bottom-4 left-4 z-40 {childrenClassName}"
              >
                <slot>{children}</slot>
              </div>
            </Motion>
          </div>
        </Motion>
      </AnimatePresence>
    </div>
  </Motion>
</div>
