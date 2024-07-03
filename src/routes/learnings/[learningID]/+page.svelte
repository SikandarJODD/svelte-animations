<script>
  import { page } from "$app/stores";
  import HeadingOne from "$lib/components/dev/tags/HeadingOne.svelte";
  import Para from "$lib/components/dev/tags/Para.svelte";
  import { motionLearnings } from "$lib/framer-motion/MotionsLearnings";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import GradientLine from "$lib/luxe/components/codeblock/GradientLine.svelte";

  $: exampleID = $page.params.learningID;
  $: singlePage = motionLearnings.filter(
    (example) => example.id === Number(exampleID)
  )[0];
  $: fileName =
    singlePage.name
      .split(" ")
      .map((k) => {
        let kit = k.charAt(0).toUpperCase();
        let m = kit + k.replace(k[0], "");
        return m;
      })
      .join("") + ".svelte";
</script>

<svelte:head>
  <title>
    Svelte | {singlePage.name}
  </title>
  <meta name="description" content={singlePage.desc} />
  <meta
    property="og:title"
    content="Svelte Framer Motion | {singlePage.name}"
  />
  <meta property="og:description" content={singlePage.desc} />
  <meta property="og:image" content={singlePage.image} />
  <meta property="og:site_name" content="Svelte Animations Examples" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Svelte Framer Motion | {singlePage.name}"
  />
  <meta name="twitter:description" content={singlePage.desc} />
  <meta name="twitter:image" content={singlePage.image} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div class="my-0 md:my-14 mx-2 md:mx-5">
  <a href="/learnings" class="flex items-center gap-1 text-muted-foreground">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-left mt-px"
      ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
    >
    Back
  </a>
  <div class="space-y-7">
    <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize my-6">
      {singlePage.name}
    </h1>
    <ComponentView class="relative {singlePage.class}">
      <GradientLine />
      <svelte:component this={singlePage.component} />
    </ComponentView>
    <CodeBlock
      code={`npx @svelte-add/tailwindcss@latest \nnpm i svelte-motion\n`}
      lang="shellscript"
      fileName="Tailwind CSS & Svelte Motion"
    />
    <div>
      {#key singlePage}
        {#if typeof singlePage.code === "string"}
          <CodeBlock code={singlePage.code} {fileName} />
        {:else if singlePage.code instanceof Array}
          {#each singlePage.code as { filename, code }}
            <CodeBlock {code} fileName={filename} />
          {/each}
        {/if}
      {/key}
    </div>
  </div>
</div>
