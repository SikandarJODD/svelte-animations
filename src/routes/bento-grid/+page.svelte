<script>
  import BentoGrid from "./BentoGrid.svelte";
  import BentoCard from "./BentoCard.svelte";
  import { Calendar, TextSearch, ReceiptText, CodeXml } from "lucide-svelte";
  import BentoMarquee from "./BentoMarquee.svelte";
  import BentoCommand from "./BentoCommand.svelte";
  import BentoComposable from "./BentoResizable.svelte";
  import BentoCalendar from "./BentoCalendar.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import BentoCodeImg from "$lib/svg/BentoCode.png";
  import BentoGridImg from "$lib/svg/BentoPage.png";
  import BentoExampleCode from "$lib/magicui/components/BentoGrid/example/BentoExample.svelte?raw";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
  const features = [
    {
      Icon: TextSearch,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: BentoMarquee,
      class: "col-span-3 lg:col-span-1",
    },
    {
      Icon: ReceiptText,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: BentoCommand,
      class: "col-span-3 lg:col-span-2",
    },
    {
      Icon: CodeXml,
      name: "Code Editor",
      description: "Coding is fun with Editors",
      href: "/",
      cta: "Edit More",
      background: BentoComposable,
      class: "col-span-3 lg:col-span-2",
    },
    {
      Icon: Calendar,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: BentoCalendar,
      class: "col-span-3 lg:col-span-1",
    },
  ];
</script>

<Button
  href="/magic/bento-grid"
  class="absolute top-6 left-5"
  variant="secondary"
  size="sm"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-arrow-left mr-1"
    ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
  >
  Back</Button
>
<div class="flex justify-center items-center px-64 h-screen">
  <BentoGrid>
    {#each features as item}
      <BentoCard {...item} />
    {/each}
  </BentoGrid>
</div>
<div class="flex justify-center items-center my-10">
  Visit the <a
    class="px-1 underline underline-offset-2"
    href="https://github.com/SikandarJODD/svelte-animations/blob/master/src/routes/bento-grid/%2Bpage.svelte"
  >
    Github Bento Page</a
  > for detailed code.
</div>
<div class="w-full my-10 flex justify-center items-center gap-10">
  <img class="w-2/5 rounded-3xl" src={BentoGridImg} alt="bento-grid" />
  <img class="w-2/5 rounded-3xl" src={BentoCodeImg} alt="bento-codeimage" />
</div>
<div class="flex justify-center items-center mb-10">
  <CodeBlock code={BentoExampleCode} fileName="BentoCodeExample.svelte" />
</div>
<div class="flex justify-center items-center mb-10">
  Visit the <a
    class="px-1 underline underline-offset-2"
    href="https://github.com/SikandarJODD/svelte-animations/blob/master/src/routes/bento-grid/%2Bpage.svelte"
  >
    Github Bento Page</a
  > for detailed code.
</div>
