// Animated Tabs
import AnimatedTabs from "../animatedTabs/AnimatedTabs.svelte";
import AnimatedTabsCode from "../animatedTabs/AnimatedTabs.svelte?raw";

// Badge Animated Border
import BadgeAnimatedBorder from "../badge/BadgeAnimatedBorder.svelte";
import BadgeAnimatedBorderCode from "../badge/BadgeAnimatedBorder.svelte?raw";

// Badge Background Shine
import BadgeBackgroundShine from "../badge/BadgeBackgroundShine.svelte";
import BadgeBackgroundShineCode from "../badge/BadgeBackgroundShine.svelte?raw";

// Badge Rotate Border
import BadgeRotateBorder from "../badge/BadgeRotateBorder.svelte";
import BadgeRotateBorderCode from "../badge/BadgeRotateBorder.svelte?raw";

// Button Animated Border
import ButtonAnimatedBorder from "../buttons/ButtonAnimatedBorder.svelte";
import ButtonAnimatedBorderCode from "../buttons/ButtonAnimatedBorder.svelte?raw";

// Button Background Shine
import ButtonBackgroundShine from "../buttons/ButtonBackgroundShine.svelte";
import ButtonBackgroundShineCode from "../buttons/ButtonBackgroundShine.svelte?raw";

// Button Destructive
import ButtonDestructive from "../buttons/ButtonDestructive.svelte";
import ButtonDestructiveCode from "../buttons/ButtonDestructive.svelte?raw";

// Button Loading
import ButtonLoading from "../buttons/ButtonLoading.svelte";
import ButtonLoadingCode from "../buttons/ButtonLoading.svelte?raw";

// Button Rotate Border
import ButtonRotateBorder from "../buttons/ButtonRotateBorder.svelte";
import ButtonRotateBorderCode from "../buttons/ButtonRotateBorder.svelte?raw";

// Button Success
import ButtonSuccess from "../buttons/ButtonSuccess.svelte";
import ButtonSuccessCode from "../buttons/ButtonSuccess.svelte?raw";

// Card Animated Border
import CardAnimatedBorder from "../cards/CardAnimatedBorder.svelte";
import CardAnimatedBorderCode from "../cards/CardAnimatedBorder.svelte?raw";

// Card Background Shine
import CardBackgroundShine from "../cards/CardBackgroundShine.svelte";
import CardBackgroundShineCode from "../cards/CardBackgroundShine.svelte?raw";

// Card Comment
import CardComment from "../cards/CardComment.svelte";
import CardCommentCode from "../cards/CardComment.svelte?raw";

// Card Hover Effect
import CardHoverEffect from "../cards/CardHoverEffect.svelte";
import CardHoverEffectCode from "../cards/CardHoverEffect.svelte?raw";

// Card Product
import CardProduct from "../cards/CardProduct.svelte";
import CardProductCode from "../cards/CardProduct.svelte?raw";

// Card Revealed Pointer
import CardRevealedPointer from "../cards/CardRevealedPointer.svelte";
import CardRevealedPointerCode from "../cards/CardRevealedPointer.svelte?raw";

// Text Animated Decoration
import TextAnimatedDecoration from "../text/TextAnimatedDecoration.svelte";
import TextAnimatedDecorationCode from "../text/TextAnimatedDecoration.svelte?raw";

// Animated Text Gradient
import TextAnimatedGradient from "../text/TextAnimatedGradient.svelte";
import TextAnimatedGradientCode from "../text/TextAnimatedGradient.svelte?raw";

// Text Glitch
import TextGlitch from "../text/TextGlitch.svelte";
import TextGlitchCode from "../text/TextGlitch.svelte?raw";

// Text Gradient
import TextGradient from "../text/TextGradient.svelte";
import TextGradientCode from "../text/TextGradient.svelte?raw";

// Text Shake
import TextShake from "../text/TextShake.svelte";
import TextShakeCode from "../text/TextShake.svelte?raw";

// Text Shine
import TextShine from "../text/TextShine.svelte";
import TextShineCode from "../text/TextShine.svelte?raw";

// Dock Menu
import DockMenu from "../dock/DockMenu.svelte";
import DockMenuCode from "../dock/DockMenu.svelte?raw"
import DockMenuItemCode from "../dock/DockItem.svelte?raw"

type LuxeComponent = {
  id: string;
  name: string;
  description: string;
  component: any;
  link: any | string;
  code: string | Code[];
}
type Code = {
  filename: string;
  code: string
}


export let allLuxeComponents: LuxeComponent[] = [
  {
    id: 'dock-menu',
    name: 'Dock Menu',
    description: 'An animated border badge',
    component: DockMenu,
    link: "/luxe/dock-menu",
    code: [
      {
        filename: 'DockMenu.svelte',
        code: DockMenuCode
      },
      {
        filename:'DockItem.svelte',
        code:DockMenuItemCode
      }
    ]
  },
  {
    id: 'badge-animated-border',
    name: 'Badge Animated Border',
    description: 'An animated border badge',
    component: BadgeAnimatedBorder,
    link: "/luxe/badge-animated-border",
    code: BadgeAnimatedBorderCode,
  },
  {
    id: 'badge-background-shine',
    name: 'Badge Background Shine',
    description: 'A badge with a background shine effect',
    component: BadgeBackgroundShine,
    link: "/luxe/badge-background-shine",
    code: BadgeBackgroundShineCode
  },
  {
    id: 'badge-rotate-shine',
    name: 'Badge Rotate Shine',
    description: 'A badge with a rotate shine effect',
    component: BadgeRotateBorder,
    link: "/luxe/badge-rotate-shine",
    code: BadgeRotateBorderCode
  },
  {
    id: 'button-animated-border',
    name: 'Button Animated Border',
    description: 'An animated border button',
    component: ButtonAnimatedBorder,
    link: "/luxe/button-animated-border",
    code: ButtonAnimatedBorderCode
  },
  {
    id: 'button-background-shine',
    name: 'Button Background Shine',
    description: 'A button with a background shine effect',
    component: ButtonBackgroundShine,
    link: "/luxe/button-background-shine",
    code: ButtonBackgroundShineCode
  },
  {
    id: 'button-destructive',
    name: 'Button Destructive',
    description: 'A button with a destructive style',
    component: ButtonDestructive,
    link: "/luxe/button-destructive",
    code: ButtonDestructiveCode
  },
  {
    id: 'button-loading',
    name: 'Button Loading',
    description: 'A button with a loading state',
    component: ButtonLoading,
    link: "/luxe/button-loading",
    code: ButtonLoadingCode
  },
  {
    id: 'button-rotate-border',
    name: 'Button Rotate Border',
    description: 'A button with a rotating border',
    component: ButtonRotateBorder,
    link: "/luxe/button-rotate-border",
    code: ButtonRotateBorderCode
  },
  {
    id: 'button-success',
    name: 'Button Success',
    description: 'A button with a success style',
    component: ButtonSuccess,
    link: "/luxe/button-success",
    code: ButtonSuccessCode
  },
  {
    id: 'card-animated-border',
    name: 'Card Animated Border',
    description: 'An animated border card',
    component: CardAnimatedBorder,
    link: "/luxe/card-animated-border",
    code: CardAnimatedBorderCode
  },
  {
    id: 'card-background-shine',
    name: 'Card Background Shine',
    description: 'A card with a background shine effect',
    component: CardBackgroundShine,
    link: "/luxe/card-background-shine",
    code: CardBackgroundShineCode
  },
  {
    id: 'card-comment',
    name: 'Card Comment',
    description: 'A card for comments',
    component: CardComment,
    link: '/luxe/card-comment',
    code: CardCommentCode
  },
  {
    id: 'card-hover-effect',
    name: 'Card Hover Effect',
    description: 'A card with hover effect',
    component: CardHoverEffect,
    link: '/luxe/card-hover-effect',
    code: CardHoverEffectCode
  },
  {
    id: 'card-product',
    name: 'Card Product',
    description: 'A card product',
    component: CardProduct,
    link: '/luxe/card-product',
    code: CardProductCode
  },
  {
    id: 'card-revealed-pointer',
    name: 'Card Revealed Pointer',
    description: 'A card with a revealed pointer',
    component: CardRevealedPointer,
    link: '/luxe/card-revealed-pointer',
    code: CardRevealedPointerCode
  },
  {
    id: 'text-animated-decoration',
    name: 'Text Animated Decoration',
    description: 'Text with animated decoration',
    component: TextAnimatedDecoration,
    link: '/luxe/text-animated-decoration',
    code: TextAnimatedDecorationCode
  },
  {
    id: 'text-animated-gradient',
    name: 'Text Animated Gradient',
    description: 'Text with animated decoration',
    component: TextAnimatedGradient,
    link: '/luxe/text-animated-gradient',
    code: TextAnimatedGradientCode
  },
  {
    id: 'text-glitch',
    name: 'Text Glitch',
    description: 'Text with glitch effect',
    link: '/luxe/text-glitch',
    component: TextGlitch,
    code: TextGlitchCode
  },
  {
    id: 'text-gradient',
    name: 'Text Gradient',
    description: 'Text with gradient',
    link: '/luxe/text-gradient',
    component: TextGradient,
    code: TextGradientCode
  },
  {
    id: 'text-shake',
    name: 'Text Shake',
    description: 'Text Shake',
    link: '/luxe/text-shake',
    component: TextShake,
    code: TextShakeCode
  },
  {
    id: 'text-shine',
    name: 'Text Shine',
    description: 'Text with shine effect',
    link: '/luxe/text-shine',
    component: TextShine,
    code: TextShineCode
  },
  {
    id: 'animated-tabs',
    name: 'Animated Tabs',
    component: AnimatedTabs,
    description: 'Animated Tabs from Luxe Components',
    link: '/luxe/animated-tabs',
    code: AnimatedTabsCode
  }
]