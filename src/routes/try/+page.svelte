<script>
  import Compare from "$lib/aceternity-ui/components/Compare/Compare.svelte";
  import FeatureSelectionDemo from "$lib/aceternity-ui/components/feature-sections/simple-card/FeatureSelectionDemo.svelte";
  import HoverFeatureCard from "$lib/aceternity-ui/components/feature-sections/simple-hover-card/HoverFeatureCard.svelte";
  import SvgMaskEffect from "$lib/aceternity-ui/components/SvgMaskEffect/SvgMaskEffect.svelte";
</script>

<div class="h-[40rem] w-full flex items-center justify-center overflow-hidden">
  <SvgMaskEffect class="h-[40rem] w-[80rem] border rounded-md">
    <p
      slot="reveal"
      class="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold"
    >
      React is <span class='text-red-600'> Hard </span> & Everyone Uses it. 
    </p>
    <div slot="def" class='px-36'>
      Svelte is <span class='text-sky-500' >Easy</span> & Everyone <span class="text-emerald-400">Loves</span> it.
    </div>
  </SvgMaskEffect>
</div>

<div
  class="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4"
>
  <Compare
    firstImage="https://assets.aceternity.com/code-problem.png"
    secondImage="https://assets.aceternity.com/code-solution.png"
    firstImageclass="object-cover object-left-top"
    secondImageclass="object-cover object-left-top"
    class="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
    slideMode="hover"
  />
</div>
