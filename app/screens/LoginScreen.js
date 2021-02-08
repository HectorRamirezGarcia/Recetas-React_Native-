import React,  {Component, useState} from 'react'
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { mainStyles, loginStyles} from '@styles/General'
import MyTextInput from '@components/MyTextInput'
import Colors from '@styles/Colors'

function goToScreen(props, routename){
    props.navigation.navigate(routename)
}

export default function LoginScreen (props){
    const [hidePassword, setHidePassword] = useState(false)

    return(
        <View style={[mainStyles.container]}>
            <StatusBar backgroundColor={Colors.ICONCOLOR} translucent={true}/>
            <View style={loginStyles.logo}>
                <Image source={require('@recursos/images/iconoapp.png')}
                style={{ height:200, width:200}}/>
            </View>
            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
            <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
            secureTextEntry={hidePassword}
            onPress={() => setHidePassword(!hidePassword)}/>
            <View style={mainStyles.btnMain}>
                <TouchableOpacity>
                    <Text style={ mainStyles.btntxt}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            <View style={mainStyles.btnTransparent}>
                <TouchableOpacity>
                    <Text style={ [mainStyles.btntxt, { color: Colors.ICONCOLOR}]}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => goToScreen(props, 'RecuperarPassword')}>
                    <Text style={ [mainStyles.txtTransparent, { textDecorationLine: 'underline'}]}>Olvide mi contraseña</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}