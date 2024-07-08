<script lang="ts">
  import { cn } from "$lib/utils";
  import { M, Motion } from "svelte-motion";

  let className: any = "";
  export { className as class };
</script>

<div class={cn("relative w-full h-full", className)}>
  <svg
    width="156"
    height="63"
    viewBox="0 0 156 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute top-0 left-0 ml-24 mt-8"
  >
    <path
      d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
      stroke="url(#grad1)"
      stroke-width={1.5}
    />
    <defs>
      <M.linearGradient />
      <Motion
        variants={{
          initial: {
            x1: "40%",
            x2: "50%",
            y1: "160%",
            y2: "180%",
          },
          animate: {
            x1: "0%",
            x2: "10%",
            y1: "-40%",
            y2: "-20%",
          },
        }}
        animate="animate"
        initial="initial"
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
        }}
        isSVG={true}
        let:motion
      >
        <linearGradient id="grad1" use:motion>
          <stop stop-color="#18CCFC" stop-opacity="0" />
          <stop stop-color="#18CCFC" />
          <stop offset="0.325" stop-color="#6344F5" />
          <stop offset="1" stop-color="#AE48FF" stop-opacity="0" />
        </linearGradient>
      </Motion>
    </defs>
  </svg>
  <slot>Helo</slot>
</div>
