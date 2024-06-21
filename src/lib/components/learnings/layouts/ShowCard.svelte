<script lang="ts">
  // This contains Title, Visit button and Image
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  export let item = {
    name: "Create project",
    link: "/",
    image: "mint",
    desc: "",
  };
</script>

<a href={item.link}>
  <Card.Root class="w-[350px]">
    <Card.Content class="pt-6 pb-0">
      <div>
        <img src={item.image} alt={item.name} class="rounded-xl" />
      </div>
    </Card.Content>
    <Card.Header class="pt-4 px-7 flex justify-between flex-row items-center">
      <div>
        <Card.Title>{item.name}</Card.Title>
        <Card.Description class='mt-px'>{item.desc}</Card.Description>
      </div>
      <div>
        <Button size="sm" href={item.link} variant="outline">Visit</Button>
      </div>
    </Card.Header>
  </Card.Root>
</a>
