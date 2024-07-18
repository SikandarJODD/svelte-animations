<script>
  import CardBodyImg from "./cardbody/CardBodyImg.svelte";
</script>

<div class="rounded-2xl relative aspect-[4/3] overflow-hidden group">
  <img
    src="https://i.pinimg.com/564x/78/43/6d/78436dfe6edfea96f451285557605d9f.jpg"
    placeholder="blur"
    alt="don corleone"
    class="w-full object-cover m-0"
  />
  <div
    class="absolute inset-0 from-black/95 via-black/20 to-black/10 bg-gradient-to-t"
  ></div>

  <slot>
    <CardBodyImg
      class="sm:pb-2 px-4 pb-2 bg-gray-600/25 rounded-2xl backdrop-blur-lg  absolute mx-2  inset-x-0 bottom-2 flex flex-col justify-end"
    />
  </slot>
</div>
