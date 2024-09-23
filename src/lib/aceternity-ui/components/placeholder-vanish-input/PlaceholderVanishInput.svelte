<script>
    import { onMount } from "svelte";
    import {  fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
  
    export let placeholders = [];
    export let onSubmit;
  
    let currentPlaceholder = 0;
    let intervalRef;
    let value = "";
    let animating = false;
    let canvasRef, inputRef;
    let newDataRef = [];
    const dispatch = createEventDispatcher();
  
    const startAnimation = () => {
      intervalRef = setInterval(() => {
        currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
      }, 3000);
    };
  
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && intervalRef) {
        clearInterval(intervalRef);
        intervalRef = null;
      } else if (document.visibilityState === "visible") {
        startAnimation();
      }
    };
  
    onMount(() => {
      startAnimation();
      document.addEventListener("visibilitychange", handleVisibilityChange);
  
      return () => {
        if (intervalRef) {
          clearInterval(intervalRef);
        }
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    });
  
    const draw = () => {
      if (!inputRef) return;
      const canvas = canvasRef;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      canvas.width = 800;
      canvas.height = 800;
      ctx.clearRect(0, 0, 800, 800);
  
      const computedStyles = getComputedStyle(inputRef);
      const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
      ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
      ctx.fillStyle = "#FFF";
      ctx.fillText(value, 16, 40);
  
      const imageData = ctx.getImageData(0, 0, 800, 800);
      const pixelData = imageData.data;
      const newData = [];
  
      for (let t = 0; t < 800; t++) {
        let i = 4 * t * 800;
        for (let n = 0; n < 800; n++) {
          let e = i + 4 * n;
          if (
            pixelData[e] !== 0 &&
            pixelData[e + 1] !== 0 &&
            pixelData[e + 2] !== 0
          ) {
            newData.push({
              x: n,
              y: t,
              color: [
                pixelData[e],
                pixelData[e + 1],
                pixelData[e + 2],
                pixelData[e + 3],
              ],
            });
          }
        }
      }
  
      newDataRef = newData.map(({ x, y, color }) => ({
        x,
        y,
        r: 1,
        color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
      }));
    };
  
    const animate = (start) => {
      const animateFrame = (pos = 0) => {
        requestAnimationFrame(() => {
          const newArr = [];
          for (let i = 0; i < newDataRef.length; i++) {
            const current = newDataRef[i];
            if (current.x < pos) {
              newArr.push(current);
            } else {
              if (current.r <= 0) {
                current.r = 0;
                continue;
              }
              current.x += Math.random() > 0.5 ? 1 : -1;
              current.y += Math.random() > 0.5 ? 1 : -1;
              current.r -= 0.05 * Math.random();
              newArr.push(current);
            }
          }
          newDataRef = newArr;
          const ctx = canvasRef?.getContext("2d");
          if (ctx) {
            ctx.clearRect(pos, 0, 800, 800);
            newDataRef.forEach((t) => {
              const { x: n, y: i, r: s, color } = t;
              if (n > pos) {
                ctx.beginPath();
                ctx.rect(n, i, s, s);
                ctx.fillStyle = color;
                ctx.strokeStyle = color;
                ctx.stroke();
              }
            });
          }
          if (newDataRef.length > 0) {
            animateFrame(pos - 8);
          } else {
            value = "";
            animating = false;
          }
        });
      };
      animateFrame(start);
    };
  
    const vanishAndSubmit = () => {
      animating = true;
      draw();
      const inputValue = inputRef?.value || "";
      console.log(inputValue, "Input Value");
      if (inputValue) {
        const maxX = newDataRef.reduce(
          (prev, current) => (current.x > prev ? current.x : prev),
          0
        );
        console.log(maxX, "Max X");
        animate(maxX);
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !animating) {
        vanishAndSubmit();
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      vanishAndSubmit();
      onSubmit();
    };
  </script>
  
  <!-- on:submit={handleSubmit} -->
  <form
    class="w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow transition duration-200 {value
      ? 'bg-gray-50'
      : ''}"
    on:submit={handleSubmit}
  >
    <canvas
      class="absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20"
      bind:this={canvasRef}
    ></canvas>
  
    <input
      bind:this={inputRef}
      bind:value
      on:keydown={handleKeyDown}
      type="text"
      class="w-full text-sm sm:text-base z-50 border-none  bg-transparent  h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20 {animating
        ? 'text-transparent dark:text-transparent'
        : 'dark:text-white text-black'}"
    />
  
    <button
      disabled={!value}
      type="submit"
      class="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-gray-300 h-4 w-4"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </svg>
    </button>
  
    <div
      class="absolute inset-0 flex items-center rounded-full pointer-events-none"
    >
      {#if !value}
        {#key currentPlaceholder}
          <p
            class="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
            in:fly={{ y: 10, delay: 400 }}
            out:fly={{ y: -10 }}
          >
            {placeholders[currentPlaceholder]}
          </p>
        {/key}
      {/if}
    </div>
  </form>
  
  <style>
    form {
      max-width: 100%;
    }
  </style>
  