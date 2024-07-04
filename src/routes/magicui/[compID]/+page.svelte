<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import { page } from "$app/stores";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  import { allMagicComponents } from "$lib/magicui/components/MagicSidebar/AllMagicComponents";
  import * as Tabs from "$lib/components/ui/tabs";

  $: routeID = $page.params.compID;
  $: comp = allMagicComponents.filter((comp) => comp.id == routeID)[0];
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
  <meta name="description" content={comp.desc} />
  <meta property="og:title" content={comp.name + "· Svelte"} />
  <meta property="og:description" content={comp.desc} />
  <meta property="og:site_name" content="Svelte Tailwind Components" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={comp.name + "· Svelte"} />
  <meta name="twitter:description" content={comp.desc} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div class="my-0 md:my-14 mx-2 md:mx-5">
  <a href="/magicui" class="flex items-center gap-1 text-muted-foreground">
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
  <div class="space-y-5">
    <div>
      <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-3">
        {comp.name}
      </h1>
      <p class="text-muted-foreground text-lg">
        {comp.desc}
      </p>
    </div>
    <Tabs.Root value="preview">
      <Tabs.List class="bg-transparent">
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>
      <Separator class="mb-4 -mt-0.5 ml-1  pt-0" />
      <Tabs.Content value="preview">
        <div>
          <ComponentView
            class="{comp?.showGrid === true
              ? ' relative overflow-hidden '
              : ''} {comp.class}"
          >
            {#if comp?.showGrid}
              <div
                class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
              ></div>
            {/if}
            <svelte:component this={comp.previewComp} />
          </ComponentView>
        </div>
      </Tabs.Content>
      <Tabs.Content value="code">
        {#if typeof comp.previewCode === "string"}
          {#key comp}
            <CodeBlock code={comp.previewCode} {fileName} />
          {/key}
        {:else if comp.previewCode instanceof Array}
          {#each comp.previewCode as { filename, code }}
            <div>
              <CodeBlock {code} fileName={filename} />
            </div>
          {/each}
        {/if}
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>
