import ExampleCrossfade from "./comp/ExampleCrossfade.svelte";
import ExampleDeferredTransition from "./comp/ExampleDeferredTransition.svelte";
import ExampleDivHover from "./comp/ExampleDivHover.svelte";
import ExampleEmilKowal from "./comp/ExampleEmilKowal.svelte";
import ExampleLinkEffect from "./comp/ExampleLinkEffect.svelte";
import ExampleLinkMovingEffect from "./comp/ExampleLinkMovingEffect.svelte";
import ExampleRevealLinkRender from "./comp/ExampleRevealLinkRender.svelte";
import ExampleSlideTab from "./comp/ExampleSlideTab.svelte";
import ExampleTextHoverBounceEffect from "./comp/ExampleTextHoverBounceEffect.svelte";
import ExShiftDropDown from "./comp/shiftingDropDown/ExShiftDropDown.svelte";

type Component = {
    id: number;
    name: string;
    desc: string;
    component: any;
    link: string;
    code?: string;
}

export let animationExamples: Component[] = [
    {
        id: 1,
        name: 'Emil Kowal Effect',
        desc: 'Emil Kowal Transition Effect using spring and blur',
        component: ExampleEmilKowal,
        link: '/examples/1',
        code: `<script lang="ts">
  import { blur } from "svelte/transition";
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

<div
  class="flex justify-center items-center min-h-[300px] flex-col bg-gray-100 w-full"
>
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
          class="px-2 flex justify-between text-white items-center h-full"
          in:blur={{ amount: 2 }}
        >
          <div></div>
          {#key text}
            <div in:blur>
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
      class="rounded-full outline-none  border border-black"
      
      on:click={originalSize}>Idle</Button
    >
    <Button
      class="rounded-full  outline-none border border-black"
      
      on:click|once={clickEffect}>Ring</Button
    >
    <Button
      on:click={timerSize}
      class="rounded-full  outline-none border border-black"
      >Timer</Button
    >
  </div>
</div>
`
    },
    {
        id: 2,
        name: 'Link Image Hover',
        desc: 'Link Image Hover Effect using Svelte Spring.',
        component: ExampleLinkEffect,
        link: "/examples/2",
        code: `<script lang='ts'>
  import { fade,blur, scale } from "svelte/transition";

  export let hrefDetails = {
    href: "https://in.pinterest.com/pin/724375921339895692/",
    text: "Mumbai City",
    imgSrc:
      "https://i.pinimg.com/736x/7e/61/74/7e6174c858a5aa169de033f55fc3050c.jpg",
    imgAlt: "Mumbai",
  };
  let isHover = false;

  let linkEffect = (node:HTMLElement) => {
    node.addEventListener("mouseenter", () => {
      isHover = true;
    });
    node.addEventListener("mouseleave", () => {
      isHover = false;
    });
  };
</script>

<div class="relative w-full flex justify-center items-center z-50">
  {#if isHover}
    <img
      in:blur={{duration:300}}
      style="position:absolute;  bottom:40px;"
      src={hrefDetails.imgSrc}
      alt={hrefDetails.imgAlt}
      class="h-44 w-44 rounded-lg shadow-lg z-50"
    />
  {/if}
  <a
    use:linkEffect
    href={hrefDetails.href}
    target="_blank"
    class="text-md underline cursor-pointer z-50"
  >
    {hrefDetails.text}
  </a>
</div>
`
    },
    {
        id: 10,
        name: 'Link Image Moving',
        desc: 'Link Image Moving Effect using Svelte Spring.',
        component: ExampleLinkMovingEffect,
        link: "/examples/10",
        code: `<script lang="ts">
  import { spring } from "svelte/motion";
  import { fade, fly, scale } from "svelte/transition";

  export let hrefDetails = {
    href: "https://in.pinterest.com/pin/724375921339895692/",
    text: "Mumbai City",
    imgSrc:
      "https://i.pinimg.com/736x/7e/61/74/7e6174c858a5aa169de033f55fc3050c.jpg",
    imgAlt: "Mumbai",
  };

  let isHover = false;
  let x = spring(0, {
    stiffness: 0.1,
    damping: 0.3,
  });
  let y = spring(100, {
    stiffness: 0.1,
    damping: 0.3,
  });

  let linkEffect = (node: HTMLElement) => {

    node.addEventListener("mouseenter", (e) => {
      y.set(node.getBoundingClientRect().top-200)
      // console.log("hover", e.clientY, e.clientX, e.offsetY, e.offsetX);
      isHover = true;
    });
    node.addEventListener("mousemove", (e) => {
      x.set(e.clientX - 120);
      // y.set(e.clientY + -200);

    });
    node.addEventListener("mouseleave", (e) => {
      isHover = false;
    });
  };
</script>

{#if isHover}
  <img
    in:scale={{ duration: 200, delay: 200 }}
    style="position: absolute; top:{$y}px; left:{$x}px; z-indez: 100;"
    src={hrefDetails.imgSrc}
    alt={hrefDetails.imgAlt}
    class="h-44 w-56 rounded-lg shadow-lg object-cover object-center"
  />
{/if}
<a
  use:linkEffect
  href={hrefDetails.href}
  target="_blank"
  class="text-md underline cursor-pointer mx-1"
>
  {hrefDetails.text}
</a>
`
    },
    {
        id: 3,
        name: 'Modul Card Effect',
        desc: 'Modul Card Effect using crossfade and spring.',
        component: ExampleCrossfade,
        link: '/examples/3',
        code: `<script lang="ts">
    import { cubicInOut, cubicOut, quintInOut } from "svelte/easing";
    import { crossfade, scale, fade, slide, fly, blur } from "svelte/transition";
    let layout = "layouta";
  
    let [send, receive] = crossfade({
      duration: 400,
    });
  </script>
  
  <div class="w-full h-full flex justify-center items-center flex-col md:my-44">
    {#if layout === "layouta"}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={() => {
          layout = "layoutb";
        }}
        class="bg-lime-100 p-4 rounded-3xl layouta w-fit h-fit overflow-hidden"
        in:receive={{ key: "layouta" }}
        out:send={{ key: "layouta" }}
      >
        <div
          class="imgTag"
          in:receive={{ key: "imgTag" }}
          out:send={{ key: "imgTag" }}
        >
          <img
            src="https://i.pinimg.com/564x/b3/7c/fa/b37cfa52ac8e142ffe42772712f6e33d.jpg"
            alt="Saturn Art"
            class="w-56 h-56 rounded-2xl"
          />
        </div>
        <div class="mt-2 px-2 flex flex-col">
          <h1
            class="font-bold text-lg md:text-lg heading text-gray-900"
            in:receive={{ key: "heading" }}
            out:send={{ key: "heading" }}
          >
            Mumbai City
          </h1>
          <p
            class="text-xs sm:text-sm w-52  para text-gray-700"
            in:receive={{ key: "para" }}
            out:send={{ key: "para" }}
          >
            Hello Devs, welcome to our Website
          </p>
        </div>
      </div>
    {:else if layout === "layoutb"}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={() => {
          layout = "layouta";
        }}
        class="bg-lime-100 p-2.5 md:p-4 rounded-3xl layouta flex gap-1 md:gap-3 w-fit h-fit overflow-hidden"
        in:receive={{ key: "layouta" }}
        out:send={{ key: "layouta" }}
      >
        <div
          class="imgTag"
          in:receive={{ key: "imgTag" }}
          out:send={{ key: "imgTag" }}
        >
          <img
            src="https://i.pinimg.com/564x/b3/7c/fa/b37cfa52ac8e142ffe42772712f6e33d.jpg"
            alt="Saturn Art"
            class="w-36 h-32 md:w-64 md:h-64 rounded-2xl"
          />
        </div>
        <div class="mt-2 px-1 md:px-2 flex flex-col">
          <h1
            class="font-bold text-lg md:text-2xl heading text-gray-900"
            in:receive={{ key: "heading" }}
            out:send={{ key: "heading" }}
          >
            Mumbai City
          </h1>
          <p
            class="text-xs md:text-sm w-full para text-gray-700"
            in:receive={{ key: "para" }}
            out:send={{ key: "para" }}
          >
            Yoo devs, Howw you doing?
          </p>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    .layouta {
      position: absolute;
    }
  </style>`
    },
    {
        id: 4,
        name: 'Deferred transitions ',
        desc: 'Deferred transitions using crossfade ',
        component: ExampleDeferredTransition,
        link: '/examples/4',
        code: `<script>
  import { cubicInOut, expoIn, quintInOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  let openApp = "";
  let apps = [
    "🐦",
    "🐱",
    "🐶",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐸",
    "🐵",
    "🐔",
    "🐧",
    "🐤",
  ];
  const [send, receive] = crossfade({
    duration: 300,
  });
</script>

<div class="flex justify-center items-center h-[70vh] md:h-fit">
  <div
    class="grid grid-cols-3 place-content-center place-items-center gap-3 *:border *:border-sky-800/50 *:rounded-lg *:p-2 p-4 t w-full h-full md:w-48 md:h-[390px] rounded-lg bg-sky-50 border border-sky-500 relative"
  >
    {#each apps as app}
      {#if openApp !== app}
        <button
          class="icon transition-all duration-150 ease-in h-12 w-12 md:h-fit md:w-fit"
          on:click={() => (openApp = app)}
          in:receive={{ key: app }}
          out:send={{ key: app }}
        >
          {app}
        </button>
      {:else}
        <div
          class="app absolute bg-white text-black w-full h-full items-center justify-center flex flex-col gap-2"
          in:receive={{ key: app }}
          out:send={{ key: app }}
        >
          <h1>Hello Devs {app}</h1>
          <button on:click={() => (openApp = "")}>Close</button>
        </div>
      {/if}
    {/each}
  </div>
</div>
`
    },
    {
        id: 5,
        name: 'Div Hover',
        desc: 'Simple Div Hover Effect using Svelte Spring.',
        component: ExampleDivHover,
        link: "/examples/5",
        code: `<script lang="ts">
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";
  import * as Avatar from "$lib/components/ui/avatar";

  let width = spring(120);
  let height = spring(30);
  let rounded = spring(50);
  let isChanged = false;

  let animationElement = (node: HTMLElement) => {
    let changeSize = () => {
      width.set(230);
      height.set(145);
      rounded.set(20);
      isChanged = true;
    };
    let originalSize = () => {
      width.set(120);
      height.set(30);
      rounded.set(50);
      isChanged = false;
    };

    node.addEventListener("mouseenter", changeSize);
    node.addEventListener("mouseleave", originalSize);
    return {
      destroy() {
        node.removeEventListener("mouseenter", changeSize);
        node.removeEventListener("mouseleave", originalSize);
      },
    };
  };
  let avatars = [
    {
      src: "https://i.pinimg.com/564x/ea/8b/06/ea8b06307f2f6f0a6f6041d3f492d013.jpg",
      alt: "bhide",
      fallback: "SM",
      name: "Saloni",
    },
    {
      src: "https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg",
      alt: "aditya",
      fallback: "AK",
      name: "Aditya",
    },
  ];
</script>

<div class="flex justify-center items-center ">
  <div
    id="animationElement"
    use:animationElement
    class="border border-primary flex rounded-lg flex-col justify-center items-center"
    style="width: {$width}px; height:{$height}px; border-radius: {$rounded}px;"
  >
    {#if isChanged}
      <div class="relative w-full p-2.5">
        <div in:fade={{ duration: 600 }}>
          {#each avatars as { src, alt, fallback, name }}
            <div
              class="m-1 p-1 hover:bg-primary/10 rounded-full border border-primary flex gap-3 items-center justify-between"
            >
              <Avatar.Root>
                <Avatar.Image {src} {alt} />
                <Avatar.Fallback>{fallback}</Avatar.Fallback>
              </Avatar.Root>
              <h4 class="text-lg font-mono mr-4">{name}</h4>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div
        in:fade={{
          duration: 500,
          delay: 200,
        }}
        class="h-full flex justify-center items-center"
      >
        Friends
      </div>
    {/if}
  </div>
</div>
`

    },
    {
        id: 6,
        name: 'Reveal Link Effect',
        desc: 'Hover Link to see animation Effect using Svelte Motion',
        component: ExampleRevealLinkRender,
        link: '/examples/6',
        code: `<script>
    import { Motion } from "svelte-motion";
    // Change the duration and stagger to see the effect
    let duration = 0.25;
    let stagger = 0.025;
  
    let href = "https://undesign.learn.uno";
    let tweet = "Bhide";
    let children = tweet.split("");
  </script>
  
  <div class="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black w-full">
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
  </div>`
    }, {
        id: 7,
        name: 'Shifting Dropdown',
        desc: 'Shifting Dropdown using Svelte Motion',
        component: ExShiftDropDown,
        link: '/examples/7',
        code: `<script lang="ts">
    import Blog from "./Blog.svelte";
    import { Motion, AnimatePresence } from "svelte-motion";
    import Products from "./Products.svelte";
    import Pricing from "./Pricing.svelte";
    let selected = 0;
    let dir: any;
    let handleSetSelected = (val: any) => {
      // console.log({ val, selected });
      if (typeof selected === "number" && typeof val === "number") {
        dir = selected > val ? "r" : "l";
      } else if (val === null) {
        dir = null;
      }
      selected = val;
      moveNub();
    };
    let TABS = [
      {
        id: 1,
        title: "Products",
        component: Products,
      },
      {
        id: 2,
        title: "Pricing",
        component: Pricing,
      },
      {
        id: 3,
        title: "Blog",
        component: Blog,
      },
    ];
  
    let left: any;
    let moveNub = (node: HTMLElement) => {
      // console.log(selected, "Selected ID");
      if (selected) {
        const hoveredTab = document.getElementById(\`shift- tab - \${ selected }\`);
        const overlayContent = document.getElementById("overlay-content");
  
        if (!hoveredTab || !overlayContent) return;
        console.log(hoveredTab, overlayContent, "Hovered Tab");
  
        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();
  
        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
  
        //   setLeft(tabCenter);
        left = tabCenter;
      }
    };
  </script>
  
  <div
    class="flex h-96 w-full justify-start bg-neutral-950 dark:bg-black/80 p-8 text-neutral-200 md:justify-center"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:mouseleave={() => handleSetSelected(null)}
      class="relative flex h-fit gap-2"
    >
      {#each TABS as item (item)}
        <button
          id="shift-tab-{item.id}"
          on:click={() => handleSetSelected(item.id)}
          on:mouseenter={() => handleSetSelected(item.id)}
          class={\`flex items - center gap - 1 rounded - full px - 3 py - 1.5 text - sm transition - colors \${
        selected === item.id
        ? " bg-neutral-800 text-neutral-100"
        : "text-neutral-400"
          }\`}
        >
          <span>
            {item.title}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={\`transition - transform \${ selected === item.id ? "rotate-180" : "" } \`}
            ><path d="m6 9 6 6 6-6" /></svg
          >
        </button>
      {/each}
      <AnimatePresence
        let:item
        list={[
          { key: 1, component: Products, id: 1 },
          { key: 2, component: Pricing, id: 2 },
          { key: 3, component: Blog, id: 3 },
        ]}
      >
        {#if selected}
          <Motion
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            let:motion
          >
            <div
              id="overlay-content"
              class="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 z-40"
              use:motion
            >
              <div class="absolute -top-[24px] left-0 right-0 h-[80px]" />
              <Motion
                animate={{ left }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                let:motion
              >
                <span
                  style="clip-path: polygon(0 0, 100% 0, 50% 50%, 0% 100%);"
                  class="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
                  use:motion
                  use:moveNub
                >
                </span>
              </Motion>
              {#each TABS as item}
                <div class="overflow-hidden">
                  {#if selected === item.id}
                    <Motion
                      initial={{
                        opacity: 0,
                        x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      let:motion
                    >
                      <div use:motion>
                        <svelte:component this={item.component} />
                      </div>
                    </Motion>
                  {/if}
                </div>
              {/each}
            </div>
          </Motion>
        {/if}
      </AnimatePresence>
    </div>
  </div>
  `
    },
    {
        id: 8,
        name: 'Text Hover Bounce Effect',
        desc: 'Text Hover Bounce Effect using Svelte Motion',
        component: ExampleTextHoverBounceEffect,
        link: '/examples/8',
        code: `<script>
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
`
    },
    {
        id: 9,
        name: 'Slide Tab',
        desc: 'Slide Tab Effect using Svelte Motion',
        component: ExampleSlideTab,
        link: '/examples/9',
        code: `<script lang="ts">
    import { Motion } from "svelte-motion";
    let left = 0;
    let width = 0;
    let opacity = 0;
    let ref: any;
    let navs = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Examples",
        link: "/examples",
      },
      {
        name: "Motion",
        link: "/learnings",
      },
    ];
    let positionMotion = (node: HTMLElement) => {
      let refNode = () => {
        let mint = node.getBoundingClientRect();
        left = node.offsetLeft;
        width = mint.width;
        opacity = 1;
      };
      node.addEventListener("mouseenter", refNode);
      return {
        destroy() {
          node.removeEventListener("mouseenter", refNode);
        },
      };
    };
  </script>
  
  <div class="py-20 w-full bg-white">
    <ul
      on:mouseleave={() => {
        width = width;
        left = left;
        opacity = 0;
      }}
      class="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {#each navs as item}
        <li
          use:positionMotion
          class="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
          <a href={item.link}>{item.name}</a>
        </li>
      {/each}
      <Motion
        animate={{
          left: left,
          width: width,
          opacity: opacity,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
  
        }}
        let:motion
      >
        <li
          use:motion
          class="absolute z-0 h-7 rounded-full bg-black md:h-12"
        ></li>
      </Motion>
    </ul>
  </div>
  `
    },
]