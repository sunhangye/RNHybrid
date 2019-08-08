/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Page1 from './src/page/Page1'
import Page2 from './src/page/Page2'
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('App1', () => Page1);
AppRegistry.registerComponent('App2', () => Page2);
