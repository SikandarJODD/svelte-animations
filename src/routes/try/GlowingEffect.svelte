<script lang="ts">
  import { onMount } from "svelte";
  import { animate } from "svelte-motion";

  export let blur = 0;
  export let inactiveZone = 0.7;
  export let proximity = 0;
  export let spread = 20;
  export let variant = "default";
  export let glow = false;
  export let className = "";
  export let movementDuration = 2;
  export let borderWidth = 1;
  export let disabled = true;

  let containerRef: HTMLDivElement;
  let lastPosition = { x: 0, y: 0 };
  let animationFrameRef: number;

  function handleMove(e: MouseEvent) {
    if (!containerRef) return;

    if (animationFrameRef) {
      cancelAnimationFrame(animationFrameRef);
    }

    animationFrameRef = requestAnimationFrame(() => {
      if (!containerRef) return;

      const { left, top, width, height } = containerRef.getBoundingClientRect();
      const mouseX = e?.x ?? lastPosition.x;
      const mouseY = e?.y ?? lastPosition.y;

      if (e) {
        lastPosition = { x: mouseX, y: mouseY };
      }

      const center = [left + width * 0.5, top + height * 0.5];
      const distanceFromCenter = Math.hypot(
        mouseX - center[0],
        mouseY - center[1]
      );
      const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

      if (distanceFromCenter < inactiveRadius) {
        containerRef.style.setProperty("--active", "0");
        return;
      }

      const isActive =
        mouseX > left - proximity &&
        mouseX < left + width + proximity &&
        mouseY > top - proximity &&
        mouseY < top + height + proximity;

      containerRef.style.setProperty("--active", isActive ? "1" : "0");

      if (!isActive) return;

      const currentAngle =
        parseFloat(containerRef.style.getPropertyValue("--start")) || 0;
      let targetAngle =
        (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI +
        90;

      const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
      const newAngle = currentAngle + angleDiff;

      animate(currentAngle, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          containerRef.style.setProperty("--start", String(value));
        },
      });
    });
  }

  onMount(() => {
    if (disabled) return;

    const handleScroll = () => (e: MouseEvent) => handleMove(e);
    const handlePointerMove = (e: MouseEvent) => handleMove(e);

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      if (animationFrameRef) {
        cancelAnimationFrame(animationFrameRef);
      }
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  });
</script>

<div
  bind:this={containerRef}
  class="pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity {glow
    ? 'opacity-100'
    : ''} {blur > 0 ? 'blur-[var(--blur)]' : ''} {disabled
    ? 'hidden'
    : ''} {className}"
  style="
    --blur: {blur}px;
    --spread: {spread};
    --start: 0;
    --active: 0;
    --glowingeffect-border-width: {borderWidth}px;
    --repeating-conic-gradient-times: 5;
    --gradient: {variant === 'white'
    ? `repeating-conic-gradient(
        from 236.84deg at 50% 50%, var(--black), var(--black) calc(25% / var(--repeating-conic-gradient-times))
      )`
    : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
      radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
      radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
      radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
      repeating-conic-gradient(
        from 236.84deg at 50% 50%, #dd7bbb 0%, #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
        #5a922c calc(50% / var(--repeating-conic-gradient-times)), #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
        #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
      )`}"
>
  <div
    class="glow rounded-[inherit] after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:[border:var(--glowingeffect-border-width)_solid_transparent] after:[background:var(--gradient)] after:[background-attachment:fixed] after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:[mask-clip:padding-box,border-box] after:[mask-composite:intersect] after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
  />
</div>
