<script lang="ts">
  import { Home, Pencil } from "lucide-svelte";
  import Dock from "../Dock.svelte";
  import DockIcon from "../DockIcon.svelte";
  let navs = [
    { label: "Home", icon: Home },
    {
      label: "Blog",
      icon: Pencil,
    },
  ];
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<Dock direction="middle"  let:mouseX let:distance let:magnification>
  {#each navs as item}
    <DockIcon {mouseX} {magnification} {distance}>
      <Tooltip.Root openDelay={100}>
        <Tooltip.Trigger
          class="hover:bg-zinc-900/80 transition-all duration-200 rounded-full p-3"
        >
          <svelte:component this={item.icon} size={20} strokeWidth={1.2} />
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={8}>
          <p>{item.label}</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </DockIcon>
  {/each}
</Dock>
