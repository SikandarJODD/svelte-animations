<script>
  import Svelte4Syntax from "$lib/svg/svelte4Syntax.png";
  import Svelte5Syntax from "$lib/svg/svelte5syntax.png";
  import Compare from "./Compare.svelte";
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
