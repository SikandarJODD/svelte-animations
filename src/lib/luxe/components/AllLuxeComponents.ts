import CardContent from "$lib/components/ui/card/card-content.svelte";
import BadgeAnimatedBorder from "../badge/BadgeAnimatedBorder.svelte";
import BadgeBackgroundShine from "../badge/BadgeBackgroundShine.svelte";
import BadgeRotateBorder from "../badge/BadgeRotateBorder.svelte";
import ButtonAnimatedBorder from "../buttons/ButtonAnimatedBorder.svelte";
import ButtonBackgroundShine from "../buttons/ButtonBackgroundShine.svelte";
import ButtonDestructive from "../buttons/ButtonDestructive.svelte";
import ButtonLoading from "../buttons/ButtonLoading.svelte";
import ButtonRotateBorder from "../buttons/ButtonRotateBorder.svelte";
import ButtonSuccess from "../buttons/ButtonSuccess.svelte";
import CardAnimatedBorder from "../cards/CardAnimatedBorder.svelte";
import CardBackgroundShine from "../cards/CardBackgroundShine.svelte";
import CardComment from "../cards/CardComment.svelte";
import CardHoverEffect from "../cards/CardHoverEffect.svelte";
import CardProduct from "../cards/CardProduct.svelte";
import CardRevealedPointer from "../cards/CardRevealedPointer.svelte";
import TextAnimatedDecoration from "../text/TextAnimatedDecoration.svelte";
import TextAnimatedGradient from "../text/TextAnimatedGradient.svelte";
import TextGlitch from "../text/TextGlitch.svelte";
import TextGradient from "../text/TextGradient.svelte";
import TextShake from "../text/TextShake.svelte";
import TextShine from "../text/TextShine.svelte";


type LuxeComponent = {
    id: string;
    name: string;
    description: string;
    component: any;
    link: any | string;
    code: string;
}
export let allLuxeComponents: LuxeComponent[] = [
    {
        id: 'badge-animated-border',
        name: 'Badge Animated Border',
        description: 'An animated border badge',
        component: BadgeAnimatedBorder,
        link: "/luxe/badge-animated-border",
        code: `<div
  class="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
>
  <span>
    <span
      class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
    />
  </span>
  <span
    class="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200"
  />
  <span class="z-10 text-neutral-400 text-xs font-medium">Badge</span>
</div>`,
    },
    {
        id: 'badge-background-shine',
        name: 'Badge background shine',
        description: 'A badge with a background shine effect',
        component: BadgeBackgroundShine,
        link: "/luxe/badge-background-shine",
        code: `<div
  class="inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-800 \n bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 \n font-medium text-neutral-400 transition-colors"
>
  Badge
</div>
`,
    },
    {
        id: 'badge-rotate-shine',
        name: 'Badge rotate shine',
        description: 'A badge with a rotate shine effect',
        component: BadgeRotateBorder,
        link: "/luxe/badge-rotate-shine",
        code: `<div class="relative inline-flex overflow-hidden rounded-full p-px">
  <span
    class="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]"
  />
  <span
    class="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl"
  >
    Badge
  </span>
</div>
`
    },
    {
        id: 'button-animated-border',
        name: 'Button Animated Border',
        description: 'An animated border button',
        component: ButtonAnimatedBorder,
        link: "/luxe/button-animated-border",
        code: `<button
  class="group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
>
  <span>
    <span
      class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
    />
  </span>
  <span
    class="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"
  />
  <span class="z-10 text-neutral-400 text-sm font-medium">Button</span>
</button>
`
    },
    {
        id: 'button-background-shine',
        name: 'Button background shine',
        description: 'A button with a background shine effect',
        component: ButtonBackgroundShine,
        link: "/luxe/button-background-shine",
        code: `<button
  class="inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-400 transition-colors"
>
  Button
</button>
`
    },
    {
        id: 'button-destructive',
        name: 'Button destructive',
        description: 'A button with a destructive style',
        component: ButtonDestructive,
        link: "/luxe/button-destructive",
        code: `<button
  class="py-2 px-4 rounded-xl text-sm font-medium bg-red-950 text-red-500 border border-red-900"
>
  Button
</button>
`
    },
    {
        id: 'button-loading',
        name: 'Button loading',
        description: 'A button with a loading state',
        component: ButtonLoading,
        link: "/luxe/button-loading",
        code: `<button
  disabled
  class="flex items-center gap-1.5 text-sm py-2  px-4 font-semibold bg-white text-black rounded-xl  duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#000"
    viewBox="0 0 256 256"
    class="animate-spin"
  >
    <path
      d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"
    ></path>
  </svg>
  Loading...
</button>
`
    },
    {
        id: 'button-rotate-border',
        name: 'Button rotate border',
        description: 'A button with a rotating border',
        component: ButtonRotateBorder,
        link: "/luxe/button-rotate-border",
        code: `<button class="relative inline-flex overflow-hidden rounded-xl p-px">
  <span
    class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]"
  />
  <span
    class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-neutral-950 px-4 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl"
  >
    Button
  </span>
</button>
`
    },
    {
        id: 'button-success',
        name: 'Button success',
        description: 'A button with a success style',
        component: ButtonSuccess,
        link: "/luxe/button-success",
        code: `<button
  class="py-2 px-4 rounded-xl text-sm font-medium bg-emerald-950 text-emerald-500 border border-emerald-900"
>
  Button
</button>
`
    },
    {
        id: 'card-animated-border',
        name: 'Card Animated Border',
        description: 'An animated border card',
        component: CardAnimatedBorder,
        link: "/luxe/card-animated-border",
        code: `<div class="w-full max-w-[350px]">
  <div
    class="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
  >
    <span>
      <span
        class="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
      />
    </span>
    <span
      class="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200"
    />
    <div class="space-y-2 z-10">
      <h3 class="text-xl font-semibold text-neutral-200">Luxe</h3>
      <p class="text-sm leading-[1.5] text-neutral-400">
        Explore the new website that simplifies the creation of sophisticated
        dark mode components.
      </p>
    </div>
  </div>
</div>
`
    },
    {
        id: 'card-background-shine',
        name: 'Card background shine',
        description: 'A card with a background shine effect',
        component: CardBackgroundShine,
        link: "/luxe/card-background-shine",
        code: `<div
  class="inline-flex animate-shine max-w-[350px] w-full items-center justify-center rounded-xl text-sm border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors"
>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl font-semibold text-neutral-200">Luxe</h3>
    <p class="text-sm leading-[1.5] text-neutral-400">
      Explore the new website that simplifies the creation of sophisticated dark
      mode components.
    </p>
  </div>
</div>
`
    },
    {
        id: 'card-comment',
        name: 'Card Comment',
        description: 'A card for comments',
        component: CardComment,
        link: '/luxe/card-comment',
        code: `<div
  class="relative flex flex-col gap-8 bg-neutral-950 border border-white/10 w-full max-w-lg rounded-xl p-10"
>
  <div
    class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
  />
  <p class="text-base text-center leading-[1.5] text-neutral-300">
    “Luxe is an interesting library, with its ease of copying and pasting
    complex components without the need to install any lib and leaves us with
    the power to control our own components.”
  </p>
  <div class="flex items-center justify-center gap-3">
    <img
      src="https://avatars.githubusercontent.com/u/93428946"
      alt="Bhide"
      width={40}
      height={40}
      class="rounded-full object-cover"
    />
    <div class="flex flex-col">
      <a
        href="https://github.com/SikandarJODD"
        target="_blank"
        rel="noopener noreferrer"
        class="text-base font-medium text-neutral-300 leading-none duration-300"
      >
        Sikandar Bhide
      </a>
      <span class="text-neutral-400">Copied Luxe, Not a Creator</span>
    </div>
  </div>
</div>
`
    },
    {
        id: 'card-hover-effect',
        name: 'Card hover effect',
        description: 'A card with hover effect',
        component: CardHoverEffect,
        link: '/luxe/card-hover-effect',
        code: `<script lang="ts">
  import { Motion, AnimatePresence, AnimateSharedLayout } from "svelte-motion";
  import { cn } from "$lib/utils";

  let hoverdIdx = 0;
  const items = [
    {
      id: 1,
      title: "Luxe",
      description:
        "Explore the new website that simplifies the creation of sophisticated dark mode components.",
      href: "https://luxe.guhrodrigues.com",
    },
    {
      id: 2,
      title: "Luxe",
      description:
        "Explore the new website that simplifies the creation of sophisticated dark mode components.",
      href: "https://luxe.guhrodrigues.com",
    },
    {
      id: 3,
      title: "Luxe",
      description:
        "Explore the new website that simplifies the creation of sophisticated dark mode components.",
      href: "https://luxe.guhrodrigues.com",
    },
  ];
  export let containerClassName = "";
  export let hoveredItemClassName = "";
  export let itemClassName = "";
</script>

<div class={cn("grid md:grid-cols-3 px-32 py-32", containerClassName)}>
  {#each items as one}
    <a
      href={one.href}
      target="_blank"
      on:mouseenter={() => (hoverdIdx = one.id)}
      on:mouseleave={() => (hoverdIdx = 0)}
      class="relative flex flex-col gap-3 p-4"
    >
      <AnimatePresence let:item list={[{ key: 1 }, { key: 2 }, { key: 3 }]}>
        {#if hoverdIdx === one.id}
          <Motion
            layoutId="cardHoverEffect"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
            let:motion
          >
            <span
              use:motion
              class="absolute inset-0 z-0 block h-full w-full rounded-xl bg-neutral-900 cardHoverEffect"
            >
            </span>
          </Motion>
        {/if}
      </AnimatePresence>
      <div class="z-[1] space-y-3">
        <h1 class="font-medium text-white">{one.title}</h1>
        <p class="text-neutral-400">{one.description}</p>
      </div>
    </a>
  {/each}
</div>
`
    },
    {
        id: 'card-product',
        name: 'Card product',
        description: 'A card product',
        component: CardProduct,
        link: '/luxe/card-product',
        code: `<script>
  import { Motion, useMotionTemplate, useMotionValue } from "svelte-motion";
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate\`radial-gradient(200px circle at \${mouseX}px \${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)\`;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mousemove={(e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }}
  class="group relative max-w-[350px] w-full overflow-hidden rounded-xl bg-neutral-950"
>
  <div
    class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
  />
  <Motion
    style={{
      background,
    }}
    let:motion
  >
    <div
      use:motion
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
    ></div>
  </Motion>
  <div
    class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5"
  >
    <div class="space-y-2">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="https://i.pinimg.com/564x/c3/5c/30/c35c30d5bb21d2392c3daa0abd8a5440.jpg"
        alt="Product image"
        height={10}
        width={10}
        class="rounded-xl h-52 w-full object-cover opacity-75"
      />
      <div class="flex flex-row items-center justify-between pt-2">
        <h3 class="text-xl font-semibold text-neutral-200">Luxe</h3>
        <p class="text-[13px] text-neutral-300 select-none">$249.00</p>
      </div>
      <p class="text-sm leading-[1.5] text-neutral-400 pb-3">
        Library of dark mode components to illuminate your applications with
        elegance and sophistication.
      </p>
      <button
        class="inline-flex items-center justify-center gap-1 text-sm py-3 px-4 font-semibold bg-white text-black rounded-lg duration-300 hover:bg-white/70 w-full"
      >
        Sponsor Now
      </button>
    </div>
  </div>
</div>
`
    },
    {
        id: 'card-revealed-pointer',
        name: 'Card revealed pointer',
        description: 'A card with a revealed pointer',
        component: CardRevealedPointer,
        link: '/luxe/card-revealed-pointer',
        code: `<script>
  import { Motion, useMotionValue, useMotionTemplate } from "svelte-motion";
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate\`
						radial-gradient(200px circle at \${mouseX}px \${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
					\`;
</script>

<div
  on:mousemove={(e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }}
  class="group relative max-w-[350px] w-full overflow-hidden rounded-xl bg-neutral-950"
>
  <div
    class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
  />
  <Motion
    style={{
      background,
    }}
    let:motion
  >
    <div
      use:motion
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
    ></div>
  </Motion>
  <div
    class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5"
  >
    <div class="space-y-2">
      <h3 class="text-xl font-semibold text-neutral-200">Luxe</h3>
      <p class="text-sm leading-[1.5] text-neutral-400">
        Explore the new website that simplifies the creation of sophisticated
        dark mode components.
      </p>
    </div>
  </div>
</div>
`
    },
    {
        id: 'text-animated-decoration',
        name: 'Text animated decoration',
        description: 'Text with animated decoration',
        component: TextAnimatedDecoration,
        link: '/luxe/text-animated-decoration',
        code: `<div
  class="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
>
  <span class="text-neutral-400">Text Animated Decoration</span>
</div>
`
    },
    {
        id: 'text-animated-gradient',
        name: 'Text animated gradient',
        description: 'Text with animated decoration',
        component: TextAnimatedGradient,
        link: '/luxe/text-animated-gradient',
        code: `<span
  class="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-center text-transparent font-medium bg-clip-text"
>
  Text Animated Gradient
</span>
`
    },
    {
        id: 'text-glitch',
        name: 'Text glitch',
        description: 'Text with glitch effect',
        link: '/luxe/text-glitch',
        component: TextGlitch,
        code: `<div class="relative overflow-hidden group">
  <span class="invisible">Text Glitch</span>
  <span
    class="text-neutral-400 absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300"
  >
    Text Glitch
  </span>
  <span
    class="text-neutral-400 absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300"
  >
    Text Glitch
  </span>
</div>
`
    },
    {
        id: 'text-gradient',
        name: 'Text gradient',
        description: 'Text with gradient',
        link: '/luxe/text-gradient',
        component: TextGradient,
        code: `<h1
  class="text-3xl font-semibold bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text"
>
  Text Gradient Hello
</h1>
`
    },
    {
        id: 'text-shake',
        name: 'Text Shake',
        description: 'Text Shake',
        link: '/luxe/text-shake',
        component: TextShake,
        code: '<span class="text-neutral-400 hover:animate-text-shake"> Text Shake </span>'
    },
    {
        id: 'text-shine',
        name: 'Text shine',
        description: 'Text with shine effect',
        link: '/luxe/text-shine',
        component: TextShine,
        code: `<h1
  class="text-3xl font-medium inline-flex animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text"
>
  Text Shine
</h1>
`
    },
]