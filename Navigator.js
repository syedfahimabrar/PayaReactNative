import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Components/Login";
import Profile from "./Components/Profile";



const NAV = createAppContainer(MainNavigator);

export default NAV;