<script>
  import Separator from "./Separator.svelte";
</script>

<div
  class="flex justify-center items-center w-full min-h-64 px-20 flex-col gap-10 my-6"
>
  <Separator gradient={true} />
  <Separator />
  <Separator gradient={true}>
    <div slot="label" class="px-2">Section</div>
  </Separator>
  <Separator>
    <div slot="label" class="px-2">Section</div>
  </Separator>
  <Separator>
    <div slot="label" class="border px-4 py-1 rounded-full">Section</div>
  </Separator>
  <Separator>
    <div slot="label" class="border px-4 py-1 rounded-full border-dashed">
      Section
    </div>
  </Separator>
  <Separator gradient={true}>
    <div slot="label" class="border px-2 py-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-plus"
        ><path d="M5 12h14" /><path d="M12 5v14" /></svg
      >
    </div>
  </Separator>
</div>
