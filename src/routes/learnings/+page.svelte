<script>
  import HeadingOne from "$lib/components/dev/tags/HeadingOne.svelte";
  import Para from "$lib/components/dev/tags/Para.svelte";
  import { motionLearnings } from "$lib/framer-motion/MotionsLearnings";
  import ShowCard from "$lib/framer-motion/layouts/ShowCard.svelte";
</script>

<svelte:head>
  <title>Framer Motion using Svelte</title>
  <meta
    name="description"
    content="Learn Framer Motion Animations using Svelte"
  />
  <!-- All Seo Tags -->
  <meta property="og:title" content="Framer Motion using Svelte" />
  <meta
    property="og:description"
    content="Learn Framer Motion Animations using Svelte"
  />
  <meta
    property="og:image"
    content="https://i.pinimg.com/736x/89/17/30/8917307281a3e763a32310d2d56a14af.jpg"
  />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:title" content="Framer Motion using Svelte" />
  <meta
    name="twitter:description"
    content="Learn Framer Motion Animations using Svelte"
  />
  <meta
    name="twitter:image"
    content="https://i.pinimg.com/736x/89/17/30/8917307281a3e763a32310d2d56a14af.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@Sikandar_Bhide" />
</svelte:head>
<div >
  <div class="px-10 mt-8">
    <HeadingOne>Framer Motion using Svelte</HeadingOne>
    <Para>
      Framer Motion is a production-ready motion library for React. we are going
      to use <a
        href="https://svelte-motion.gradientdescent.de"
        target="_blank"
        class="text-primary underline underline-offset-2">Svelte-Motion</a
      > which is a port of Framer Motion for Svelte.
    </Para>
  </div>
  <div class="flex justify-center items-center flex-wrap gap-6 mt-5">
    {#each motionLearnings as item}
      <ShowCard {item} />
    {/each}
  </div>
</div>
