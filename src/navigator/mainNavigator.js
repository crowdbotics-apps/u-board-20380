import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList103097Navigator from '../features/NotificationList103097/navigator';
import Settings103096Navigator from '../features/Settings103096/navigator';
import Settings103088Navigator from '../features/Settings103088/navigator';
import UserProfile103086Navigator from '../features/UserProfile103086/navigator';
import SignIn21103046Navigator from '../features/SignIn21103046/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList103097: { screen: NotificationList103097Navigator },
Settings103096: { screen: Settings103096Navigator },
Settings103088: { screen: Settings103088Navigator },
UserProfile103086: { screen: UserProfile103086Navigator },
SignIn21103046: { screen: SignIn21103046Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
