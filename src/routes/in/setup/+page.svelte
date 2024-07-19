<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import CodeBlock from "$lib/luxe/components/codeblock/CodeBlock.svelte";
</script>

<main class="my-2 xl:my-8 space-y-6 md:space-y-4 mx-2 md:mx-4">
  <section class="flex flex-col gap-6">
    <div class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-bold text-primary">
        Svelte Indie UI
      </h1>
      <p class=" font-normal text-neutral-500">
        Free components, <span class="text-primary">Copy</span>
        and <span class="text-primary">Paste</span> to illuminate your applications
        with elegance.
      </p>
    </div>
  </section>
  <Separator />
  <section class="flex flex-col gap-6 max-w-4xl">
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold text-primary">Quick Setup</h2>
      <p class=" font-normal text-neutral-500 text-lg">
        To use Indie UI, you need to set up Tailwind CSS, clsx, and
        tailwind-merge for your project. Follow the instructions below to
        install these dependencies.
      </p>
    </div>
  </section>
  <section class="flex flex-col gap-6">
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold text-primary">Utility function</h2>
      <p class=" font-normal text-neutral-500 text-lg max-w-4xl">
        To install clsx & Tailwind-Merge, run the following command in your
        project directory
      </p>
      <CodeBlock
        code="npm install clsx tailwind-merge"
        lang="shellscript"
        fileName="Install Dependencies"
      />
      <p class='font-normal text-neutral-500 text-lg max-w-4xl'>
        Create a file <code>lib/utils.ts</code>.This function is designed to
        work with Tailwind CSS and clsx to generate class strings.
      </p>
      <CodeBlock
        code={`import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
        lang="ts"
        fileName="lib/utils.ts"
      />
    </div>
  </section>
</main>
