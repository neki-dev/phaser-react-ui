## ⚡ Phaser React UI
[![Npm package version](https://badgen.net/npm/v/phaser-react-ui)](https://npmjs.com/package/phaser-react-ui)
[![Small size](https://img.badgesize.io/neki-dev/phaser-react-ui/main/dist/index.js)](https://github.com/neki-dev/phaser-react-ui/blob/main/dist/index.js)
[![Building](https://github.com/neki-dev/phaser-react-ui/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/phaser-react-ui/actions/workflows/build.yml)

Allows you to render game interface using React, connecting it with Phaser through events and context.

For each scene can be create one interface instance, which is container for all components.

Use special hooks to access game data from components.

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
ui.setInteractive(state: boolean);
```
* Default: `true`
* You can toggle interactive for certain interface elements by CSS-property `pointer-events`

#### Remove interface from scene
```ts
ui.destroy();
```
* When scene is closed, the interface is destroyed automatically

.

## Components
#### Get game in component
```ts
import { useGame } from 'phaser-react-ui';

const Component: React.FC = () => {
  const game = useGame();
};
```

#### Get scene in component
```ts
import { useCurrentScene, useScene } from 'phaser-react-ui';

const Component: React.FC = () => {
  // Get scene in which interface was created
  const scene = useCurrentScene();
  // Or get scene by key
  const scene = useScene('key');
};
```

#### Subscribe to scene update
```ts
import { useCurrentScene, useSceneUpdate } from 'phaser-react-ui';

const Component: React.FC = () => {
  const scene = useCurrentScene();

  useSceneUpdate(scene, () => {
    // Callback
  }, []);
};
```

#### Position relative to camera
```ts
import { TranslateToCamera } from 'phaser-react-ui';

const Component: React.FC = () => {
  const position = useMemo(() => ({ 
    x: 100, 
    y: 200,
  }), []);

  return (
    <TranslateToCamera position={position}>
      ...
    </TranslateToCamera>
  );
};
```

#### Safe rerender utils
```ts
import { useCurrentScene, useSceneUpdate, getModifiedObject } from 'phaser-react-ui';

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

## Example

#### Add interface to scene
```ts
import { Interface } from 'phaser-react-ui';

class Screen extends Phaser.Scene {
  create() {
    new Interface(this, ScreenUI, { 
      theme: 'dark'
    });
  }
}
```

#### Create interface container of components
```ts
type Props = {
  theme: string
}

const ScreenUI: React.FC<Props> = ({ theme }) => {
  return (
    <div className={`container ${theme}`}>
      <PlayerHealth />
      // ...
    </div>
  );
};

ScreenUI.displayName = 'ScreenUI';
```

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