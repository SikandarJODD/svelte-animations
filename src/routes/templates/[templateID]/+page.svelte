<script>
  import { page } from "$app/stores";
  import { allIcons, allTemplates } from "$lib/templates/allTemplates";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
  import Button from "$lib/components/ui/button/button.svelte";
  import { marked } from "marked";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";

  $: routeID = $page.params.templateID;
  $: template = allTemplates.filter((t) => t.id === routeID)[0];
  $: console.log(template, "Template");
</script>

<!-- <svelte:head>
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
</svelte:head> -->

<div class="my-0 md:my-2 md:mx-2">
  <!-- Breadcrumb -->
  <div>
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page class="font-medium">{template.title}</Breadcrumb.Page
          >
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  </div>
  <div>
    <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-2">
      {template.title}
    </h1>
    <p class="text-muted-foreground text-md md:text-lg">
      {template.desc}
    </p>
    <!-- img -->
    <div class="mt-4 w-full md:max-w-4xl h-fit md:h-fit">
      <img
        src={template.img}
        alt={template.title}
        class="h-fit object-contain object-top rounded-xl border border-zinc-300/20 shadow-lg dark:shadow-zinc-950"
      />
    </div>
    <div class="my-6 w-full md:w-4/5 flex justify-center items-center gap-3">
      <Button
        download={template.title}
        href={template.downloadLink}
        class="w-full"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-download mr-1"
          ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
            points="7 10 12 15 17 10"
          /><line x1="12" x2="12" y1="15" y2="3" /></svg
        >Download</Button
      >
      <Button
        href={template.previewLink}
        target="_blank"
        variant="outline"
        class="w-full"
        >Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-external-link ml-1"
          ><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          /></svg
        >
      </Button>
    </div>

    <div class="mt-8 mb-4">
      <div
        class="prose dark:prose-invert prose-h1:my-0 prose-p:my-2 prose-h2:my-3 prose-li:my-1 prose-p:text-lg prose-li:text-md max-w-4xl"
      >
        {@html marked(template.markdown)}
      </div>
    </div>
    <Separator />
    <div class="mb-4">
      <div>
        <h2 class="text-xl font-semibold mt-4 md:text-2xl">Tech Stack</h2>
      </div>
      <div class="mt-4 flex items-center gap-2.5 flex-wrap">
        {#each template.techstack as item}
          <Button variant="outline" class="capitalize ">
            {#if allIcons.hasOwnProperty(item)}
              <img src={allIcons[item]} alt={item} class="w-5 h-5 mr-1" />
            {/if}
            {item}</Button
          >
        {/each}
      </div>
    </div>
    <div
      class="bg-zinc-900/40 px-3 py-4 border-l-4 border"
      id="credits_{template.title}"
    >
      <h3 class="font-semibold text-2xl mb-1.5">Credits</h3>
      <p class="text-zinc-400">
        <a
          href="https://magicui.design/"
          target="_blank"
          class="underline underline-offset-2 text-primary">Magic UI</a
        >
        : This template is Inspired from Magic UI. He is GOD, do visit for Amazing
        Components and Templates.
      </p>
    </div>
  </div>
</div>
