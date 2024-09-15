<script>
  import SimpleGrid from "./SimpleGrid.svelte"; // Scroll down to see the SimpleGrid component

  const grid = [
    {
      title: "HIPAA and SOC2 Compliant",
      description:
        "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
    },
    {
      title: "Automated Social Media Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    },
    {
      title: "Content Calendar",
      description:
        "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
    },
    {
      title: "Audience Targeting",
      description:
        "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
    },
    {
      title: "Social Listening",
      description:
        "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
    {
      title: "Customizable Templates",
      description:
        "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
    },
    {
      title: "Collaboration Tools",
      description:
        "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
    },
  ];
</script>

<div class="py-16">
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto"
  >
    {#each grid as feature}
      <div
        class="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
      >
        <SimpleGrid size={20} />
        <p
          class="text-base font-bold text-neutral-800 dark:text-white relative z-20"
        >
          {feature.title}
        </p>
        <p
          class="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20"
        >
          {feature.description}
        </p>
      </div>
    {/each}
  </div>
</div>
