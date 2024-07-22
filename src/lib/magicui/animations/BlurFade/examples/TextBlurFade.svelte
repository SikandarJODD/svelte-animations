<script>
  import BlurFade from "../BlurFade.svelte";
</script>

<section id="header">
  <BlurFade delay={0.25}>
    <h2
      class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
    >
      Hello World 👋
    </h2>
  </BlurFade>
  <BlurFade delay={0.25 * 2}>
    <span
      class="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none"
    >
      Nice to meet you
    </span>
  </BlurFade>
</section>
