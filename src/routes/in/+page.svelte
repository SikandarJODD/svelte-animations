<script>
  import SvelteSeo from "svelte-seo";
  import Page from "../fun/+page.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  //   Important Color : #09090b
</script>

<SvelteSeo
  title="Svelte Indie UI Components"
  description="Library of components copy and paste to illuminate your applications with elegance and sophistication."
  canonical="https://animation-svelte.vercel.app/luxe"
  keywords="luxe svelte, luxe componetns, svelte, sveltekit, UI Design, animation-svelte.vercel.app, svelte animation, svelte components, svelte library, svelte ui, sveltekit components, sveltekit library, sveltekit ui, sveltekit animation, sveltekit ui library, sveltekit components library, sveltekit ui components, luxe svelte, copy paste svelte components, svelte components library, svelte ui library, svelte animation library, sveltekit animation library, sveltekit ui library, sveltekit components library, sveltekit ui components, sveltekit components library, sveltekit animation components"
  twitter={{
    card: "summary_large_image",
    site: "@Sikandar_Bhide",
    title: "Svelte Indie UI Components",
    description:
      "Library of components copy and paste to illuminate your applications with elegance and sophistication.",
    image:
      "https://i.pinimg.com/736x/8f/88/8a/8f888ad7286306bbbf10a138c687ca5d.jpg",
  }}
  openGraph={{
    url: "https://animation-svelte.vercel.app/luxe",
    title: "Svelte Indie UI Components",
    description:
      "Library of components copy and paste to illuminate your applications with elegance and sophistication.",
    images: [
      {
        url: "https://i.pinimg.com/736x/8f/88/8a/8f888ad7286306bbbf10a138c687ca5d.jpg",
        width: 800,
        height: 600,
        alt: "Svelte Indie UI Components",
      },
    ],
    site_name: "Svelte Indie UI Components",
  }}
/>
<main class="my-2 xl:my-8 space-y-6 md:space-y-10 mx-2 md:mx-4">
  <section class="flex flex-col gap-5">
    <div class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-bold text-primary">
        Svelte Indie UI
      </h1>
      <p class=" font-normal text-neutral-500">
        Free components, <span class="text-primary">Copy</span>
        and <span class="text-primary">Paste</span> to illuminate your applications
        with elegance.
      </p>
      <p class=" font-normal text-neutral-500">
        Visit to Preview Indie UI Components <a
          href="/fun"
          class="underline underline-offset-2 text-primary">Preview</a
        >
      </p>
    </div>
    <Separator />
    <Page />
  </section>
</main>
