<script>
  import { page } from "$app/stores";
  import * as Tabs from "$lib/components/ui/tabs/index";
  import { allAceternityUI } from "$lib/aceternity-ui/components/allAceternityUI";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";

  $: routeID = $page.params.componentID;
  $: comp = allAceternityUI.filter((c) => c.id === routeID)[0];
</script>

<svelte:head>
  <title>{comp.title} · Svelte Aceternity UI</title>
  <meta name="description" content={comp.desc} />
  <meta property="og:title" content={comp.title + "· Svelte"} />
  <meta property="og:description" content={comp.desc} />
  <meta property="og:site_name" content="Svelte Tailwind Components" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={comp.title + "· Svelte"} />
  <meta name="twitter:description" content={comp.desc} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div class="mx-px md:mx-5">
  <!-- <a href="/luxe" class="flex items-center gap-1 text-muted-foreground w-fit">
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
  </a> -->
  {#key comp}
    <div class="space-y-5 mb-20">
      <!-- Compo Intro -->
      <div>
        <h1 class="text-2xl font-bold mt-4 md:text-4xl capitalize mb-1">
          {comp.title}
        </h1>
        <p class="text-lg text-muted-foreground mb-2">
          {comp.desc}
        </p>
        {#if comp?.tags}
          <div class="flex gap-2 items-center">
            {#each comp.tags as item}
              <Badge variant="outline" class="py-1 px-3">{item}</Badge>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Preview Comp -->
      <div id="{comp.title}-tabs">
        <Tabs.Root value={comp.title}>
          <Tabs.List class="bg-transparent">
            <Tabs.Trigger value={comp.title}>Preview</Tabs.Trigger>
            <Tabs.Trigger value="{comp.title}-code">Code</Tabs.Trigger>
          </Tabs.List>
          <Separator class="mb-4 -mt-0.5 ml-1  pt-0" />
          <Tabs.Content value={comp.title}>
            <ComponentView>
              <svelte:component this={comp.preview.comp} />
            </ComponentView>
          </Tabs.Content>
          <Tabs.Content value="{comp.title}-code">
            {#each comp.preview.allcode as item}
              <CodeBlock
                lang="svelte"
                code={item.code}
                fileName={item.filename}
              />
            {/each}
          </Tabs.Content>
        </Tabs.Root>
      </div>
      <Separator class="my-4" />

      <!-- Installation Part -->
      <div>
        <h1 class="text-2xl md:text-3xl font-bold mt-4 capitalize mb-2">
          Installation • {comp.title} Component
        </h1>
        <div>
          {#each comp.installations as item}
            <div>
              <div>
                {#each item.allcode as compcode}
                  <div class="my-4">
                    <h4
                      class="text-lg font-medium mt-4 mb-1.5 ml-1 dark:text-neutral-300"
                    >
                      {compcode.title}
                    </h4>
                    <div>
                      <CodeBlock
                        lang={compcode.language}
                        code={compcode.code}
                        fileName={compcode.filename}
                        class={compcode.class}
                      />
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Examples -->
      {#if comp.examples}
        <div>
          <h1 class="text-2xl md:text-2xl font-bold mt-4 capitalize mb-2">
            Examples • {comp.title} Component
          </h1>
          <Separator class="my-4" />
          <div>
            {#each comp.examples as item,index}
              <div>
                <div class="mb-2 ml-1">
                  <h4 class="text-xl font-medium mt-4">
                    {index+1}. {item.title}
                  </h4>
                  <!-- <p class=" text-muted-foreground text-md">
                    {item.desc}
                  </p> -->
                </div>
                <div>
                  <Tabs.Root value={item.title}>
                    <Tabs.List class="bg-transparent">
                      <Tabs.Trigger value={item.title}>Preview</Tabs.Trigger>
                      <Tabs.Trigger value="{item.title}-code">Code</Tabs.Trigger
                      >
                    </Tabs.List>
                    <Separator class="mb-4 -mt-0.5 ml-1  pt-0" />
                    <Tabs.Content value={item.title}>
                      <ComponentView>
                        <svelte:component this={item.preview.comp} />
                      </ComponentView>
                    </Tabs.Content>
                    <Tabs.Content value="{item.title}-code">
                      {#each item.preview.allcode as compCode}
                        <CodeBlock
                          lang="svelte"
                          code={compCode.code}
                          fileName={compCode.filename}
                        />
                      {/each}
                    </Tabs.Content>
                  </Tabs.Root>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/key}
</div>
