<script>
  import Timeline from "../Timeline.svelte";
  import Content1 from "./Content1.svelte";
  import Content2 from "./Content2.svelte";
  import Content3 from "./Content3.svelte";

  let timelineData = [
    {
      title: "Svelte 5",
      content: Content1,
    },
    {
      title: "Early 2023",
      content: Content2,
    },
    {
      title: "Changelog",
      content: Content3,
    },
  ];
</script>

<Timeline {timelineData} />
