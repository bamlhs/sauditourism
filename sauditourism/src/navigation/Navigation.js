
import { createStackNavigator, createAppContainer } 
from 'react-navigation';

import DashBoardScreen from '../screens/DashBoardScreen/DashBoardScreen';
import PlacesScreen from '../screens/PlacesScreen/PlacesScreen';
import PlaceScreen from '../screens/PlaceScreen/PlaceScreen';
import AddPlaceScreen from '../screens/AddPlaceScreen/AddPlaceScreen';
const Navigation = createStackNavigator({
    palces: {
        screen: PlacesScreen
    },
    dash: {
        screen: DashBoardScreen
    },
    place: {
        screen: PlaceScreen
    },
    add: {
        screen: AddPlaceScreen
    }

}, {
    initialRouteName: 'dash',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        }
    }
});
const AppContainer = createAppContainer(Navigation);
export default AppContainer;
