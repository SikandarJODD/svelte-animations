<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import { page } from "$app/stores";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  import { allMagicComponents } from "$lib/magicui/AllMagicComponents";
  import * as Tabs from "$lib/components/ui/tabs";
  import DotsCenterExample from "$lib/magicui/backgrounds/DotPattern/examples/DotsCenterExample.svelte";
  import DotPattern from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte";

  $: routeID = $page.params.compID;
  $: comp = allMagicComponents.filter((c) => c.id === routeID)[0];
  // $: console.log(comp, "Components", routeID);
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

<div class="my-0 md:my-10 mx-2 md:mx-5">
  <a href="/magic" class="flex items-center gap-1 text-muted-foreground w-fit">
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
        {@html comp.desc}
      </p>
    </div>
    {#if comp?.examples}
      <!-- <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-3">
        Examples
      </h1> -->
      <Tabs.Root value={comp.examples[0].name}>
        {#each comp.examples as example}
          <Tabs.List class="bg-transparent">
            <Tabs.Trigger value={example.name}>{example.name}</Tabs.Trigger>
          </Tabs.List>
        {/each}
        <Separator class="mb-4 -mt-0.5 ml-1  pt-0" />
        {#each comp.examples as example}
          <Tabs.Content value={example.name}>
            <div class="space-y-4">
              <div>
                <ComponentView
                  class="{example?.showGrid === true
                    ? ' relative overflow-hidden '
                    : ''} {example.class} {example?.showDots === true
                    ? ' relative overflow-hidden '
                    : ''}"
                >
                  {#if example?.showGrid}
                    <div
                      class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
                    ></div>
                  {:else if example?.showDots}
                    <div
                      class="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] absolute h-full w-full"
                    >
                      <DotPattern
                        class="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] "
                        fillColor="rgba(120, 120, 120,0.4)"
                      />
                    </div>
                  {/if}
                  <svelte:component this={example.component} />
                </ComponentView>
              </div>
              <div class="space-y-4">
                {#if typeof example.code === "string"}
                  {#key example}
                    <CodeBlock
                      code={example.code}
                      fileName={example.fileName}
                    />
                  {/key}
                {:else if example.code instanceof Array}
                  {#each example.code as singleCode}
                    <div>
                      <CodeBlock
                        code={singleCode.code}
                        fileName={singleCode.filename}
                      />
                    </div>
                  {/each}
                {/if}
              </div>
            </div>
          </Tabs.Content>
        {/each}
      </Tabs.Root>
    {/if}
    <Separator class="mb-4" />
    {#if comp?.component}
      <div>
        <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-4">
          Original Component
        </h1>

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
          <svelte:component this={comp.component} />
        </ComponentView>
      </div>
    {/if}

    <div>
      <h1 class="text-2xl font-bold mt-0 md:text-3xl capitalize mb-3">
        Component Code
      </h1>
      {#if typeof comp.code === "string"}
        {#key comp}
          <CodeBlock code={comp.code} {fileName} />
        {/key}
      {:else if comp.code instanceof Array}
        <div class="space-y-5">
          {#each comp.code as { filename, code }}
            <CodeBlock {code} fileName={filename} />
          {/each}
        </div>
      {/if}
    </div>
    {#if comp?.tailwind}
      <CodeBlock
        code={comp.tailwind}
        fileName="tailwind.config.ts"
        lang="json"
      />
    {/if}
  </div>
</div>
