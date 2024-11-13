<script>
  import Spotlight from "./Spotlight.svelte";
</script>

<div
  class="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
>
  <Spotlight class="-top-40 left-0 md:left-40 md:-top-8" fill="white" />
  <div class=" max-w-7xl mx-auto relative z-10 w-full p-4">
    <h1
      class="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Spotlight <br /> is the new trend.
    </h1>
    <p
      class="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
    >
      Spotlight effect is a great way to draw attention to a specific part of
      the page. Here, we are drawing the attention towards the text section of
      the page. I don&apos;t know why but I&apos;m running out of copy.
    </p>
  </div>
</div>
