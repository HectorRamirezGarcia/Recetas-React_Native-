import React,  {Component, useState, useContext} from 'react'
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { mainStyles, loginStyles} from '@styles/General'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import Colors from '@styles/Colors'
import { UsuarioContext } from '@context/UsuarioContext'
import * as firebase from "firebase"
import Snackbar from 'react-native-snackbar'


export default function LoginScreen (props){

    const [login, loginAction] = useContext(UsuarioContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <View style={[mainStyles.container]}>
            <StatusBar backgroundColor={Colors.ICONCOLOR} translucent={true}/>
            <View style={loginStyles.logo}>
                <Image source={require('@recursos/images/iconoapp.png')}
                style={{ height:200, width:200}}/>
            </View>
            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'
            value={email} onChangeText={(email)=> setEmail(email)}/>
            <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
            secureTextEntry={hidePassword}
            onPress={() => setHidePassword(!hidePassword)}
            value={password} onChangeText={(password)=> setPassword(password)}/>
            <MyButton 
                titulo='Iniciar Sesión'
                onPress={() => hanldeSignUp(props)}
            />
            <MyButton
                transparent={true} 
                titulo='Registrarse'
                onPress={()=> goToScreen(props, 'Registrar')}
            />
            <View>
                <TouchableOpacity onPress={() => goToScreen(props, 'RecuperarPassword')}>
                    <Text style={ [mainStyles.txtTransparent, { textDecorationLine: 'underline'}]}>Olvide mi contraseña</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    function goToScreen(props, routename){
        props.navigation.navigate(routename)
    }

    function hanldeSignUp(){
        loginAction({
            type:'sign', data:{
                email, password
            }
        })
        firebase.
            auth().signInWithEmailAndPassword(email, password).then((email) => {
                Snackbar.show({
                    text: 'Inicio de sesión exitoso',
                    duration: Snackbar.LENGTH_LONG,
                })
    
                goToScreen(props, 'Principal')
              }).catch(error => 
                Snackbar.show({
                text: error.message,
                duration: Snackbar.LENGTH_LONG,
            }))
    }
}