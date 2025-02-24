<script>
  export let title = "";
  export let href = "/";

  let circles = [0, 2, 4]; // Different delay times for the circles
</script>

<div
  class="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
>
  <div class="w-full h-full -mt-7 flex-none inset-0">
    <div class="absolute top-0 inset-x-0 flex justify-center">
      <a
        {href}
        target="_blank"
        class="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
      >
        <span
          class="relative z-20 text-white text-xs font-bold inline-block py-0.5"
        >
          {title}
        </span>
        <span
          class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
        ></span>
      </a>
    </div>

    <div
      style="perspective: 1000px; transform: rotateX(70deg) translateZ(0);"
      class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
    >
      {#each circles as delay}
        <div
          class="absolute -left-[96px] -top-[96px] h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] animate-pulse"
          style="animation-delay: {delay}s; "
        ></div>
      {/each}
    </div>

    <div
      class="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover:h-40 blur-[2px]"
    ></div>
    <div
      class="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover:h-40"
    ></div>
    <div
      class="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"
    ></div>
    <div
      class="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"
    ></div>
  </div>
</div>

<style>
  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  .animate-pulse {
    animation: pulse 6s infinite;
  }
</style>
