/// <reference types="react" />
import { RelativeScaleProps } from '../types/relative-scale';
/**
 * Scale relative to canvas size.
 *
 * @param props
 * @param props.target - Target value
 * @param props.min - Min scale
 * @param props.max - Max scale
 * @param props.round - Rounding
 */
export declare function useRelativeScale<T extends HTMLElement>({ target, min, max, round, }: RelativeScaleProps): import("react").MutableRefObject<T>;
