<script lang="ts">
  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";

  export let r = 100;
  export let c = 100;
  let className: any = "";
  export { className as class };

  let rows = new Array(r).fill(1);
  let cols = new Array(c).fill(1);

  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
</script>

<div
  style="transform: translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0);"
  class={cn(
    "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
    className
  )}
>
  {#each rows as _, i}
    <Motion let:motion>
      <div
        class="w-16 h-8 border-l dark:border-neutral-900 border-neutral-200 relative"
        use:motion
      >
        {#each cols as _, j}
          <Motion
            let:motion
            whileHover={{
              backgroundColor: `var(${getRandomColor()})`,
              transition: { duration: 0 },
            }}
            animate={{
              transition: { duration: 2 },
            }}
          >
            <div
              use:motion
              class="w-16 h-8 border-r border-t dark:border-slate-700 border-neutral-200 relative"
            >
              {#if j % 2 === 0 && i % 2 === 0}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              {/if}
            </div>
          </Motion>
        {/each}
      </div>
    </Motion>
  {/each}
</div>
