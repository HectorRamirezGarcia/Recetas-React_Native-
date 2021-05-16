import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'
import PrincipalScreen from '@screens/PrincipalScreen'
import RecuperarPasswordScreen from '@screens/RecuperarPasswordScreen'
import RegistroScreen from '@screens/RegistroScreen'
import RecetasScreen from '@screens/RecetasScreen'
import HomeScreen from '@screens/HomeScreen'
import UserScreen from "@screens/UserScreen"
import AddItem from "@screens/AddItem"

const AppNavigation = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    RecuperarPassword:{
        screen: RecuperarPasswordScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Registrar:{
        screen: RegistroScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    RecetasScreen: {
        screen: RecetasScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    UserScreen: {
        screen: UserScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    AddItem: {
        screen: AddItem,
        navigationOptions:{
            headerShown: false,
        }
    }

})

export default createAppContainer(AppNavigation)