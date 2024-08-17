<script>
  import SvelteSvg from "$lib/svg/web/svelte.svg";
  import SupabaseSvg from "$lib/svg/web/supabase.svg";
  import MagicCard from "../MagicCard.svelte";
</script>

<div class="flex w-full flex-col gap-4 h-[250px] lg:flex-row">
  <MagicCard
    class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#2effbd9e] transition-all duration-300"
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
    class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#ff770094] transition-all duration-300"
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
