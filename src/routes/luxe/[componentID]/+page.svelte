<script lang="ts">
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import { allLuxeComponents } from "$lib/luxe/components/AllLuxeComponents";
  import { page } from "$app/stores";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  import Code from "$lib/luxe/components/codeblock/Code.svelte";

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
  <meta property="og:title" content={comp.name +'· Svelte'} />
  <meta
    property="og:description"
    content={comp.description}
  />
  <meta property="og:site_name" content="Svelte Tailwind Components">
  <meta property="og:url" content="https://animation-svelte.vercel.app">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={comp.name +'· Svelte'}>
  <meta name="twitter:description" content={comp.description}>
  <meta name="twitter:site" content="@Sikandar_Bhide">
</svelte:head>

<div class="my-0 md:my-14 mx-2 md:mx-5">
  <a href="/luxe" class="flex items-center gap-1 text-muted-foreground">
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
      {comp.name}
    </h1>
    <div>
      <ComponentView>
        <svelte:component this={comp.component} />
      </ComponentView>
    </div>
    {#if typeof comp.code === "string"}
      <!-- content here -->
      {#key comp}
        <CodeBlock code={comp.code} {fileName} />
      {/key}
    {:else if comp.code instanceof Array}
      {#each comp.code as { filename, code }}
        <div>
          <CodeBlock {code} fileName={filename} />
        </div>
      {/each}
    {/if}
  </div>
</div>
