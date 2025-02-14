/// <reference types="react" />
import type { RelativePositionProps } from '../types/relative-position';
/**
 * Position relative to camera.
 *
 * @param props
 * @param props.x - World position X
 * @param props.y - World position Y
 * @param props.camera - Camera
 */
export declare function useRelativePosition<T extends HTMLElement>({ x, y, camera, }: RelativePositionProps): import("react").RefObject<T>;
