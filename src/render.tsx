import Phaser from 'phaser';
import React, { useEffect } from 'react';
import { Root, createRoot } from 'react-dom/client';

import { SceneProvider } from './context/scene';

export class Interface {
  readonly container: HTMLDivElement;

  readonly root: Root;

  readonly scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    const parent = scene.game.canvas.parentElement;

    if (!parent) {
      throw Error('Undefined canvas parent element');
    }

    if (scene.interface) {
      console.warn('Scene already had an existing interface');
      scene.interface.destroy();
    }

    this.container = document.createElement('div');
    this.root = createRoot(this.container);
    this.scene = scene;
    this.scene.interface = this;

    this.configureContainer();
    this.setInteractive(false);

    parent.style.position = 'relative';
    parent.append(this.container);

    this.scene.events.on('shutdown', () => {
      this.destroy();
    });
  }

  public setInteractive(state: boolean) {
    this.container.style.pointerEvents = state ? 'all' : 'none';
    this.container.style.userSelect = state ? 'all' : 'none';
  }

  // @ts-ignore
  public render<P extends {}>(Component: React.FC<P>, props: P = {}) {
    const { scene } = this;

    if (Component.displayName) {
      this.container.setAttribute('data-component', Component.displayName);
    }

    const Middleware: React.FC = () => {
      useEffect(() => {
        scene.events.emit(Phaser.Interface.Events.MOUNT);
      }, []);

      return <Component {...props} />;
    };

    this.root.render(
      <SceneProvider value={scene}>
        <Middleware />
      </SceneProvider>,
    );
  }

  public destroy() {
    this.scene.events.emit(Phaser.Interface.Events.UNMOUNT);

    delete this.scene.interface;

    this.root.unmount();
    this.container.remove();
  }

  private configureContainer() {
    this.container.className = 'phaser-scene-interface';

    this.container.style.position = 'absolute';

    this.container.style.left = '0';
    this.container.style.right = '0';
    this.container.style.top = '0';
    this.container.style.bottom = '0';
  }
}

declare global {
  namespace Phaser {
    interface Scene {
      interface?: Interface
    }
    namespace Interface {
      enum Events {
        MOUNT = 'interface_mount',
        UNMOUNT = 'interface_unmount',
      }
    }
  }
}

// Global share Phaser enum
Phaser.Interface = {
  Events: {
    // @ts-ignore
    MOUNT: 'interface_mount',
    // @ts-ignore
    UNMOUNT: 'interface_unmount',
  },
};
