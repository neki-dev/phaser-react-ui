## ⚡ Phaser React UI
[![Npm package version](https://badgen.net/npm/v/phaser-react-ui)](https://npmjs.com/package/phaser-react-ui)
[![Small size](https://img.badgesize.io/neki-dev/phaser-react-ui/master/dist/index.js)](https://github.com/neki-dev/phaser-react-ui/blob/master/dist/index.js)
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
new Interface(
  scene: Phaser.Scene, 
  component: React.FC, 
  props?: object
);
```
```ts
class YourScene extends Phaser.Scene {
  create() {
    const ui = new Interface(this, Component, {
      foo: 1,
      bar: 2,
    });

    console.log(ui.container); // HTMLDivElement
  }
}
```

#### Interface events
```ts
class YourScene extends Phaser.Scene {
  create() {
    const ui = new Interface(this, Component);

    this.events.on(Phaser.Interface.Events.MOUNT, () => {
      console.log('component mounted');
    });
  }
}
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

.

## Components
#### Get game in component
```ts
const Component: React.FC = () => {
  const game = useGame();
};
```

#### Get scene in component
```ts
const Component: React.FC = () => {
  // Get scene in which interface was created
  const scene = useCurrentScene();
  // Or get scene by key
  const scene = useScene('key');
};
```

#### Subscribe to scene update
```ts
const Component: React.FC = () => {
  const scene = useCurrentScene();

  useSceneUpdate(scene, () => {
    // Callback
  }, []);
};
```

#### Safe rerender utils
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

## Example

#### Add interface to scene
```ts
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