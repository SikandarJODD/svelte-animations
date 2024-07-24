<script lang="ts">
  import { Motion, useMotionTemplate, useMotionValue } from "svelte-motion";

  let divRef: HTMLInputElement;
  let isFocused = false;
  let positionX = useMotionValue(0);
  let positionY = useMotionValue(0);
  let opacity = 0;
  let handleMouseMove = (e: MouseEvent) => {
    const rect = divRef.getBoundingClientRect();
    positionX.set(e.clientX - rect.left);
    positionY.set(e.clientY - rect.top);
  };
  let handleFocus = () => {
    isFocused = true;
    opacity = 1;
  };
  let handleBlur = () => {
    isFocused = false;
    opacity = 0;
  };
  let handleMouseEnter = () => {
    opacity = 1;
  };
  let handleMouseLeave = () => {
    opacity = 0;
  };
  let shineBorder = useMotionTemplate`radial-gradient(30% 30px at ${positionX}px ${positionY}px, black 45%,transparent)`;
  shineBorder.onChange(() => {
    console.log(shineBorder, "shininggg");
  });
</script>

<div class="relative w-52">
  <input
    on:mousemove={handleMouseMove}
    on:focus={handleFocus}
    on:blur={handleBlur}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    autocomplete="off"
    placeholder="Enter Name Here"
    type="text"
    name="name"
    class="h-12 w-full cursor-default rounded-md border border-gray-800 bg-gray-950 p-3.5 text-gray-100 transition-colors duration-500 placeholder:select-none placeholder:text-gray-500 focus:border-[#8678F9] focus:outline-none"
  />

  <input
    type="text"
    bind:this={divRef}
    disabled
    style="border: '1px solid #8678F9'; opacity:{opacity}; mask-image: {$shineBorder};"
    aria-hidden="true"
    class="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-transparent p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
  />
</div>
