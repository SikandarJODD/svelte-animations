<script>
  import SparkleCard from "./SparkleCard.svelte";
  import Container from "./Container.svelte";
  import GeminiLogo from "./GeminiLogo.svelte";
  import MetaIconOutline from "./MetaIconOutline.svelte";
  import OpenAiLogo from "./OpenAILogo.svelte";
  import { onMount } from "svelte";
  let key = false;
  onMount(() => {
    let intervalId = setInterval(() => {
      key = !key;
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<div
  class="p-8 overflow-hidden h-full relative flex items-center justify-center"
>
  <div class="flex flex-row flex-shrink-0 justify-center items-center gap-2">
    {#key key}
      <div class="animate-ty" style="--animation-delay:0.5s">
        <Container class="h-8 w-8 circle-1 ">
          <GeminiLogo class="h-4 w-4 " />
        </Container>
      </div>
      <div class="animate-ty" style="--animation-delay:1s">
        <Container class="h-12 w-12 circle-1">
          <MetaIconOutline class="h-6 w-6 " />
        </Container>
      </div>
      <div class="animate-ty" style="--animation-delay:1.8s">
        <Container class="circle-3">
          <OpenAiLogo class="h-8 w-8 dark:text-white" />
        </Container>
      </div>
      <div class="animate-ty" style="--animation-delay:2.6s">
        <Container class="h-12 w-12 circle-4">
          <MetaIconOutline class="h-6 w-6 " />
        </Container>
      </div>
      <div class="animate-ty" style="--animation-delay:3.5s">
        <Container class="h-8 w-8 circle-5">
          <GeminiLogo class="h-4 w-4 " />
        </Container>
      </div>
    {/key}
  </div>

  <div
    class="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move"
  >
    <div class="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
      <SparkleCard />
    </div>
  </div>
</div>
