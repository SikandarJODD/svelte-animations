<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // Svelte 5 Code : https://svelte.dev/playground/39866a136f0d4268821e5ae901dce47f?version=5.0.5

  export let collapseDelay = 5000;
  export let ltr = false;
  export let linePosition: "left" | "right" | "top" | "bottom" = "left";
  export let data: Array<{
    id: number;
    title: string;
    content: string;
    image?: string;
    video?: string;
    icon?: any;
  }> = [];

  let currentIndex = writable(-1);
  let carouselRef: HTMLUListElement;
  let isInView = false;

  const scrollToIndex = (index: number) => {
    if (carouselRef) {
      const cards = carouselRef.querySelectorAll(".card_code");
      const card = cards[index] as HTMLElement;

      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.scrollTo({
          left: carouselRef.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };
  onMount(() => {
    let timmer = setTimeout(() => {
      currentIndex.set(0);
    }, 100);
    return () => clearTimeout(timmer);
  });
  onMount(() => {
    handleScroll();
  });
  let handleScroll = () => {
    let autoScrollTimer: NodeJS.Timeout;
    let handleAutoScroll = () => {
      currentIndex.update((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % data.length : 0
      );
      scrollToIndex($currentIndex);
    };

    autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  };
</script>

<section id="features">
  <div class="container">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto my-12 grid h-full items-center gap-10 lg:grid-cols-2">
        <div
          class="order-1 hidden lg:order-none lg:flex {ltr
            ? 'lg:order-2 lg:justify-end'
            : 'justify-start'} "
        >
          <div>
            {#each data as item, index}
              <div class="relative flex items-center mb-8 last:mb-0">
                {#if linePosition === "left" || linePosition === "right"}
                  <div
                    class="absolute inset-y-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 {linePosition ===
                    'right'
                      ? 'left-auto right-0'
                      : 'left-0 right-auto'}"
                  >
                    <div
                      class="absolute left-0 top-0 w-full {$currentIndex ===
                      index
                        ? 'h-full'
                        : 'h-0'} origin-top bg-primary transition-all ease-linear dark:bg-white"
                      style="
          transition-duration: {$currentIndex === index
                        ? `${collapseDelay}ms`
                        : '0s'};"
                    ></div>
                  </div>
                {/if}

                {#if linePosition === "top" || linePosition === "bottom"}
                  <div
                    class="absolute inset-x-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 {linePosition ===
                    'bottom'
                      ? 'bottom-0'
                      : 'top-0'}"
                  >
                    <div
                      class="absolute left-0 {linePosition === 'bottom'
                        ? 'bottom-0'
                        : 'top-0'} h-full {$currentIndex === index
                        ? 'w-full'
                        : 'w-0'} origin-left bg-primary transition-all ease-linear dark:bg-white"
                      style="
                       transition-duration: {$currentIndex === index
                        ? `${collapseDelay}ms`
                        : '0s'};"
                    ></div>
                  </div>
                {/if}
                <div
                  class="item-box mx-2 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:mx-6"
                >
                  <svelte:component
                    this={item.icon}
                    class="size-6 text-primary"
                  />
                </div>
                <div class="space-y-2">
                  <h3 class="text-lg lg:text-2xl font-bold">{item.title}</h3>
                  <div class="text-[16px] w-96 text-muted-foreground">
                    {item.content}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <div class="h-[350px] min-h-[200px] w-auto {ltr && 'lg:order-1'}">
          {#if data[$currentIndex]?.image}
            <img
              src={data[$currentIndex].image}
              alt="feature"
              class="aspect-auto size-full rounded-xl border border-neutral-300/50 object-cover object-left-top p-1 shadow-lg"
            />
          {:else if data[$currentIndex]?.video}
            <video
              preload="auto"
              src={data[$currentIndex].video}
              class="aspect-auto size-full rounded-lg object-cover shadow-lg"
              autoplay
              loop
              muted
            />
          {:else}
            <div
              class="aspect-auto size-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"
            ></div>
          {/if}
        </div>

        <div
          class="relative md:hidden pb-0.5 [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] -mb-8"
        >
          {#each data as _, index}
            <div
              class="absolute inset-x-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 top-0"
            >
              <div
                class="absolute left-0 top-0 h-full {$currentIndex === index
                  ? 'w-full'
                  : 'w-0'} origin-left bg-primary transition-all ease-linear dark:bg-white"
                style="
                     transition-duration: {$currentIndex === index
                  ? `${collapseDelay}ms`
                  : '0s'};"
              ></div>
            </div>
          {/each}
        </div>
        <ul
          bind:this={carouselRef}
          class="relative flex h-full snap-x snap-mandatory flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          {#each data as item, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

            <li
              class="card_code relative mr-8 grid h-full max-w-full pl-2 shrink-0 items-start justify-center last:mr-0"
              on:click={() => currentIndex.set(index)}
              style="scroll-snap-align: center;"
            >
              <h2 class="text-xl font-bold">{item.title}</h2>
              <p class="mx-0 max-w-sm text-balance text-sm">{item.content}</p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .card_code {
    transition: all 0.3s ease;
  }
  .item-box {
    width: 3rem;
    height: 3rem;
  }
</style>
