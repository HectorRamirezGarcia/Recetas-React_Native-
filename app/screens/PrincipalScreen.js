import React, { Component, useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native'
import { mainStyles } from '@styles/General'
import Colors from '@styles/Colors'
import MyButton from '@components/MyButton'
import { UsuarioContext } from '@context/UsuarioContext'

function useBackButton(handler){
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)

        return() => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}

export default function PrincipalScreen(props){

    useBackButton(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)

    return(
        <View style={{flex:1, alignItems:'center'}}>
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
        </View>
    )

    function goToScreen(routename){
        props.navigation.navigate(routename)
    }

    function desconectarse(){
        Alert.alert(
            "Salir",
            "¿Estas seguro que \ndesea cerrar sessión",
            [
                {
                   text:"Si", onPress: ()=>{
                       loginAction({
                           type:'sign-out',
                           data:{}
                       })
                       goToScreen('Login')
                   } 
                },
                {
                    text:"No", onPress: ()=>{}, style:'cancel'
                }
            ]
        )
    }
}