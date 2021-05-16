import * as React from 'react';
import Colors from '@styles/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "@screens/HomeScreen";
import UserScreen from "@screens/UserScreen";
import RecetasScreen from "@screens/RecetasScreen";

const Tab = createBottomTabNavigator();

function MyTabs(props) {
    return (
        <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ activeTintColor: Colors.ICONCOLOR, }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="UserScreen" component={UserScreen} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="person" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="RecetasScreen" component={RecetasScreen} options={{
                tabBarLabel: 'Recetas',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default function PrincipalScreen(props, navigate) {
    return (
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
        
    );
}






/*



import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Alert, BackHandler, SafeAreaView } from 'react-native'
import Colors from '@styles/Colors'
import MyButton from '@components/MyButton'
import { UsuarioContext } from '@context/UsuarioContext'



function useBackButton(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)

        return () => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}

export default function PrincipalScreen(props) {

    useBackButton(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <StatusBar
                backgroundColor={Colors.ICONCOLOR}
                barStyle='dark-content'
                translucent={true}
            />
            <Text style={{ textAlign: 'center', marginTop: 200, fontFamily: 'Poppins-Black' }}>Bienvenido{'\n' + login.usuario.email}</Text>
            <MyButton
                titulo='Cerrar Session'
                onPress={() => desconectarse()}
            />
        </View>
    )

    function goToScreen(routename) {
        props.navigation.navigate(routename)
    }

    function desconectarse() {
        Alert.alert(
            "Salir",
            "¿Estas seguro que \ndesea cerrar sessión",
            [
                {
                    text: "Si", onPress: () => {
                        loginAction({
                            type: 'sign-out',
                            data: {}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text: "No", onPress: () => { }, style: 'cancel'
                }
            ]
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})
*/

/*import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchbleOpacity} from 'react-native'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

export default class PrincipalScreen extends React.Component {
    render() {
        return (
           <View style={styles.container} >
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }} onPress={navigation.openDrawer()}>
                    <IconAntDesign name="home" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.text}> Screen</Text>
                </View>
            </SafeAreaView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})
/*<View style={{flex:1, alignItems:'center'}}>
            <StatusBar
                backgroundColor={Colors.ICONCOLOR}
                barStyle='dark-content'
                translucent={true}
            />
            <Text style={{ textAlign: 'center', marginTop: 200, fontFamily: 'Poppins-Black' }}>Bienvenido{'\n' + login.usuario.email}</Text>
            <MyButton
                titulo='Cerrar Session'
                onPress={()=> desconectarse()}
            />
        </View>*/