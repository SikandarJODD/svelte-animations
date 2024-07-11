<script>
  import { allLuxeComponents } from "$lib/luxe/components/AllLuxeComponents";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import GradientLine from "$lib/luxe/components/codeblock/GradientLine.svelte";
  import DotPattern from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte";
  import AnimatedBeamMultipleInput from "$lib/magicui/components/AnimatedBeam/examples/AnimatedBeamMultipleInput.svelte";
  import SimpleVariant from "$lib/magicui/components/Cards/simpleVairant/SimpleVariant.svelte";
  import SimpleVariant3 from "$lib/magicui/components/Cards/simpleVariant3/SimpleVariant3.svelte";
  import MarqueExample from "$lib/magicui/components/Marquee/example/MarqueExample.svelte";
  import OribtingExample from "$lib/magicui/components/orbitingCircles/OribtingExample.svelte";
  import BorderBeamExample from "$lib/magicui/SpecialEffects/BorderBeam/BorderBeamExample.svelte";
  import MeteorsExample from "$lib/magicui/SpecialEffects/Meteors/MeteorsExample.svelte";
  import AnimatedExample from "$lib/magicui/text-animations/AnimatedGradientText/AnimatedExample.svelte";
  import AnimatedGradientText from "$lib/magicui/text-animations/AnimatedGradientText/AnimatedGradientText.svelte";
  import AnimatedShinyText from "$lib/magicui/text-animations/AnimatedShinyText/AnimatedShinyText.svelte";
  import AnimatedShinyTextExample from "$lib/magicui/text-animations/AnimatedShinyText/AnimatedShinyTextExample.svelte";
  import BoxRevealExample from "$lib/magicui/text-animations/BoxReveal/BoxRevealExample.svelte";
  import { cn } from "$lib/utils";
  import SvelteSeo from "svelte-seo";

  //   Important Color : #09090b
</script>

<SvelteSeo
  title="Svelte Magic UI"
  description="Svelte Magic UI - A collection of components that will make your application look magical."
  canonical="https://animation-svelte.vercel.app/magic"
  keywords="svelte magic ui, magic ui componetns, svelte magic , sveltekit, UI Design, animation-svelte.vercel.app, svelte animation, svelte components,svelte magic code, svelte magic ui bento, svelte library, svelte ui, sveltekit components, sveltekit library, sveltekit ui, sveltekit animation, sveltekit ui library, sveltekit components library, sveltekit ui components, luxe svelte, copy paste svelte components, svelte components library, svelte ui library, svelte animation library, sveltekit animation library, sveltekit ui library, sveltekit components library, sveltekit ui components, sveltekit components library, sveltekit animation components"
  twitter={{
    card: "summary_large_image",
    site: "@Sikandar_Bhide",
    title: "Svelte Magic UI Components",
    description:
      "Svelte Magic UI - A collection of components that will make your application look magical.",
    image:
      "https://i.pinimg.com/736x/8f/88/8a/8f888ad7286306bbbf10a138c687ca5d.jpg",
  }}
  openGraph={{
    url: "https://animation-svelte.vercel.app/magic",
    title: "Svelte Magic UI Components",
    description:
      "Svelte Magic UI - A collection of components that will make your application look magical.",
    images: [
      {
        url: "https://i.pinimg.com/736x/8f/88/8a/8f888ad7286306bbbf10a138c687ca5d.jpg",
        width: 800,
        height: 600,
        alt: "Svelte Magic UI Components",
      },
    ],
    site_name: "Svelte Magic UI",
  }}
/>

<main class="my-2 xl:my-4 space-y-6 md:space-y-8 mx-2 md:mx-4">
  <section class="flex flex-col gap-6">
    <div class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-semibold text-primary">
        Svelte Magic UI
      </h1>
      <p class=" font-normal text-neutral-500">
        Svelte Magic UI – Free Components, <span class="text-primary">Copy</span
        >
        and <span class="text-primary">Paste</span> to illuminate your applications
        with elegance.
      </p>
    </div>
  </section>
  <div class="grid md:grid-cols-6 gap-6 md:gap-2">
    <div class="md:col-span-3 h-[320px] md:h-[400px]">
      <a href="/magic/animated-beam">
        <AnimatedBeamMultipleInput
          class="h-full md:max-w-[540px] p-3 md:p-10"
        /></a
      >
    </div>
    <div class="md:col-span-3 h-[380px] md:h-[400px]">
      <a href="/magic/orbiting-circles">
        <OribtingExample
          class="h-[380px] md:h-[400px] w-full md:max-w-[34rem]"
        />
      </a>
    </div>
  </div>
  <div class={cn("space-y-3 md:col-[span_3_/_span_3]")}>
    <a
      href="/magic/meteors"
      class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
    >
      <span>Meteors</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
        ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
      >
    </a>
    <ComponentView class="relative">
      <GradientLine />
      <!-- Component -->
      <MeteorsExample />
    </ComponentView>
  </div>
  <div class={cn("space-y-3 md:col-[span_3_/_span_3]")}>
    <a
      href="/magic/marquee"
      class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
    >
      <span>Marquee</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
        ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
      >
    </a>
    <ComponentView class="relative">
      <GradientLine />

      <!-- Component -->
      <MarqueExample />
    </ComponentView>
  </div>
  <!-- Animated Text Shiny & gradient -->
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
    <div class={cn("space-y-3")}>
      <a
        href="/magic/animated-gradient-text"
        class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
      >
        <span>Animated Gradient Text</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
          ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
        >
      </a>
      <ComponentView class="relative">
        <GradientLine />
        <div
          class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
        ></div>

        <!-- Component -->
        <AnimatedExample />
      </ComponentView>
    </div>
    <div class={cn("space-y-3")}>
      <a
        href="/magic/animated-shiny-text"
        class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
      >
        <span>Animated Shiny Text</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
          ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
        >
      </a>
      <ComponentView class="relative">
        <GradientLine />
        <div
          class="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] absolute h-full w-full"
        >
          <DotPattern
            class="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] "
            fillColor="rgba(120, 120, 120,0.4)"
          />
        </div>
        <!-- Component -->
        <AnimatedShinyTextExample />
      </ComponentView>
    </div>
  </div>
  <!-- Border Beam -->
  <div class={cn("space-y-3 md:col-[span_3_/_span_3]")}>
    <a
      href="/magic/border-beam"
      class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
    >
      <span>Border Beam</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
        ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
      >
    </a>
    <ComponentView class="relative">
      <GradientLine />
      <div
        class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
      ></div>

      <!-- Component -->
      <BorderBeamExample />
    </ComponentView>
  </div>
  <!-- Simple Cards -->
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
    <div class={cn("space-y-3")}>
      <a
        href="/magic/animated-gradient-text"
        class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
      >
        <span>Simple Cards</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
          ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
        >
      </a>
      <ComponentView class="relative">
        <GradientLine />
        <div
          class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
        ></div>

        <!-- Component -->
        <SimpleVariant />
      </ComponentView>
    </div>
    <div class={cn("space-y-3")}>
      <a
        href="/magic/animated-shiny-text"
        class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
      >
        <span>Plus Border Card</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
          ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
        >
      </a>
      <ComponentView class="relative h-[276px] ">
        <GradientLine />
        <div
          class="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] absolute h-full w-full"
        >
          <DotPattern
            class="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] "
            fillColor="rgba(120, 120, 120,0.4)"
          />
        </div>
        <!-- Component -->
        <SimpleVariant3 />
      </ComponentView>
    </div>
  </div>
  <!-- Box Reveal -->
  <div class={cn("space-y-3 md:col-[span_3_/_span_3]")}>
    <a
      href="/magic/box-reveal"
      class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
    >
      <span>Box Reveal</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-0.5 scale-0 duration-200 group-hover:scale-100"
        ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
      >
    </a>
    <ComponentView class="relative">
      <GradientLine />
      <!-- Component -->
      <BoxRevealExample />
    </ComponentView>
  </div>
</main>
