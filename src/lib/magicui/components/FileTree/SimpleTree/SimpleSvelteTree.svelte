<script>
  import Folder from "./Folder.svelte";

  let root = [
    {
      type: "folder",
      name: "lib",
      files: [{ type: "file", name: "index.ts" }],
      expanded: true,
    },
    {
      type: "folder",
      name: "routes",
      files: [
        {
          type: "folder",
          name: "magic",
          files: [
            { type: "file", name: "page.svelte" },
            { type: "file", name: "code.png" },
          ],
        },
        {
          type: "folder",
          name: "luxe",
          files: [
            { type: "file", name: "page.svelte" },
            { type: "file", name: "layout.svelte" },
          ],
        },
        { type: "file", name: "page.svelte" },
        { type: "file", name: "layout.svelte" },
        { type: "file", name: "page.server.ts" },
      ],
    },
  ];
</script>

<div class="min-h-64 min-w-80 p-6 rounded-xl border bg-black shadow-md">
  <Folder name="src" files={root} expanded />
</div>
