/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import {
    DarkColors,
    LightColors,
} from './resources/NicaeaColors';

import NicaeaStyles from './resources/NicaeaStyles';

export {
    DarkColors,
    LightColors,
    NicaeaStyles as styles,
};
