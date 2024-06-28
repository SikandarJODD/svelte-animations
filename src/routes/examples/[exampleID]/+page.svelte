<script>
  import { page } from "$app/stores";
  import Box from "$lib/components/dev/tags/Box.svelte";
  import HeadingOne from "$lib/components/dev/tags/HeadingOne.svelte";
  import Para from "$lib/components/dev/tags/Para.svelte";
  import { animationExamples } from "$lib/examples/AnimationsExamples";
  $: exampleID = $page.params.exampleID;
  $: singlePage = animationExamples.filter(
    (example) => example.id === Number(exampleID)
  )[0];
  // $: console.log(exampleID, singlePage, "singlePage");
</script>

<svelte:head>
  <title>{singlePage.name}</title>
  <meta name="description" content={singlePage.desc} />
  <meta
    property="og:title"
    content="Svelte Framer Motion | {singlePage.name}"
  />
  <meta property="og:description" content={singlePage.desc} />
  <meta property="og:site_name" content="Svelte Animations Examples" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Svelte Framer Motion | {singlePage.name}"
  />
  <meta name="twitter:description" content={singlePage.desc} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div>
  <HeadingOne>{singlePage.name}</HeadingOne>
  <Para>{singlePage.desc}</Para>
  <Box>
    <svelte:component this={singlePage.component} />
  </Box>
</div>
