import CardContent from "$lib/components/ui/card/card-content.svelte";
import BadgeAnimatedBorder from "../badge/BadgeAnimatedBorder.svelte";
import BadgeBackgroundShine from "../badge/BadgeBackgroundShine.svelte";
import BadgeRotateBorder from "../badge/BadgeRotateBorder.svelte";
import ButtonAnimatedBorder from "../buttons/ButtonAnimatedBorder.svelte";
import ButtonBackgroundShine from "../buttons/ButtonBackgroundShine.svelte";
import ButtonDestructive from "../buttons/ButtonDestructive.svelte";
import ButtonLoading from "../buttons/ButtonLoading.svelte";
import ButtonRotateBorder from "../buttons/ButtonRotateBorder.svelte";
import ButtonSuccess from "../buttons/ButtonSuccess.svelte";
import CardAnimatedBorder from "../cards/CardAnimatedBorder.svelte";
import CardBackgroundShine from "../cards/CardBackgroundShine.svelte";
import CardComment from "../cards/CardComment.svelte";
import CardHoverEffect from "../cards/CardHoverEffect.svelte";
import CardProduct from "../cards/CardProduct.svelte";
import CardRevealedPointer from "../cards/CardRevealedPointer.svelte";
import TextAnimatedDecoration from "../text/TextAnimatedDecoration.svelte";
import TextAnimatedGradient from "../text/TextAnimatedGradient.svelte";
import TextGlitch from "../text/TextGlitch.svelte";
import TextGradient from "../text/TextGradient.svelte";
import TextShake from "../text/TextShake.svelte";
import TextShine from "../text/TextShine.svelte";


type LuxeComponent = {
    id: string;
    name: string;
    description: string;
    component: any;
    link: any | string;
    code: string;
}
export let allLuxeComponents: LuxeComponent[] = [
    {
        id: 'badge-animated-border',
        name: 'Badge Animated Border',
        description: 'An animated border badge',
        component: BadgeAnimatedBorder,
        link: "/luxe/badge-animated-border",
        code: ``
    },
    {
        id: 'badge-background-shine',
        name: 'Badge background shine',
        description: 'A badge with a background shine effect',
        component: BadgeBackgroundShine,
        link: "/luxe/badge-background-shine",
        code: ``
    },
    {
        id: 'badge-rotate-shine',
        name: 'Badge rotate shine',
        description: 'A badge with a rotate shine effect',
        component: BadgeRotateBorder,
        link: "/luxe/badge-rotate-shine",
        code: ``
    },
    {
        id: 'button-animated-border',
        name: 'Button Animated Border',
        description: 'An animated border button',
        component: ButtonAnimatedBorder,
        link: "/luxe/button-animated-border",
        code: ''
    },
    {
        id: 'button-background-shine',
        name: 'Button background shine',
        description: 'A button with a background shine effect',
        component: ButtonBackgroundShine,
        link: "/luxe/button-background-shine",
        code: ''
    },
    {
        id: 'button-destructive',
        name: 'Button destructive',
        description: 'A button with a destructive style',
        component: ButtonDestructive,
        link: "/luxe/button-destructive",
        code: ''
    },
    {
        id: 'button-loading',
        name: 'Button loading',
        description: 'A button with a loading state',
        component: ButtonLoading,
        link: "/luxe/button-loading",
        code: ''
    },
    {
        id: 'button-rotate-border',
        name: 'Button rotate border',
        description: 'A button with a rotating border',
        component: ButtonRotateBorder,
        link: "/luxe/button-rotate-border",
        code: ''
    },
    {
        id: 'button-success',
        name: 'Button success',
        description: 'A button with a success style',
        component: ButtonSuccess,
        link: "/luxe/button-success",
        code: ''
    },
    {
        id: 'card-animated-border',
        name: 'Card Animated Border',
        description: 'An animated border card',
        component: CardAnimatedBorder,
        link: "/luxe/card-animated-border",
        code: ''
    },
    {
        id: 'card-background-shine',
        name: 'Card background shine',
        description: 'A card with a background shine effect',
        component: CardBackgroundShine,
        link: "/luxe/card-background-shine",
        code: ''
    },
    {
        id: 'card-comment',
        name: 'Card Comment',
        description: 'A card for comments',
        component: CardComment,
        link: '/luxe/card-comment',
        code: ''
    },
    {
        id: 'card-hover-effect',
        name: 'Card hover effect',
        description: 'A card with hover effect',
        component: CardHoverEffect,
        link: '/luxe/card-hover-effect',
        code: ''
    },
    {
        id: 'card-product',
        name: 'Card product',
        description: 'A card product',
        component: CardProduct,
        link: '/luxe/card-product',
        code: ''
    },
    {
        id: 'card-revealed-pointer',
        name: 'Card revealed pointer',
        description: 'A card with a revealed pointer',
        component: CardRevealedPointer,
        link: '/luxe/card-revealed-pointer',
        code: ''
    },
    {
        id: 'text-animated-decoration',
        name: 'Text animated decoration',
        description: 'Text with animated decoration',
        component: TextAnimatedDecoration,
        link: '/luxe/text-animated-decoration',
        code: ''
    },
    {
        id: 'text-animated-gradient',
        name: 'Text animated gradient',
        description: 'Text with animated decoration',
        component: TextAnimatedGradient,
        link: '/luxe/text-animated-gradient',
        code: ''
    },
    {
        id: 'text-glitch',
        name: 'Text glitch',
        description: 'Text with glitch effect',
        link: '/luxe/text-glitch',
        component: TextGlitch,
        code: ''
    },
    {
        id: 'text-gradient',
        name: 'Text gradient',
        description: 'Text with gradient',
        link: '/luxe/text-gradient',
        component: TextGradient,
        code: ''
    },
    {
        id: 'text-shake',
        name: 'Text Shake',
        description: 'Text Shake',
        link: '/luxe/text-shake',
        component: TextShake,
        code: ''
    },
    {
        id: 'text-shine',
        name: 'Text shine',
        description: 'Text with shine effect',
        link: '/luxe/text-shine',
        component: TextShine,
        code: ''
    },
]