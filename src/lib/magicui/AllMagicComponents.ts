
import { backgroundMagic } from "$lib/magicui/backgrounds/backgroundMagic";
import { buttonMagic } from "$lib/magicui/buttons/buttonMagic";
import { allMagicText } from "$lib/magicui/text-animations/AllMagicText";
import { allMagicAnimation } from "./animations/allMagicAnimation";
import { allSubMagicComps } from "./components/AllSubMagicComp";
import { allSpecialEffects } from "./SpecialEffects/AllSpecialEffects";




export let allMagicComponents = [...buttonMagic, ...backgroundMagic, ...allMagicText, ...allSubMagicComps, ...allSpecialEffects, ...allMagicAnimation];

