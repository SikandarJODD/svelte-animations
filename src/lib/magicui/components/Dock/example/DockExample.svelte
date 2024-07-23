<script>
  import { Home, Pencil } from "lucide-svelte";
  import Dock from "../Dock.svelte";
  import DockIcon from "../DockIcon.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  let navs = [
    {
      label: "Home",
      icon: Home,
    },
    {
      label: "Blog",
      icon: Pencil,
    },
  ];
</script>

<Dock direction="middle" let:mouseX>
  {#each navs as { icon, label }, i}
    <DockIcon {mouseX}>
      <!-- <div class="flex gap-2 items-center">
        <Button variant="outline" size="icon">
          <svelte:component this={icon} size={20} strokeWidth={1.4} />
        </Button>
      </div> -->
      <Tooltip.Root>
        <Tooltip.Trigger>
          <svelte:component this={icon} size={20} strokeWidth={1.4} />
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>{label}</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </DockIcon>
  {/each}
</Dock>
