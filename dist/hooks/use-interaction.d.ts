/// <reference types="react" />
/**
 * Use adaptive interaction flow.
 *
 * Desktop:
 * --[ mouse enter (activate) ] --> [ click (use) ] --> [ mouse leave (disactivate) ]
 *
 * Mobile:
 * --[ click (activate) ] --> [ second click (use) ] --> [ auto disactivate ]
 * --[ click (activate) ] --> [ outside click (disactivate) ]
 *
 * @param ref - Target ref
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export declare function useInteraction(ref: React.RefObject<HTMLElement>, callback?: () => void, depends?: any[]): boolean;
