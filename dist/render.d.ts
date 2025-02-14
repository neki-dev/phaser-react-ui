import Phaser from 'phaser';
import React from 'react';
import type { Root } from 'react-dom/client';
export declare class Interface {
    readonly container: HTMLDivElement;
    readonly root: Root;
    readonly scene: Phaser.Scene;
    constructor(scene: Phaser.Scene);
    setInteractive(state: boolean): void;
    render<P extends {}>(Component: React.FC<P>, props?: P): void;
    destroy(): void;
    private configureContainer;
}
declare global {
    namespace Phaser {
        interface Scene {
            interface?: Interface;
        }
        namespace Interface {
            enum Events {
                MOUNT = "interface_mount",
                UNMOUNT = "interface_unmount"
            }
        }
    }
}
