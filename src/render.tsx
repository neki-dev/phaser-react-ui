import Phaser from 'phaser';
import React, { useEffect } from 'react';
import { Root, createRoot } from 'react-dom/client';

import { SceneProvider } from './context/scene';

export class Interface<T = {}> {
  readonly container: HTMLDivElement;

  readonly root: Root;

  readonly scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, Component: React.FC<T>, props?: T) {
    if (scene.interface) {
      throw Error('Scene already have interface');
    }

    this.container = document.createElement('div');
    if (Component.displayName) {
      this.container.setAttribute('data-component', Component.displayName);
    }

    this.configureContainer();
    this.setInteractive(false);

    const parent = scene.game.canvas.parentElement;

    parent.style.position = 'relative';
    parent.append(this.container);

    const ComponentMiddleware: React.FC<T> = (propsMiddleware: T) => {
      useEffect(() => {
        scene.events.emit(Phaser.Interface.Events.MOUNT);
      }, []);

      return <Component {...propsMiddleware} />;
    };

    this.root = createRoot(this.container);
    this.root.render(
      <SceneProvider value={scene}>
        <ComponentMiddleware {...props} />
      </SceneProvider>,
    );

    this.scene = scene;
    this.scene.interface = this;

    this.scene.events.on('shutdown', () => {
      this.destroy();
    });
  }

  public setInteractive(state: boolean) {
    this.container.style.pointerEvents = state ? 'all' : 'none';
    this.container.style.userSelect = state ? 'all' : 'none';
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
