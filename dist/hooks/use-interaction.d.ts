/// <reference types="react" />
/**
 * Using adaptive interaction flow.
 *
 * Desktop:
 * --[ mouse enter (activate) ] --> [ click (use) ] --> [ mouse leave (disactivate) ]
 *
 * Mobile:
 * --[ click (activate) ] --> [ second click (use) ] --> [ auto disactivate ]
 * --[ click (activate) ] --> [ outside click (disactivate) ]
 */
export declare function useInteraction(ref: React.RefObject<HTMLElement>, callback?: () => void, depends?: any[]): boolean;
