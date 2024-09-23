<script>
  import IconAdjustmentsBolt from "$lib/svg/tabler/adjustments-bolt.svg";
  import IconCloud from "$lib/svg/tabler/cloud.svg";
  import IconCurrencyDollar from "$lib/svg/tabler/currency-dollar.svg";
  import IconEaseInOut from "$lib/svg/tabler/ease-in-out.svg";
  import IconHeart from "$lib/svg/tabler/heart.svg";
  import IconHelp from "$lib/svg/tabler/help.svg";
  import IconTerminal2 from "$lib/svg/tabler/terminal.svg";

  import SimpleFeature from "./SimpleFeature.svelte"; // Scroll down to see the SimpleFeature component

  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: IconTerminal2,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: IconEaseInOut,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: IconCurrencyDollar,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: IconCloud,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: IconHelp,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: IconHelp,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: IconAdjustmentsBolt,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: IconHeart,
    },
  ];
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto"
>
  {#each features as feature, index}
    <SimpleFeature {...feature} {index} />
  {/each}
</div>
