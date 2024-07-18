<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import CardBodyImg from "./cardbody/CardBodyImg.svelte";
</script>

<div
  class="rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2.5 border pb-3"
>
  <div class="relative w-full h-[266px]">
    <img
      src="https://i.pinimg.com/564x/4c/91/3c/4c913ce774559e1eaad5c302b74a1d2e.jpg"
      placeholder="blur"
      alt="don corleone"
      class="rounded-xl shadow-[0px_0px_10px_#A1A1AA] dark:shadow-[0px_0px_12px_rgb(39,39,42,0.7)] object-cover w-full h-full"
    />
  </div>

  <CardBodyImg class="text-gray-800 dark:text-gray-200 mb-2 relative" />
  <div class="px-2">
    <Button variant='shine' class="w-full rounded-lg" href="/">Svelte Components</Button>
  </div>
</div>
