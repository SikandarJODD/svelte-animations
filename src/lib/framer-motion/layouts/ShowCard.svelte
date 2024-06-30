<script lang="ts">
  // This contains Title, Visit button and Image
  import * as Card from "$lib/components/ui/card/index.js";
  export let item = {
    name: "Create project",
    link: "/",
    image: "mint",
    desc: "",
  };
</script>

<a href={item.link}>
  <Card.Root class="w-[350px] md:rounded-3xl transition-all duration-200 hover:border-gray-400/70 dark:bg-[#020817]">
    <Card.Content class="pt-6 pb-0">
      <div class='bg-[#122330] dark:bg-[#091926] rounded-xl '>
        <img src={item.image} alt={item.name} class="rounded-xl" />
      </div>
    </Card.Content>
    <Card.Header class="pt-4 px-7 ">
        <Card.Title>{item.name}</Card.Title>
        <Card.Description class=""
          >{item.desc.length > 40
            ? `${item.desc.slice(0, 40)}...`
            : item.desc}</Card.Description
        >
      
    </Card.Header>
  </Card.Root>
</a>
