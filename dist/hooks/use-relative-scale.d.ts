/// <reference types="react" />
type Props = {
    target: number;
    min?: number;
    max?: number;
};
export declare function useRelativeScale<T extends HTMLElement>({ target, min, max }: Props): import("react").MutableRefObject<T>;
export {};
