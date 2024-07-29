<script>
  import HeroGrid from "$lib/components/dev/Hero/HeroGrid.svelte";
  import HeroSection from "$lib/components/dev/Hero/HeroSection.svelte";
  import HeroMagic from "$lib/components/dev/landing/HeroMagic.svelte";
</script>

<svelte:head>
  <title>Svelte Animations Components</title>
  <meta property="twitter:title" content="Svelte Animations Components" />
  <meta
    name="description"
    content="List of Svelte Components build using Magic UI, Luxe, Indie UI"
  />
  <meta
    property="og:image"
    content="https://i.pinimg.com/736x/15/1a/06/151a0655f530b8f95481bedc62ca90e6.jpg"
  />
  <meta property="og:site_name" content="Svelte Animations Components" />
  <meta
    property="og:description"
    content="List of Svelte Components build using Magic UI, Luxe, Indie UI"
  />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />

  <meta
    property="twitter:image"
    content="https://i.pinimg.com/736x/15/1a/06/151a0655f530b8f95481bedc62ca90e6.jpg"
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:description"
    content="List of Svelte Components build using Magic UI, Luxe, Indie UI"
  />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>
<div>
  <HeroSection />
  <HeroGrid />
  <HeroMagic />
</div>
