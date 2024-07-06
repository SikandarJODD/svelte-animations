<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Calendar, TextSearch, ReceiptText, CodeXml } from "lucide-svelte";

  // Minor Components Code
  import BentoExampleCode from "$lib/magicui/components/BentoGrid/example/BentoExample.svelte?raw";
  import BentoMarqueeCode from "./BentoMarquee.svelte?raw";
  import BentoCalendarCode from "./BentoCalendar.svelte?raw";
  import BentoComposableCode from "./BentoResizable.svelte?raw"; // BentoResizable.svelte
  import BentoCommandCode from "./BentoCommand.svelte?raw";

  //  Minor Components
  import BentoCalendar from "./BentoCalendar.svelte";
  import BentoComposable from "./BentoResizable.svelte";
  import BentoMarquee from "./BentoMarquee.svelte";
  import BentoCommand from "./BentoCommand.svelte";

  // Main Components
  import BentoCard from "./BentoCard.svelte";
  import BentoGrid from "./BentoGrid.svelte";

  // Main Components Code
  import BentoCardCode from "./BentoCard.svelte?raw";
  import BentoGridCode from "./BentoGrid.svelte?raw";

  //  2 Images
  import BentoCodeImg from "$lib/svg/BentoCode.png";
  import BentoGridImg from "$lib/svg/BentoPage.png";

  //  Codeblock
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

  let allCodes = [
    {
      code: BentoCardCode,
      fileName: "BentoCard.svelte",
    },
    {
      code: BentoExampleCode,
      fileName: "BentoCodeExample.svelte",
    },
    {
      code: BentoMarqueeCode,
      fileName: "BentoMarquee.svelte",
    },
    {
      code: BentoComposableCode,
      fileName: "BentoResizable.svelte",
    },
    {
      code: BentoCommandCode,
      fileName: "BentoCommand.svelte",
    },
    {
      code: BentoGridCode,
      fileName: "BentoGrid.svelte",
    },
    {
      code: BentoCalendarCode,
      fileName: "BentoCalendar.svelte",
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
<div class="flex justify-center items-center px-3 md:px-64 mt-4 md:h-screen">
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
<div
  class="w-full my-10 flex justify-center items-center gap-3 md:gap-10 flex-wrap"
>
  <img class="w-2/5 rounded-3xl" src={BentoGridImg} alt="bento-grid" />
  <img class="w-2/5 rounded-3xl" src={BentoCodeImg} alt="bento-codeimage" />
</div>
<div
  class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3 mb-10 md:mx-32 place-items-start place-content-center *:w-full"
>
  {#each allCodes as { code, fileName }}
    <CodeBlock {code} {fileName} />
  {/each}
</div>
<div class="flex justify-center items-center mb-10">
  Visit the <a
    class="px-1 underline underline-offset-2"
    href="https://github.com/SikandarJODD/svelte-animations/blob/master/src/routes/bento-grid/%2Bpage.svelte"
  >
    Github Bento Page</a
  > for detailed code.
</div>
