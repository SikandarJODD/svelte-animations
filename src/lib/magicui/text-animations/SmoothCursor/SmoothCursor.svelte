<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { spring } from "svelte/motion";

  export let springConfig = {
    damping: 0.45,
    stiffness: 0.05,
    precision: 0.001,
  };

  const cursorX = spring(0, springConfig);
  const cursorY = spring(0, springConfig);
  const rotation = spring(0, {
    ...springConfig,
    damping: 0.6,
    stiffness: 0.03,
  });
  const scale = spring(1, { ...springConfig, stiffness: 0.05, damping: 0.035 });

  let isMoving = false;
  let lastMousePos = { x: 0, y: 0 };
  let velocity = { x: 0, y: 0 };
  let lastUpdateTime = Date.now();
  let previousAngle = 0;
  let accumulatedRotation = 0;

  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let rafId = 0;

  function updateVelocity(currentPos = { x: 0, y: 0 }) {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime;
    if (deltaTime > 0) {
      velocity = {
        x: (currentPos.x - lastMousePos.x) / deltaTime,
        y: (currentPos.y - lastMousePos.y) / deltaTime,
      };
    }

    lastUpdateTime = currentTime;
    lastMousePos = currentPos;
  }

  function smoothMouseMove(e: MouseEvent) {
    const currentPos = { x: e.clientX, y: e.clientY };
    updateVelocity(currentPos);

    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);

    cursorX.set(currentPos.x);
    cursorY.set(currentPos.y);

    if (speed > 0.1) {
      const currentAngle =
        Math.atan2(velocity.y, velocity.x) * (190 / Math.PI) + 90;
      let angleDiff = currentAngle - previousAngle;

      if (angleDiff > 180) angleDiff -= 360;
      if (angleDiff < -180) angleDiff += 360;

      accumulatedRotation += angleDiff;
      rotation.set(accumulatedRotation);
      previousAngle = currentAngle;

      scale.set(0.95);
      isMoving = true;

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        scale.set(1);
        isMoving = false;
      }, 170);
    }
  }

  function throttledMouseMove(e: MouseEvent) {
    // console.log("Mouse move event:", e.clientX, e.clientY);
    // console.log("isMoving:", isMoving);
    // console.log("Velocity:", velocity);
    // console.log("raf ifd", rafId);
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      smoothMouseMove(e);
      rafId = 0;
    });
  }


  // onDestroy(() => {
  //   // window.removeEventListener("mousemove", throttledMouseMove);
  //   document.body.style.cursor = "auto";
  //   if (rafId) cancelAnimationFrame(rafId);
  //   if (timeoutId) clearTimeout(timeoutId);
  // });
 onMount(() => {
    document.body.style.cursor = "none";

    // Optional: Reset it when component unmounts
    return () => {
      document.body.style.cursor = "auto";
    };
  });

</script>

<svelte:window

  on:mousemove={throttledMouseMove}
  on:mouseleave={() => {
    cursorX.set(-1000);
    cursorY.set(-1000);
    rotation.set(0);
    scale.set(1);
    isMoving = false;
  }}
/>
<div
  class="cursor"
  style="
    transform:
      translate(calc({$cursorX}px - 50%), calc({$cursorY}px - 50%))
      rotate({$rotation}deg)
      scale({$scale});
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={54}
    viewBox="0 0 50 54"
    fill="none"
    style="scale: 0.5;"
  >
    <g filter="url(#filter0_d_91_7928)">
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="black"
      />
      <path
        d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
        stroke="white"
        stroke-width={2.25825}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_91_7928"
        x={0.602397}
        y={0.952444}
        width={49.0584}
        height={52.428}
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.25825} />
        <feGaussianBlur stdDeviation={2.25825} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_7928"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_91_7928"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</div>

<style>
  :global(.cursor) {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 100;
    will-change: transform;
  }
</style>
