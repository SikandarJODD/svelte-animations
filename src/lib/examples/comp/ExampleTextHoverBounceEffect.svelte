<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
  import { Motion } from "svelte-motion";

  let heading = "Coding";
  let text = heading.split("");
</script>

  <div class="bg-neutral-950 dark:bg-white/95 p-4 md:p-8 w-full ">
    <div class="flex items-center justify-center h-56">
      <Motion initial="initial" whileHover="whileHover" let:motion>
        <a
          href="/"
          use:motion
          class="group relative flex items-center justify-center transition-colors duration-500"
        >
          <div>
            <Motion
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              let:motion
            >
              <span
                class="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 dark:group-hover:text-black md:text-5xl"
                use:motion
              >
                {#each text as l (l)}
                  <Motion
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 15 },
                    }}
                    transition={{ type: "spring" }}
                    let:motion
                  >
                    <span class="inline-block p-0 -mx-1.5" use:motion>
                      {l}
                    </span>
                  </Motion>
                {/each}
              </span>
            </Motion>
          </div>
        </a>
      </Motion>
    </div>
  </div>
