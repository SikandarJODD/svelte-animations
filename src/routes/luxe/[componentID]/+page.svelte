<script lang="ts">
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import { allLuxeComponents } from "$lib/luxe/components/AllLuxeComponents";
  import { page } from "$app/stores";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Carbon from "$lib/carbon/Carbon.svelte";

  $: routeID = $page.params.componentID;
  $: comp = allLuxeComponents.filter((comp) => comp.id == routeID)[0];
  $: fileName =
    comp.name
      .split(" ")
      .map((k) => {
        let kit = k.charAt(0).toUpperCase();
        let m = kit + k.replace(k[0], "");
        return m;
      })
      .join("") + ".svelte";
</script>

<svelte:head>
  <title>{comp.name} · Svelte</title>
  <meta name="description" content={comp.description} />
  <meta property="og:title" content={comp.name + "· Svelte"} />
  <meta property="og:description" content={comp.description} />
  <meta property="og:site_name" content="Svelte Tailwind Components" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={comp.name + "· Svelte"} />
  <meta name="twitter:description" content={comp.description} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div class="my-0 md:my-4 mx-px md:mx-5">
  <div class="w-full min-h-32 grid grid-cols-1 lg:grid-cols-6 space-x-6">
    <div class="lg:col-span-4">
      <a
        href="/luxe"
        class="flex items-center gap-1 text-muted-foreground w-fit"
      >
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
      <div>
        <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-2">
          {comp.name}
        </h1>
        {#if comp?.tags}
          <div class="flex gap-2 items-center">
            {#each comp.tags as item}
              <Badge variant="outline" class="py-1 px-3">{item}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="order-first lg:order-last min-h-32 lg:col-span-2  md:my-0">
      <Carbon />
    </div>
  </div>
  <div class="space-y-5 mt-2 lg:mt-0">
    <div>
      <ComponentView
        class="{comp?.showGrid === true
          ? ' relative overflow-hidden'
          : ''} {comp?.class}"
      >
        {#if comp?.showGrid}
          <div
            class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
          ></div>
        {/if}
        <svelte:component this={comp.component} />
      </ComponentView>
    </div>
    {#if comp?.download}
      {#key comp}
        <CodeBlock
          code={comp.download}
          lang="shellscript"
          fileName="Install dependencies"
        />
      {/key}
    {/if}
    {#if comp?.cncode}
      {#key comp}
        <CodeBlock code={comp.cncode} lang="ts" fileName="lib/utils.ts" />
      {/key}
    {/if}

    {#if typeof comp.code === "string"}
      {#key comp}
        <CodeBlock code={comp.code} {fileName} />
      {/key}
    {:else if comp.code instanceof Array}
      {#each comp.code as { filename, code }}
        <CodeBlock {code} fileName={filename} />
      {/each}
    {/if}

    {#if comp?.tailwind}
      {#key comp}
        <CodeBlock code={comp?.tailwind} fileName="tailwind.config.ts" />
      {/key}
    {/if}
  </div>
</div>
