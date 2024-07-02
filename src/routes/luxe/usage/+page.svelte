<script>
  import { tailwindCode } from "$lib";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
</script>

<div class="my-0 md:my-14 mx-2 md:mx-5">
  <div class="space-y-7">
    <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize my-6">
      Basic Usage of Components
    </h1>
    <!-- <CodeBlock
      code="npm i svelte-motion"
      fileName="Svelte Motion"
      lang="shellscript"
    /> -->
    <div>
      <p class="mb-2 px-1">Create <a href="https://kit.svelte.dev/docs/creating-a-project" class='underline underline-offset-2'>Svelte</a> Project and add Tailwind CSS using <code>svelte-add</code></p>
      <CodeBlock
        code="npx @svelte-add/tailwindcss@latest --typography false"
        fileName="Tailwind CSS"
        lang="shellscript"
      />
    </div>
    <CodeBlock code={tailwindCode} fileName="tailwind.config.ts" lang="json" />
  </div>
</div>
