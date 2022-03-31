/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Account from './src/screen/Account';
import AddTurnover from './src/screen/AddTurnover';
import ForgotPassword from './src/screen/ForgotPassword';
import ResetPassword from './src/screen/ResetPassword';
import SignIn from './src/screen/SignIn';
import Turnover from './src/screen/Turnover';
import VerificationCode from './src/screen/VerificationCode';
import Welcome from './src/screen/Welcome';

AppRegistry.registerComponent(appName, () => App);
