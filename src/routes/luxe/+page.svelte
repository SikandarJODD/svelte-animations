<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
import { allLuxeComponents } from "$lib/luxe/components/AllLuxeComponents";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import GradientLine from "$lib/luxe/components/codeblock/GradientLine.svelte";
  import { cn } from "$lib/utils";
  import SvelteSeo from "svelte-seo";
  //   Important Color : #09090b
</script>

<SvelteSeo
  title="Luxe Svelte Components"
  description="Luxe Svelte – Library of components copy and paste to illuminate your applications with elegance and sophistication."
  canonical="https://animation-svelte.vercel.app"
  keywords="luxe svelte, luxe componetns, svelte, sveltekit, UI Design, animation-svelte.vercel.app, svelte animation, svelte components, svelte library, svelte ui, sveltekit components, sveltekit library, sveltekit ui, sveltekit animation, sveltekit ui library, sveltekit components library, sveltekit ui components, luxe svelte, copy paste svelte components, svelte components library, svelte ui library, svelte animation library, sveltekit animation library, sveltekit ui library, sveltekit components library, sveltekit ui components, sveltekit components library, sveltekit animation components"
  twitter={{
    card: "summary_large_image",
    site: "@Sikandar_Bhide",
    title: "Luxe Svelte Components",
    description:
      "Luxe Svelte – Library of components copy and paste to illuminate your applications with elegance and sophistication.",
    image:
      "https://i.pinimg.com/736x/8f/88/8a/8f888ad7286306bbbf10a138c687ca5d.jpg",
  }}
  openGraph={{
    url: "https://animation-svelte.vercel.app",
    title: "Luxe Svelte Components",
    description:
      "Luxe Svelte – Library of components copy and paste to illuminate your applications with elegance and sophistication.",
    images: [
      {
        url: "https://i.pinimg.com/736x/8f/88/8a/8f888ad7286306bbbf10a138c687ca5d.jpg",
        width: 800,
        height: 600,
        alt: "Luxe Svelte Components",
      },
    ],
    site_name: "Luxe Svelte Components",
  }}
/>

<main class="my-2 xl:my-8 space-y-6 md:space-y-10 mx-2 md:mx-4">
  <section class="flex flex-col gap-6">
    <div class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-semibold text-primary">
        Svelte Luxe Components
      </h1>
      <p class=" font-normal text-neutral-500">
        Luxe Svelte – Library of components, <span class="text-primary"
          >Copy</span
        >
        and <span class="text-primary">Paste</span> to illuminate your applications
        with elegance.
      </p>
    </div>
  </section>
  <div class="grid md:grid-cols-3 gap-x-6 gap-y-5 md:gap-y-8">
    {#each allLuxeComponents as { name, colSpan, component, id }}
      <div
        id={name}
        class={cn("space-y-3", colSpan && `md:col-[span_3_/_span_3]`)}
      >
        <a
          href={`/luxe/${id}`}
          class="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
        >
          <span>{name}</span>

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
          {#if colSpan}
            <GradientLine />
          {/if}
          <svelte:component this={component} />
        </ComponentView>
      </div>
    {/each}
  </div>
</main>
