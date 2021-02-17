import React,  {Component, useState, useContext} from 'react'
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { mainStyles, loginStyles} from '@styles/General'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import Colors from '@styles/Colors'
import { UsuarioContext } from '@context/UsuarioContext'
import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCi-CChycQQK46-acwNXkhHxVi6ZhFO2tk",
    authDomain: "recetas-react-b6c7f.firebaseapp.com",
    projectId: "recetas-react-b6c7f",
    storageBucket: "recetas-react-b6c7f.appspot.com",
    messagingSenderId: "806641563351",
    appId: "1:806641563351:web:81dd1e60e64ff934b12292",
    measurementId: "G-ZWE51Z5LTD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default function LoginScreen (props){

    const [login, loginAction] = useContext(UsuarioContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false);

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

    function iniciarSesion(){
        loginAction({
            type:'sign', data:{
                email, password
            }
        })
        goToScreen(props, 'Principal')
    }

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
            auth().createUserWithEmailAndPassword(email, password)
            goToScreen(props, 'Principal')
    }
}