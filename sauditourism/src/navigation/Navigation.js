
import { createStackNavigator, createAppContainer } 
from 'react-navigation';

import DashBoardScreen from '../screens/DashBoardScreen/DashBoardScreen';
import PlacesScreen from '../screens/PlacesScreen/PlacesScreen';
const Navigation = createStackNavigator({
    palces: {
        screen: PlacesScreen
    },
    dash: {
        screen: DashBoardScreen
    },

}, {
    initialRouteName: 'palces',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        }
    }
});
const AppContainer = createAppContainer(Navigation);
export default AppContainer;
