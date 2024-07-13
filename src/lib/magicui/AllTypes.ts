
export type MagicComponent = {
    id: string;
    name: string;
    desc: string;
    component?: any;
    link: string;
    code?: string | Code[];
    class?: string;
    showGrid?: boolean;
    previewComp?: any;
    previewCode?: string | Code[];
    examples?: ExampleComponent[];
    tailwind?: string;
    showDots?: boolean;
    cncode?: string;
    download?: string;
}
export type Code = {
    filename: string;
    code: string
}
export type ExampleComponent = {
    id: number,
    name: string;
    fileName: string;
    code: string | Code[];
    component: any;
    class?: string;
    showGrid?: boolean
    showDots?: boolean;
}