declare module '*.tiff' {
    const content: import("next/image").StaticImageData;
    export default content;
}
