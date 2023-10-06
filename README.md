## ⚡ Phaser React UI
[![Npm package version](https://badgen.net/npm/v/phaser-react-ui)](https://npmjs.com/package/phaser-react-ui)
[![Small size](https://img.badgesize.io/neki-dev/phaser-react-ui/main/dist/index.js)](https://github.com/neki-dev/phaser-react-ui/blob/main/dist/index.js)
[![Building](https://github.com/neki-dev/phaser-react-ui/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/phaser-react-ui/actions/workflows/build.yml)

Library for render relative game interface using React, connecting it with Phaser through events and context.

Use special hooks for access to game and scenes.

For each scene can be create one interface instance, which is container for all components.

.

* ### Install

```sh
npm i phaser-react-ui
```

.

## Interface integration
#### Add interface to scene
```ts
const ui = new Interface(
  scene: Phaser.Scene, 
  component: React.FC, 
  props?: object
);

console.log(ui.container); // HTMLDivElement
```

#### Interface events
```ts
scene.events.on(Phaser.Interface.Events.MOUNT, () => {
  console.log('component mounted');
});
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
#### Get game in component
```ts
useGame(): Phaser.Game
```

#### Get scene in component
  * Get scene in which interface was created
```ts
useCurrentScene(): Phaser.Game
```
  * Get scene by key
```ts
useScene(key: string): Phaser.Game
```

#### Subscribe to scene update
```ts
useSceneUpdate(
  scene: Phaser.Scene, 
  callback: () => void, 
  depends: any[]
)
```

#### Position relative to camera
```ts
useRelativePosition(position: { 
  x: number, 
  y: number
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

#### Get source texture image
```ts
useTexture(params: {
  name: string, 
  frame?: string | number
}): HTMLImageElement
```

#### Get actual media query result
```ts
useMatchMedia(
  query: string
): boolean
```

#### Check platform is mobile
```ts
useMobilePlatform(): boolean
```

#### Add click event outside element
```ts
useOutsideClick(
  ref: React.RefObject,
  callback: Function,
  depends: any[]
)
```

.

## Components

#### Position relative to camera
```ts
<RelativePosition x={number} y={number}>
  ...
</RelativePosition>
```

#### Scale relative to canvas size
```ts
<RelativeScale target={number} min={number?} max={number?} round={boolean?}>
  ...
</RelativeScale>
```

#### Render texture image
```ts
<Texture name={string} frame={string? | number?} />
```

.

## Utils
#### Safe rerender utils
```ts
getModifiedObject(curr: T, next: T): T 
```
```ts
getModifiedArray(curr: T[], next: T[], keys: (keyof T)[]): T[]
```
```ts
const Component: React.FC = () => {
  const scene = useCurrentScene();
  const [data, setData] = useState({});

  useSceneUpdate(scene, () => {
    const newData = scene.getSomeData();
    setList((currentData) => (
      // Rerender only if newData is different by currentData
      getModifiedObject(currentData, newData)
    ));
  }, []);
};
```

.

## Full example

#### Create interface component
```ts
import { useScene, useSceneUpdate } from 'phaser-react-ui';

const PlayerHealth: React.FC = () => {
  const world = useScene('world');
  const [health, setHealth] = useState(0);

  useSceneUpdate(world, () => {
    setHealth(world.player.health);
  }, []);

  return (
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
    this.ui = new Interface(this, ScreenUI);
  }
}
```