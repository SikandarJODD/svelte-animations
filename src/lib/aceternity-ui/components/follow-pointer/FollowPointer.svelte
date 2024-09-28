<script>
  import { fade, fly, scale, slide } from "svelte/transition";
  export let x;
  export let y;
  export let title = "William Shakespeare";

  const colors = [
    "var(--sky-500)",
    "var(--neutral-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
</script>

<div
  class="rounded-full absolute z-50"
  style="top: {y}px; left: {x}px; pointer-events: none;"
  in:scale
>
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="1"
    style="transform: rotate(-70deg) translateX(-2px) translateY(-15px); "
    viewBox="0 0 16 16"
    class="h-6 w-6 text-sky-500 stroke-sky-600"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
    ></path>
  </svg>

  <div
    class="px-4 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full"
    style="background-color: {randomColor};"
  >
    {title}
  </div>
</div>
