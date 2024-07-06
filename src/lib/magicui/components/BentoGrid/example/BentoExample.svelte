<script>
  import { Calendar, TextSearch, ReceiptText, CodeXml } from "lucide-svelte";
  import BentoMarquee from "./BentoMarquee.svelte";
  import BentoCommand from "./BentoCommand.svelte";
  import BentoResizable from "./BentoResizable.svelte";
  import BentoCalendar from "./BentoCalendar.svelte";
  import BentoGrid from "../BentoGrid.svelte";
  import BentoCard from "../BentoCard.svelte";
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
      background: BentoResizable,
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

<div class="flex justify-center items-center">
  <BentoGrid>
    {#each features as item}
      <BentoCard {...item} />
    {/each}
  </BentoGrid>
</div>
