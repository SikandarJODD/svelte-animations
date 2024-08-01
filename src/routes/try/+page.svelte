<script>
  import AnimatedSubscribeButton from "$lib/magicui/buttons/animatedSubscribe/AnimatedSubscribeButton.svelte";
  import PulsatingBtnExample from "$lib/magicui/buttons/pulsating/PulsatingBtnExample.svelte";
  import PulsatingButton from "$lib/magicui/buttons/pulsating/PulsatingButton.svelte";
  import { CheckIcon, ChevronRightIcon } from "lucide-svelte";
</script>

<div class="flex justify-center items-center h-[100vh] w-1/2 mx-auto gap-10">
  <AnimatedSubscribeButton
    buttonColor="#000"
    buttonTextColor="#ffffff"
    subscribeStatus={false}
  >
    <span slot="initialText" class="group inline-flex items-center">
      Subscribe{" "}
      <ChevronRightIcon
        class="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
    <span slot="changeText" class="group inline-flex items-center">
      <CheckIcon class="mr-2 mt-0.5 h-4 w-4" />
      Subscribed{" "}
    </span>
  </AnimatedSubscribeButton>
</div>
