import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      round:
        "bg-primary/90 text-primary-foreground hover:bg-primary rounded-full",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary/80 text-secondary-foreground hover:bg-secondary/70",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      shine:
        "inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-400 transition-colors",
      success:
        "rounded-xl text-sm font-medium bg-emerald-950 text-emerald-500 border border-emerald-900",
      animated:
        "group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200",
      danger:
        "rounded-xl text-sm font-medium bg-red-950 text-red-500 border border-red-900",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9  px-3",
      lg: "h-11 rounded-md px-8",
      icon: "size-8 md:size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
  variant?: Variant;
  size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
  Root,
  type Props,
  type Events,
  //
  Root as Button,
  type Props as ButtonProps,
  type Events as ButtonEvents,
  buttonVariants,
};
