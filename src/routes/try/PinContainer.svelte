<script>
  import { cn } from "$lib/utils";
  import PinPerspective from "./PinPerspective.svelte";

  export let title = "";
  export let href = "/";
  let className = "";
  export { className as class };
  export let containerClassName = "";

  let transform = "translate(-50%,-50%) rotateX(0deg) scale(1)";

  const onMouseEnter = () => {
    transform = "translate(-50%,-50%) rotateX(40deg) scale(0.8)";
  };

  const onMouseLeave = () => {
    transform = "translate(-50%,-50%) rotateX(0deg) scale(1)";
  };
</script>

<a
  class="relative group/pin z-50 cursor-pointer {containerClassName}"
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  {href}
>
  <div
    style="perspective: 1000px; transform: rotateX(70deg) translateZ(0deg);"
    class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      style="transform: {transform};"
      class="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
    >
      <div class={cn("relative z-50", className)}>
        <slot></slot>
      </div>
    </div>
  </div>

  <PinPerspective {title} {href} />
</a>
