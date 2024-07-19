<script>
  import CardBodyImg from "./cardbody/CardBodyImg.svelte";
</script>

<div class="rounded-2xl relative aspect-[4/3] overflow-hidden group">
  <img
    src="https://i.pinimg.com/564x/e2/3c/fb/e23cfb960318ded88fde45ad4601c4d8.jpg"
    placeholder="blur"
    alt="don corleone"
    class="w-full object-cover m-0"
  />
  <!--  overlay  -->
  <div
    class="absolute inset-0 from-black/95 via-black/70 to-black/10 bg-gradient-to-t"
  ></div>
  <!-- Add Any Content inside Slot -->
  <slot>
    <CardBodyImg
      class="absolute pb-1 px-4 md:pb-4 inset-x-0 bottom-2 flex flex-col justify-end size-full "
    />
  </slot>
</div>
