<script>
  import { allIndieUIComponents } from "$lib/indieui/allIndieUIComponents";
  import { page } from "$app/stores";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import DotPattern from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";

  $: routeID = $page.params.compID;
  $: comp = allIndieUIComponents.filter((comp) => comp.id == routeID)[0];

  /* 
  class="{comp?.showGrid === true
          ? ' relative overflow-hidden'
          : ''} {comp?.class}"


class="{example?.showGrid === true
                        ? ' relative overflow-hidden '
                        : ''} {example.class} {example?.showDots === true
                        ? ' relative overflow-hidden '
                        : ''}"
  */
</script>

<svelte:head>
  <title>{comp.name} · Svelte</title>
  <meta name="description" content="Svelte Indie UI" />
  <meta property="og:title" content={comp.name + "· Svelte"} />
  <meta property="og:description" content="Svelte Indie UI" />
  <meta property="og:site_name" content="Svelte Tailwind Components" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={comp.name + "· Svelte"} />
  <meta name="twitter:description" content="Svelte Indie UI" />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div class="my-0 md:my-14 mx-px md:mx-5">
  <a href="/in" class="flex items-center gap-1 text-muted-foreground w-fit">
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
      <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-2">
        {comp.name}
      </h1>
    </div>
    <div>
      {#key comp}
        <div class="space-y-6">
          {#each comp.variants as item}
            <Tabs.Root value={item.name}>
              <Tabs.List class="bg-transparent">
                <Tabs.Trigger value={item.name}>{item.name}</Tabs.Trigger>
                <Tabs.Trigger value="code">Code</Tabs.Trigger>
              </Tabs.List>
              <Separator class="mb-4 -mt-0.5 ml-1  pt-0" />
              <Tabs.Content value={item.name}>
                <div class="space-y-4">
                  <div>
                    {#key comp}
                      <ComponentView
                        class="{item?.showGrid === true
                          ? ' relative overflow-hidden '
                          : ''} {item?.showDots === true
                          ? ' relative overflow-hidden '
                          : ''}"
                      >
                        {#if item?.showGrid}
                          <div
                            class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
                          ></div>
                        {:else if item?.showDots}
                          <div
                            class="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] absolute h-full w-full"
                          >
                            <DotPattern
                              class="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] "
                              fillColor="rgba(120, 120, 120,0.4)"
                            />
                          </div>
                        {/if}
                        <svelte:component this={item.component} />
                      </ComponentView>
                    {/key}
                  </div>
                </div>
              </Tabs.Content>
              <Tabs.Content value="code">
                <div class="space-y-4">
                  {#key comp}
                    <div>
                      <!-- <ComponentView> -->
                      {#if typeof item.code === "string"}
                        <CodeBlock
                          code={item.code}
                          lang="svelte"
                          fileName={item.fileName}
                        />
                      {/if}
                      {#if item.code instanceof Array}
                        <div class="space-y-4">
                          {#each item.code as code}
                            <CodeBlock
                              code={code.code}
                              lang="svelte"
                              fileName={code.filename}
                            />
                          {/each}
                        </div>
                      {/if}
                      <!-- </ComponentView> -->
                    </div>
                  {/key}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          {/each}
        </div>
      {/key}
    </div>
  </div>
  
</div>
