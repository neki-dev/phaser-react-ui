/// <reference types="react" />
type Props = {
    target: number;
    min?: number;
    max?: number;
};
export declare function useRelativeScale({ target, min, max }: Props): import("react").MutableRefObject<HTMLElement>;
export {};
