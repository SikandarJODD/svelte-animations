<script>
    import { Motion } from "svelte-motion";
    // Change the duration and stagger to see the effect
    let duration = 0.25;
    let stagger = 0.025;
  
    let href = "https://undesign.learn.uno";
    let tweet = "twitter";
    let children = tweet.split("");
  </script>
  
  <div class="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
    <Motion
      initial="initial"
      whileHover="hovered"
      style={{
        lineHeight: 0.75,
      }}
      let:motion
    >
      <a
        {href}
        alt="co"
        class="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-4xl md:text-6xl lg:text-6xl"
        use:motion
      >
        <div>
          {#each children as item, i }
            <Motion
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
              let:motion
            >
              <span class="inline-block" use:motion>{item}</span>
            </Motion>
          {/each}
        </div>
        <div class="absolute inset-0">
          {#each children as item, i }
            <Motion
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
              let:motion
            >
              <span class="inline-block" use:motion>{item} </span>
            </Motion>
          {/each}
        </div>
      </a>
    </Motion>
  </div>
  