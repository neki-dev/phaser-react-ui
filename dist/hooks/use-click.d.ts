import React from 'react';
/**
 * Use adaptive click event on target element.
 *
 * @param ref - Target ref
 * @param type - Event type
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export declare function useClick(ref: React.RefObject<HTMLElement | Document>, type: 'up' | 'down', callback: (event: MouseEvent | TouchEvent) => void, depends: any[]): void;
