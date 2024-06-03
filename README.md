# A react-native monorepo template

## Requirements
* yarn >= 3.x
* TBD

## Add new package

To add a new react-native library and to extend main app follow the steps below:

**create a new react-native library**
```
$ npx create-react-native-library@latest packages/new-module
```

then to work correctly with nested workspaces we have to do little changes to the example app

**change main script in packages/new-module/example/package.json in**

```json
"main": "index.js"
```

**add a new index.js file in the exmaple root with this content**

```javascript
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
```

**in metro.config.js updates root**
```javascript
const root = path.resolve(__dirname, '..', '..'); // Add this to resolve dependencies from the root
```

**add a script to the package.json in the repository root**
```json
"new-module": "yarn workspace new-module",
```

### Links

https://docs.expo.dev/guides/monorepos/

https://docs.expo.dev/guides/monorepos/#change-default-entrypoint