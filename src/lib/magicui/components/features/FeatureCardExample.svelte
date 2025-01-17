<script>
  import FeatureCard from "$lib/magicui/components/features/FeatureCard.svelte";
  import { Eye, PackageSearch, Settings } from "lucide-svelte";

  // Svelte 5 Code : https://svelte.dev/playground/39866a136f0d4268821e5ae901dce47f?version=5.0.5

  let data = [
    {
      id: 1,
      title: "1. Choose a Component",
      content:
        "Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
      image:
        "https://i.pinimg.com/736x/ca/aa/49/caaa49d386d84f2d037d0abcc919778f.jpg",
      icon: PackageSearch,
    },
    {
      id: 2,
      title: "2. Add Utility Helpers",
      content:
        "Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.",
      image:
        "https://i.pinimg.com/736x/a5/dc/0a/a5dc0af50d185b7f9111949b17e17e1a.jpg",
      icon: Settings,
    },
    {
      id: 3,
      title: "3. Copy and Paste the Code",
      content:
        "Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
      image:
        "https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg",
      icon: Eye,
    },
  ];
</script>

<FeatureCard {data}  />
