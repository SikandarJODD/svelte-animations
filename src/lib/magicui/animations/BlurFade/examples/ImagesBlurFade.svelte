<script>
    import BlurFade from "../BlurFade.svelte";
  
    let images = Array.from({ length: 9 }, (_, i) => {
      let isLandscape = i % 2 === 0;
      const width = isLandscape ? 800 : 600;
      const height = isLandscape ? 600 : 800;
      return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
    });
  </script>
  
  <div>
    <section id="photos">
      <div class="columns-2 gap-4 sm:columns-3 md:w-[80%] mx-auto">
        {#each images as imageUrl, idx}
          <BlurFade id={idx.toString()} delay={0.25 + idx * 0.05} once={true}>
            <img
              class="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        {/each}
      </div>
    </section>
  </div>
  