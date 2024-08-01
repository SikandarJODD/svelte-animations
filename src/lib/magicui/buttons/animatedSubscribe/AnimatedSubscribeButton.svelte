<script lang="ts">
  import { Motion} from "svelte-motion";

  export let buttonColor: string = "#000";
  export let buttonTextColor: string = "#fff";
  export let subscribeStatus: boolean = false;

  let isSubscribed = subscribeStatus;
</script>

{#if isSubscribed}
  <Motion
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    let:motion
  >
    <button
      on:click={() => (isSubscribed = !isSubscribed)}
      class="relative flex w-[200px] items-center justify-center overflow-hidden rounded-md bg-white p-[10px]"
      use:motion
    >
      <Motion initial={{ y: -50 }} animate={{ y: 0 }} let:motion>
        <span
          use:motion
          class="relative block h-full w-full font-semibold text-white dark:text-black"
        >
          <slot name="changeText">Subscribed</slot>
        </span>
      </Motion>
    </button>
  </Motion>
{:else}
  <Motion
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    let:motion
  >
    <button
      style=" background-color: {buttonColor}; color: {buttonTextColor};"
      on:click={() => (isSubscribed = !isSubscribed)}
      class="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
      use:motion
    >
      <Motion
        initial={{ x: 0 }}
        exit={{ x: 50, transition: { duration: 0.1 } }}
        let:motion
      >
        <span use:motion class="relative block font-semibold text-primary">
          <slot name="initialText">Subscribe</slot>
        </span>
      </Motion>
    </button>
  </Motion>
{/if}
