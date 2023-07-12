import Phaser from "phaser";
import React from "react";
import { Root } from "react-dom/client";
export declare class Interface<T = {}> {
    readonly container: HTMLDivElement;
    readonly root: Root;
    readonly scene: Phaser.Scene;
    constructor(scene: Phaser.Scene, Component: React.FC<T>, props?: T);
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
