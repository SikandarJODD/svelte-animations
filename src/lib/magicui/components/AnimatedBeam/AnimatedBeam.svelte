<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount, tick } from "svelte";
  import { M, Motion } from "svelte-motion";

  let className: any = "";
  export { className as class };
  export let containerRef;
  export let fromRef;
  export let toRef;
  export let curvature = 0;
  export let reverse = false; // Include the reverse pro;
  export let duration = Math.random() * 3 + 4;
  export let delay = 0;
  export let pathColor = "gray";
  export let pathWidth = 2;
  export let pathOpacity = 0.2;
  export let gradientStartColor = "#ffaa40";
  export let gradientStopColor = "#9c40ff";
  export let startXOffset = 0;
  export let startYOffset = 0;
  export let endXOffset = 0;
  export let endYOffset = 0;

  let id = crypto.randomUUID().slice(0, 8);
  let pathD = "";
  let svgDimensions = { width: 0, height: 0 };

  // Calculate the gradient coordinates based on the reverse prop
  let gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  let updatePath = () => {
    let containerRect = containerRef?.getBoundingClientRect();
    let rectA = fromRef?.getBoundingClientRect();
    let rectB = toRef?.getBoundingClientRect();

    let svgWidth = containerRect.width;
    let svgHeight = containerRect.height;
    svgDimensions.width = svgWidth;
    svgDimensions.height = svgHeight;

    let startX =
      rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
    let startY =
      rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
    let endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
    let endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

    let controlY = startY - curvature;
    let d = `M ${startX},${startY} Q ${
      (startX + endX) / 2
    },${controlY} ${endX},${endY}`;
    pathD = d;
  };
  onMount(async () => {
    await tick().then(() => {
      updatePath();
      const resizeObserver = new ResizeObserver((entries) => {
        // For all entries, recalculate the path
        for (let entry of entries) {
          updatePath();
        }
      });

      // Observe the container element
      if (containerRef) {
        resizeObserver.observe(containerRef);
      }
     
    });
  });
</script>

<svg
  fill="none"
  width={svgDimensions.width}
  height={svgDimensions.height}
  xmlns="http://www.w3.org/2000/svg"
  class={cn(
    "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
    className
  )}
  viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
>
  <path
    d={pathD}
    stroke={pathColor}
    stroke-width={pathWidth}
    stroke-opacity={pathOpacity}
    stroke-linecap="round"
  />
  <path
    d={pathD}
    stroke-width={pathWidth}
    stroke={`url(#${id})`}
    stroke-opacity="1"
    stroke-linecap="round"
  />
  <defs>
    <M.linearGradient />
    <Motion
      initial={{
        x1: "0%",
        x2: "0%",
        y1: "0%",
        y2: "0%",
      }}
      animate={{
        x1: gradientCoordinates.x1,
        x2: gradientCoordinates.x2,
        y1: gradientCoordinates.y1,
        y2: gradientCoordinates.y2,
      }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
        repeat: Infinity,
        repeatDelay: 0,
      }}
      isSVG={true}
      let:motion
    >
      <linearGradient
        use:motion
        {id}
        gradientUnits="userSpaceOnUse"
        class="transform-gpu"
      >
        <stop stop-color={gradientStartColor} stop-opacity="0"></stop>
        <stop stop-color={gradientStartColor}></stop>
        <stop offset="32.5%" stop-color={gradientStopColor}></stop>
        <stop offset="100%" stop-color={gradientStopColor} stop-opacity="0"
        ></stop>
      </linearGradient>
    </Motion>
  </defs>
</svg>
