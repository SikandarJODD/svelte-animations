<script lang="ts">
  import { onMount } from "svelte";
  import * as Command from "$lib/components/ui/command/index.js";
  import {
    CommandIcon,
    Palette,
    SearchIcon,
    WandSparkles,
  } from "lucide-svelte";
  import { allLuxeComponents } from "$lib/luxe/components/AllLuxeComponents";
  import { allMagicComponents } from "$lib/magicui/AllMagicComponents";
  import Badge from "$lib/components/ui/badge/badge.svelte";

  let open = false;

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      console.log(e.key, "Pressed");
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open = !open;
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<button
  on:click={() => (open = !open)}
  class="w-full bg-background-muted flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-sm border-border duration-300 hover:bg-neutral-900"
>
  <span class="flex items-center gap-2 text-neutral-500">
    <SearchIcon size={14} />
    Search...
  </span>
  <span
    class="border border-border px-1.5 rounded-[6px] text-[10px] flex items-center gap-0.5"
  >
    <CommandIcon size={10} />K
  </span>
</button>
<Command.Dialog bind:open>
  <Command.Input placeholder="Type a Magic UI, Luxe Component..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Magic UI Components" class="text-neutral-400">
      {#each allMagicComponents as item}
        <a
          href="/magic/{item.id}"
          on:click={() => {
            open = !open;
          }}
        >
          <Command.Item>
            <WandSparkles strokeWidth={1.4} class="mr-2 w-2.5 h-2.5" />
            <span>{item.name}</span>
            <Command.Shortcut class="font-bold tracking-normal">
              {#if item?.tags}
                <div class="flex gap-1">
                  {#each item?.tags as tag}
                    <Badge variant="outline"  class="border-neutral-500/60">{tag}</Badge>
                  {/each}
                </div>
              {/if}
            </Command.Shortcut>
          </Command.Item>
        </a>
      {/each}
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Luxe Components" class="text-neutral-400">
      {#each allLuxeComponents as item}
        <a
          href="/luxe/{item.id}"
          on:click={() => {
            open = !open;
          }}
        >
          <Command.Item>
            <Palette strokeWidth={1.4} class="mr-2 h-4 w-4" />
            <span>{item.name}</span>
            <Command.Shortcut class="font-bold tracking-normal">
              {#if item?.tags}
                {#each item?.tags as tag}
                  <Badge variant="outline" class="border-neutral-500/60"
                    >{tag}</Badge
                  >
                {/each}
              {/if}
            </Command.Shortcut>
          </Command.Item>
        </a>
      {/each}
    </Command.Group>
  </Command.List>
</Command.Dialog>
