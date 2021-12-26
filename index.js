/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/Router';
import {name as appName} from './app.json';
import i18n from './src/languages/i18n';
AppRegistry.registerComponent(appName, () => App);
