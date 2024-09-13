<script>
  import { page } from "$app/stores";
  import { allInstallations } from "$lib/aceternity-ui/docs/allinstallations";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  $: routeID = $page.params.docsID;
  $: docs = allInstallations.filter((doc) => doc.id === routeID)[0];
</script>

<!-- SEO -->
<svelte:head>
  <title>{docs.title} · Svelte</title>
  <meta name="description" content={docs?.desc} />
  <meta property="og:title" content={docs?.title + "· Svelte"} />
  <meta property="og:description" content={docs?.desc} />
  <meta property="og:site_name" content="Svelte Tailwind Components" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={docs?.title + "· Svelte"} />
  <meta name="twitter:description" content={docs?.desc} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<!-- Page -->

<div class="my-0 md:my-4 mx-px md:mx-5">
  <!-- <a href="/a" class="flex items-center gap-1 text-muted-foreground w-fit">
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
  {#key docs}
    <div class="space-y-5">
      <div>
        <h1 class="text-2xl font-bold mt-4 md:text-4xl capitalize mb-2">
          {docs.title}
        </h1>
        <p class="dark:text-muted-foreground md:text-lg">
          {docs.desc}
        </p>
      </div>
      <div>
        {#each docs.allcode as detail}
          <div class="mb-6 rounded-md">
            <div class="mb-4">
              <h2 class="text-2xl font-semibold mb-1">{detail.title}</h2>
              {#if detail.desc}
                <p class="dark:text-muted-foreground">{detail.desc}</p>
              {/if}
            </div>
            <CodeBlock
              code={detail.code}
              fileName={detail?.filename ? detail?.filename : "Terminal"}
              lang={detail.language}
            />
          </div>
        {/each}
      </div>
    </div>
  {/key}
</div>
