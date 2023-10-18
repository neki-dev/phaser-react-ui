/// <reference types="react" />
/**
 * Use adaptive interaction flow.
 *
 * Desktop:
 * * [ mouse enter = hover ] --> [ click = use ] --> [ mouse leave = unhover ]
 *
 * Mobile:
 * * [ click = hover ] --> [ second click = use ] --> [ auto unhover ]
 * * [ click = hover ] --> [ outside click = unhover ]
 *
 * @param ref - Target ref
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export declare function useInteraction(ref: React.RefObject<HTMLElement>, callback?: () => void, depends?: any[]): boolean;
