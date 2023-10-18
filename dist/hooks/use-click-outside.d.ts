import React from 'react';
/**
 * Use adaptive click event outside target element.
 *
 * @param ref - Target ref
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export declare function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => void, depends: any[]): void;
