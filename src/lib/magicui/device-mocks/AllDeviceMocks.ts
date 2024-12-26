import type { MagicComponent } from "../AllTypes";
import SafariMock from "./safari/SafariMock.svelte";
import SafariMockCode from "./safari/SafariMock.svelte?raw";

import SafariImage from "./safari/SafariImage.svelte";
import SafariImageCode from "./safari/SafariImage.svelte?raw";

import SafariMockExample from "./safari/SafariMockExample.svelte";
import SafariMockExampleCode from "./safari/SafariMockExample.svelte?raw";

import SafariVideo from "./safari/SafariVideo.svelte";
import SafariVideoCode from "./safari/SafariVideo.svelte?raw";


import AndroidMock from "./android/AndroidMock.svelte";
import AndroidMockCode from "./android/AndroidMock.svelte?raw";
import AndroidImage from "./android/AndroidImage.svelte";
import AndroidVideo from "./android/AndroidVideo.svelte";


import Iphone15ProMock from "./iphone-15-pro/Iphone15ProMock.svelte";
import Iphone15ProMockCode from "./iphone-15-pro/Iphone15ProMock.svelte?raw";

import Iphone15Image from "./iphone-15-pro/Iphone15Image.svelte";
import Iphone15ImageCode from "./iphone-15-pro/Iphone15Image.svelte?raw";

import Iphone15Video from "./iphone-15-pro/Iphone15Video.svelte";
import Iphone15VideoCode from "./iphone-15-pro/Iphone15Video.svelte?raw";


export let allDevicesMocks: MagicComponent[] = [
    {
        id: 'safari',
        link: '/magic/safari',
        name: 'Safari',
        desc: 'A safari browser mockup to showcase your website.',
        tags: ['SVG', 'Svelte 5 Supported'],
        component: SafariMock,
        code: SafariMockCode,
        examples: [
            {
                id: 1,
                name: "Safari Mock Example",
                fileName: "SafariMockExample.svelte",
                code: SafariMockExampleCode,
                component: SafariMockExample,
                showDots: false,
            },
            {
                id: 2,
                name: "Safari Image",
                fileName: "SafariImage.svelte",
                code: SafariImageCode,
                component: SafariImage,
                showDots: false,
            },
            {
                id: 3,
                name: "Safari Video",
                fileName: "SafariVideo.svelte",
                code: SafariVideoCode,
                component: SafariVideo,
                showDots: false,
            },
        ]
    },
    {
        id: 'android',
        link: '/magic/android',
        name: 'Android',
        desc: 'A android device mockup to showcase your website.',
        tags: ['SVG', 'Svelte 5 Supported'],
        component: AndroidMock,
        code: AndroidMockCode,
        examples: [
            {
                id: 1,
                name: "Android Mock Example",
                fileName: "AndroidMockExample.svelte",
                code: '',
                component: AndroidMock
            },
            {
                id: 1,
                name: "Android Image",
                fileName: "AndroidImage.svelte",
                code: '',
                component: AndroidImage
            },
            {
                id: 1,
                name: "Android Video",
                fileName: "AndroidVideo.svelte",
                code: '',
                component: AndroidVideo
            },
        ]
    },
    {
        id: 'iphone15-pro',
        link: '/magic/iphone-15-pro',
        name: 'iPhone 15 Pro',
        desc: 'A iPhone 15 Pro device mockup to showcase your website.',
        tags: ['SVG', 'Svelte 5 Supported'],
        component: Iphone15ProMock,
        code: Iphone15ProMockCode,
        examples: [
            {
                id: 1,
                name: "iPhone 15 Pro Image",
                fileName: "Iphone15ProImage.svelte",
                code: Iphone15ImageCode,
                component: Iphone15Image,
            },
            {
                id: 2,
                name: "iPhone 15 Pro Video",
                fileName: "Iphone15ProVideo.svelte",
                code: Iphone15VideoCode,
                component: Iphone15Video,
            },
        ]
    }
]