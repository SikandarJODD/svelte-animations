<script lang="ts">
    import {  blur } from "svelte/transition";
    import { draw } from "svelte/transition";
    import Button from "$lib/components/ui/button/button.svelte";
    import { spring, tweened } from "svelte/motion";
  
    // Play with Damping and Stiffness
    let x = spring(100, {
      stiffness: 0.05,
      damping: 0.25,
    });
    let y = spring(28);
    let rounded = tweened(20);
    let isHovered = false;
    let isTimeHovered = false;
    let text = "Ring";
    // Svg path
    let paths = [
      "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
      "M10.3 21a1.94 1.94 0 0 0 3.4 0",
      "M4 2C2.8 3.7 2 5.7 2 8",
      "M22 8c0-2.3-.8-4.3-2-6",
    ];
  
    let run;
    //  Effects run on Click
    let isSvgRing = true;
  
    let clickEffect = () => {
      isHovered = true;
      isTimeHovered = false;
      x.set(140);
      y.set(35);
      rounded.set(50);
      run = setInterval(() => {
        isSvgRing = !isSvgRing;
        text = isSvgRing ? "Ring" : "Silent";
        isSvgRing ? x.set(140) : x.set(155);
      }, 1500);
      setTimeout(() => {
        clearInterval(run);
        originalSize();
      }, 10000);
    };
    let originalSize = () => {
      clearInterval(run);
      isTimeHovered = false;
      isHovered = false;
      x.set(100);
      y.set(28);
      rounded.set(20);
    };
    let timerSize = () => {
      clearInterval(run);
      isHovered = false;
      isTimeHovered = true;
  
      x.set(200);
      y.set(55);
      rounded.set(50);
    };
  </script>
  
  <div class="flex justify-center items-center min-h-[300px] flex-col">
    <div class="min-h-60 flex justify-center items-center">
      <div
        class="bg-black"
        style="width: {$x}px; height:{$y}px; border-radius: {$rounded}px;"
      >
        {#if isHovered}
          <div
            class="px-4 flex justify-between text-white items-center h-full"
            in:blur={{ amount: 15 }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path in:draw d={paths[0]} /><path in:draw d={paths[1]} /><path
                  in:draw={{ delay: 300 }}
                  d={paths[2]}
                /><path in:draw={{ delay: 300 }} d={paths[3]} /></svg
              >
            </div>
            {#key text}
              <div
                class="text-xs font-medium {isSvgRing
                  ? 'text-white'
                  : 'text-red-500'}"
                in:blur
              >
                {text}
              </div>
            {/key}
          </div>
        {:else if isTimeHovered}
          <div
            class="px-4 flex justify-between text-white items-center h-full"
            in:blur={{ amount: 2 }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-monitor-dot"
                ><circle cx="19" cy="6" r="3" /><path
                  d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"
                /><path d="M12 17v4" /><path d="M8 21h8" /></svg
              >
            </div>
            {#key text}
              <div class="text-sm font-medium" in:blur>Desktop</div>
            {/key}
          </div>
        {:else}
          <div
            class="px-2 flex justify-between text-white items-center h-full "
            in:blur={{ amount: 2 }}
          >
            <div></div>
            {#key text}
              <div  in:blur>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#1F1F1F"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle"
                  ><circle cx="12" cy="12" r="10" /></svg
                >
              </div>
            {/key}
          </div>
        {/if}
      </div>
    </div>
    <div class="flex justify-center items-center gap-4">
      <Button
        class="rounded-full border-fuchsia-400 "
        variant="outline"
        on:click={originalSize}>Idle</Button
      >
      <Button
        class="rounded-full border-fuchsia-400 "
        variant="outline"
        on:click|once={clickEffect}>Ring</Button
      >
      <Button
        on:click={timerSize}
        class="rounded-full border-fuchsia-400 "
        variant="outline">Timer</Button
      >
    </div>
  </div>
  