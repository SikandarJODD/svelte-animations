<script>
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicInOut, elasticOut, sineOut } from "svelte/easing";
  import { draw, fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  import { Key, Lock, LockKeyholeOpen } from "lucide-svelte";
  let intervalRef;
  let text = "Framework ?";
  const TARGET_TEXT = "Svelte is Vibe";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  const CHARS = "!@#$%^&*():{};|,.<>/?";

  function scramble() {
    let pos = 0;

    intervalRef = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      text = scrambled;
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  }

  function stopScramble() {
    clearInterval(intervalRef);
    text = TARGET_TEXT;
  }
</script>

<div
  class="grid min-h-[200px] min-w-[400px] place-content-center bg-gradient-to-br from-neutral-600/60 to bg-neutral-900/70 p-4 rounded-3xl"
>
  <button
    on:mouseenter={scramble}
    on:mouseleave={stopScramble}
    class="group relative overflow-hidden rounded-lg border border-neutral-700 bg-gradient-to-tr from-neutral-700 to-neutral-900/80 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-neutral-100 shadow-lg"
  >
    <div
      class="relative z-10 flex items-center gap-1.5 transition-all duration-300"
    >
      {#if text === TARGET_TEXT}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-lock-keyhole-open mb-1 text-green-400"
          ><circle cx="12" cy="16" r="1" /><rect
            width="18"
            height="12"
            x="3"
            y="10"
            rx="2"
          /><path
            in:draw={{
              duration: 300,
              easing: sineOut,
            }}
            d={"M7 10V7a5 5 0 0 1 9.33-2.5"}
          /></svg
        >
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-lock-keyhole mb-1"
          ><circle cx="12" cy="16" r="1" /><rect
            x="3"
            y="10"
            width="18"
            height="12"
            rx="2"
          /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg
        >
      {/if}
      <span>{text}</span>
    </div>
    <div
      class="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100 animate-len"
    />
  </button>
</div>

<style>
  .group:hover .opacity-0 {
    opacity: 1;
  }

  .animate-len {
    animation: len 2.6s infinite;
  }
  /* animate len from top to bottom and again from bottom to top  */

  @keyframes len {
    0%,
    100% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(100%);
    }
  }
</style>
