<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import BoxReveal from "./BoxReveal.svelte";
</script>

<div
  class="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8"
>
  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <p class="text-[3.5rem] font-semibold">
      Svelte Animations<span class="text-[#5046e6]">.</span>
    </p>
  </BoxReveal>

  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <h2 class="mt-[.5rem] text-[1rem]">
      UI library for{" "}
      <span class="text-[#5046e6]">Design Engineers</span>
    </h2>
  </BoxReveal>

  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <div class="mt-[1.5rem]">
      <p>
        -&gt; 20+ free and open-source animated components built with
        <span class="font-semibold text-[#5046e6]"> Svelte</span>,
        <span class="font-semibold text-[#5046e6]"> Svelte-Inview</span>,
        <span class="font-semibold text-[#5046e6]"> Tailwind CSS</span>, and
        <span class="font-semibold text-[#5046e6]"> Framer Motion</span>
        . <br />
        -&gt; 100% open-source, and customizable. <br />
      </p>
    </div>
  </BoxReveal>

  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <Button class="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
  </BoxReveal>
</div>
