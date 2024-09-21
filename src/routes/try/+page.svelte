<script>
  import FeatureDemoCard from "$lib/aceternity-ui/components/cards/feature-block-animated/FeatureDemoCard.svelte";
  import Compare from "$lib/aceternity-ui/components/Compare/Compare.svelte";
  import FeatureSelectionDemo from "$lib/aceternity-ui/components/feature-sections/simple-card/FeatureSelectionDemo.svelte";
  import HoverFeatureCard from "$lib/aceternity-ui/components/feature-sections/simple-hover-card/HoverFeatureCard.svelte";
  import FloatingDockMobile from "$lib/aceternity-ui/components/FloatingDock/FloatingDockMobile.svelte";
  import SvgMaskEffect from "$lib/aceternity-ui/components/SvgMaskEffect/SvgMaskEffect.svelte";
  import TextHoverPreview from "$lib/aceternity-ui/components/text-hover-effect/TextHoverPreview.svelte";
  import {
    Icon12Hours,
    IconBrandGithub,
    IconBrandXing,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
  } from "@tabler/icons-svelte";

  let links = [
    {
      title: "Home",
      icon: IconHome,
      href: "#",
    },

    {
      title: "Products",
      icon: IconTerminal2,
      href: "#",
    },
    {
      title: "Components",
      icon: IconNewSection,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: Icon12Hours,
      href: "#",
    },
    {
      title: "Changelog",
      icon: IconExchange,
      href: "#",
    },

    {
      title: "Twitter",
      icon: IconBrandXing,
      href: "#",
    },
    {
      title: "GitHub",
      icon: IconBrandGithub,
      href: "#",
    },
  ];
  import Svelte4Syntax from "$lib/svg/svelte4Syntax.png";
  import Svelte5Syntax from "$lib/svg/svelte5syntax.png";
</script>

<div
  class="p-4 mx-auto border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4"
>
  <Compare
    firstImage={Svelte4Syntax}
    secondImage={Svelte5Syntax}
    firstImageClass="object-contain object-center"
    secondImageClass="object-contain object-center"
    class="h-[250px] w-[200px] md:h-[350px] md:w-[580px]"
    slideMode="hover"
  />
</div>
