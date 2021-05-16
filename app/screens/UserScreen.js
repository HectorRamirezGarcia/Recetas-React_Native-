import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Text, View, StatusBar, Alert, BackHandler} from 'react-native';
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


export default function UserScreen(props) {

    
    const [login, loginAction] = useContext(UsuarioContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    );
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
                        goToScreen();
                    }
                },
                {
                    text: "No", onPress: () => { }, style: 'cancel'
                }
            ]
        )
    }

    function goToScreen(){
        BackHandler.exitApp();
    }
}