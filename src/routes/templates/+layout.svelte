<script lang="ts">
  import MagicSidebar from "$lib/magicui/components/MagicSidebar/MagicSidebar.svelte";

  type compNavs = {
    id: number;
    heading: string;
    sub: { name: string; link: string; isNew?: boolean }[];
  };
  let componentsNav: compNavs[] = [
    {
      id: 1,
      heading: "Templates",
      sub: [
        {
          name: "Developer Portfolio",
          link: "/templates/developer-portfolio",
        },
        {
          name: "Startup Template",
          link: "/templates/startup-template",
        },
      ],
    },
  ];
</script>

<MagicSidebar {componentsNav}>
  <slot></slot>
</MagicSidebar>
