/// <reference types="react" />
type Props = {
    x: number;
    y: number;
};
export declare function useRelativePosition<T extends HTMLElement>({ x, y }: Props): import("react").MutableRefObject<T>;
export {};
