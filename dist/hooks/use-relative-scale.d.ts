/// <reference types="react" />
import { RelativeScaleProps } from '../types/relative-scale';
export declare function useRelativeScale<T extends HTMLElement>({ target, min, max, round, }: RelativeScaleProps): import("react").MutableRefObject<T>;
