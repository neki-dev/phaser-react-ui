## ⚡ Phaser React UI
[![Npm package version](https://badgen.net/npm/v/phaser-react-ui)](https://npmjs.com/package/phaser-react-ui)
[![Small size](https://img.badgesize.io/neki-dev/phaser-react-ui/main/dist/index.js)](https://github.com/neki-dev/phaser-react-ui/blob/main/dist/index.js)
[![Building](https://github.com/neki-dev/phaser-react-ui/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/phaser-react-ui/actions/workflows/build.yml)

Library for render relative game interface using React, connecting it with Phaser through events and context.

Use special hooks for access to game and scenes.

For each scene can be create one interface instance, which is container for all components.

.

Documentation

* [Install](https://github.com/neki-dev/phaser-react-ui?tab=readme-ov-file#install)
* [Integration](https://github.com/neki-dev/phaser-react-ui?tab=readme-ov-file#integration)
* [Hooks](https://github.com/neki-dev/phaser-react-ui?tab=readme-ov-file#hooks)
* [Components](https://github.com/neki-dev/phaser-react-ui?tab=readme-ov-file#components)
* [Utils](https://github.com/neki-dev/phaser-react-ui?tab=readme-ov-file#utils)
* [Example](https://github.com/neki-dev/phaser-react-ui?tab=readme-ov-file#example)

.


## Install

```sh
npm i phaser-react-ui
```

.

## Integration
#### Add interface to scene
```ts
const ui = new Interface(scene: Phaser.Scene)

console.log(ui.container) // HTMLDivElement
```

#### Interface render
```ts
ui.render(
  component: React.FC, 
  props?: object
)
```

#### Interface events
```ts
scene.events.on(Phaser.Interface.Events.MOUNT, () => {
  console.log('component mounted');
})
```

#### Toggle interface interactive
```ts
ui.setInteractive(state: boolean)
```
* Default: `true`
* You can toggle interactive for certain interface elements by CSS-property `pointer-events`

#### Remove interface from scene
```ts
ui.destroy()
```
* When scene is closed, the interface is destroyed automatically

.

## Hooks
#### Get game instance
```ts
useGame(): Phaser.Game
```

#### Get scene
  * Get scene in which interface was created
```ts
useCurrentScene(): Phaser.Scene
```
  * Get scene by key
```ts
useScene(key: string): Phaser.Scene
```

#### Subscribe to scene update
```ts
useSceneUpdate(
  scene: Phaser.Scene, 
  callback: () => void, 
  depends: any[]
)
```

#### Subscribe to event
```ts
useEvent(
  emitter: Phaser.Events.EventEmitter, 
  event: string,
  callback: () => void, 
  depends: any[]
)
```

#### Position relative to camera
```ts
useRelativePosition(params: { 
  x: number,
  y: number,
  camera?: Phaser.Cameras.Scene2D.Camera
}): React.MutableRefObject<HTMLElement>
```

#### Scale relative to canvas size
```ts
useRelativeScale(params: { 
  target: number, 
  min?: number,
  max?: number,
  round?: boolean
}): React.MutableRefObject<HTMLElement>
```

#### Get texture source image
```ts
useTexture(key: string): HTMLImageElement
```

#### Get actual media query result
```ts
useMatchMedia(query: string): boolean
```

#### Check if platform is mobile
```ts
useMobilePlatform(): boolean
```

#### Use adaptive click event on target element
```ts
useClick(
  ref: React.RefObject,
  type: 'up' | 'down',
  callback: Function,
  depends: any[]
)
```

#### Use adaptive click event outside target element
```ts
useClickOutside(
  ref: React.RefObject,
  callback: Function,
  depends: any[]
)
```

#### Use adaptive interaction flow
```ts
useInteraction(
  ref: React.RefObject,
  callback?: Function,
  depends?: any[]
): boolean
```

.


## Components
#### Position relative to camera
```ts
<RelativePosition 
  x={number} 
  y={number} 
  camera={Phaser.Cameras.Scene2D.Camera?}
>
  ...
</RelativePosition>
```

#### Scale relative to canvas size
```ts
<RelativeScale 
  target={number} 
  min={number?} 
  max={number?} 
  round={boolean?}
>
  ...
</RelativeScale>
```

#### Render texture image
```ts
<Texture name={string} />
```

.

## Utils
#### Safe rerender utils
```ts
ifModifiedObject(
  newValue: T, 
  keys?: (keyof T)[]
): (currentValue: T) => T
```
```ts
ifModifiedArray(
  newValue: T[], 
  keys?: (keyof T)[]
): (currentValue: T[]) => T[]
```
```ts
const Component: React.FC = () => {
  const scene = useCurrentScene();
  const [data, setData] = useState({});

  useSceneUpdate(scene, () => {
    const newData = scene.getSomeData();
    // Rerender only if newData is different by data
    setList(ifModifiedObject(newData))
  }, []);
};
```

.

## Example
#### Create interface component
```ts
import { useScene, useSceneUpdate, useEvent } from 'phaser-react-ui';

const PlayerHealth: React.FC = () => {
  const world = useScene('world');

  const [health, setHealth] = useState(0);
  const [isAlive, setAlive] = useState(true);

  useSceneUpdate(world, () => {
    if (isAlive) {
      setHealth(world.player.health);
    }
  }, [isAlive]);

  useEvent(world.player, Phaser.GameObjects.Events.DESTROY, () => {
    setAlive(false);
  }, []);

  return isAlive && (
    <div className='info'>
      {health} HP
    </div>
  );
};
```

#### Create components container
```ts
import { useRelativeScale } from 'phaser-react-ui';
import { PlayerHealth } from './PlayerHealth';

const ScreenUI: React.FC<Props> = () => {
  const ref = useRelativeScale<HTMLDivElement>({
    target: 1280,
    min: 0.6,
    max: 1.2,
  });

  return (
    <div ref={ref} className='container'>
      <PlayerHealth />
      ...
    </div>
  );
};

ScreenUI.displayName = 'ScreenUI';
```

#### Add interface to scene
```ts
import { Interface } from 'phaser-react-ui';
import { ScreenUI } from './ScreenUI';

class Screen extends Phaser.Scene {
  private ui: Interface;

  create() {
    this.ui = new Interface(this);
    this.ui.render(ScreenUI);
  }
}
```