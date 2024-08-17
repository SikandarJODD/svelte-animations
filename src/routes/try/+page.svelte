<script>
  import MagicCard from "$lib/magicui/SpecialEffects/MagicCard/MagicCard.svelte";
  import SvelteSvg from "$lib/svg/web/svelte.svg";
  import SupabaseSvg from "$lib/svg/web/supabase.svg";
  import ShineBorder from "$lib/magicui/SpecialEffects/ShineBorder/ShineBorder.svelte";
</script>

<!-- 
<div
  class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
>
  <span
    class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
  >
    Particles
  </span>
  <Particles className="absolute inset-0" refresh={true} />
</div> -->
<div
  class={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row px-32 mt-32"}
>
  <MagicCard
    class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group"
    gradientColor="#043634"
    gradientSize={300}
  >
    <div
      class="group-hover:text-[#2EFFBD] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
    >
      <img src={SupabaseSvg} alt="svelte_logo" class="size-10 mt-1.5" />
      Supabase
    </div>
  </MagicCard>
  <MagicCard
    class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group"
    gradientColor="#4D2506"
  >
    <div
      class="group-hover:text-[#FF7700] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
    >
      <img src={SvelteSvg} alt="svelte_logo" class="size-10 mt-1.5" />
      Svelte
    </div>
  </MagicCard>
</div>
<div class="flex justify-center items-center w-full min-h-52">
  <ShineBorder class="text-center text-2xl font-bold capitalize" color="white">
    Shine
  </ShineBorder>
</div>
