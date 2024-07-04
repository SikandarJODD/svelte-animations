<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  let comp: any, fileName: any;
</script>

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
