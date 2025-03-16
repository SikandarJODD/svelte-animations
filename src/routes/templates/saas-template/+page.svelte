<script>
  import { page } from "$app/stores";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
  import Button from "$lib/components/ui/button/button.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import RainbowButton from "$lib/magicui/buttons/rainbow/RainbowButton.svelte";
  import SubHeading from "./SubHeading.svelte";

  let features = [
    "Save 100+ hours of work",
    "1x Landing Page with 10+ sections",
    "Dark mode support",
    "100% Mobile responsive",
    "SEO Optimized",
    "Scroll Animations & Micro Interactions",
    "Global config for text, images and more",
    "Get Github Repo Access",
    "Deploy live to vercel",
  ];

  let page_sectios = [
    "Header",
    "Hero",
    "Logos",
    "Problem",
    "Bento Features",
    "Features",
    "Testimonial",
    "Pricing",
    "FAQ",
    "CTA",
    "Footer",
  ];
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
          <Breadcrumb.Page class="font-medium">Saas Template</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  </div>
  <div>
    <h1 class="text-2xl font-bold mt-4 md:text-3xl capitalize mb-2">
      SAAS Template
    </h1>
    <p class="text-muted-foreground text-md md:text-lg">
      The Ultimate Landing Page for your Startup.
    </p>
    <!-- img -->
    <div class="mt-4 w-full md:max-w-4xl h-fit md:h-fit">
      <img
        src="https://i.pinimg.com/736x/62/fa/d5/62fad554fe84eda255effbf30ea44e4c.jpg"
        alt="og_img"
        class="h-fit object-cover object-top rounded-xl border border-zinc-300/20 shadow-lg dark:shadow-zinc-950"
      />
    </div>
    <div class="my-6 w-full md:w-3/5 flex justify-center items-center gap-3">
      <!-- <Button href="https://dub.sh/buy-startup" target="_blank" class="w-full"
        >Get It Now
      </Button> -->
      <RainbowButton
        href="https://dub.sh/buy-startup"
        target="_blank"
        class="w-full"
        >Get Access
      </RainbowButton>
      <Button
        href="https://sv-landing-pg.vercel.app"
        target="_blank"
        variant="outline"
        class="w-full"
        >Preview
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

    <Separator class='max-w-4xl' />
    <div class="max-w-4xl my-6 space-y-3">
      <SubHeading title="What is this?">
        <p class="text-lg text-muted-foreground">
          This is a landing page template for a SaaS product. The template is
          built with Svelte 5, TailwindCSS V4, and Shadcn Svelte.
        </p>
      </SubHeading>
      <SubHeading title="Who is this for?">
        <p class="text-lg text-muted-foreground">
          This template is perfect for startups, small businesses, and
          entrepreneurs looking to create a professional landing page for their
          SaaS product.
        </p>
      </SubHeading>
      <SubHeading title="What's included?">
        <p class="text-lg text-muted-foreground">
          This template is specifically designed for landing pages, packed with
          essential features and components to streamline your development
          process. It helps you create stunning, high-converting landing page in
          a fraction of the time, allowing you to focus on what matters most -
          your product.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-2xl font-semibold text-primary mt-4">Features</h3>
            <div
              class="list-disc list-inside text-md text-muted-foreground mt-4 space-y-1 flex flex-col"
            >
              {#each features as feature}
                <span class="flex text-primary font-semibold items-start"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 mt-1.5 text-green-500 mr-2"
                    ><polyline points="20 6 9 17 4 12"></polyline></svg
                  >{feature}</span
                >
              {/each}
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-primary mt-4">Page Sections</h3>
            <div
              class="list-disc list-inside text-md text-muted-foreground mt-4 space-y-1 flex flex-col"
            >
              {#each page_sectios as feature}
                <span class="flex text-primary items-start font-semibold"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 mt-1.5 text-green-500 mr-2"
                    ><polyline points="20 6 9 17 4 12"></polyline></svg
                  >{feature}</span
                >
              {/each}
            </div>
          </div>

        </div>
      </SubHeading>
      <SubHeading title="How to use?">
        <p class="text-lg text-muted-foreground">
          To get started, simply click the "Get Access" button above to purchase
          the template. Once you've purchased the template, you'll receive an
          email with a link to the Github repository. You can then clone the
          repository and start customizing the template to fit your needs.
        </p>
      </SubHeading>
      <SubHeading title="Tech Stack">
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >Sveltekit <span class="text-muted-foreground ml-2">v2</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >TailwindCSS <span class="text-muted-foreground ml-2">v4</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >Shadcn Svelte
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-green-500"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >Svelte Animations
            </div>
          </div>
        </div>
      </SubHeading>
    </div>
  </div>
</div>
