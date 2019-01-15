
import { createStackNavigator, createAppContainer } from 'react-navigation';

import DashBoardScreen from '../screens/DashBoardScreen/DashBoardScreen';
import PlacesScreen from '../screens/PlacesScreen/PlacesScreen';
const Navigation = createStackNavigator({
    dash: {
        screen: DashBoardScreen
    },
    palces: {
        screen: PlacesScreen
    },


}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        }
    }
});
const AppContainer = createAppContainer(Navigation);
export default AppContainer;
