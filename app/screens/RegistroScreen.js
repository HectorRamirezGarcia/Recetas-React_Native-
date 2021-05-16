import React, { useState, useContext } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native'
import { mainStyles, registroStyles } from '@styles/General'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import Colors from '@styles/Colors'
import { UsuarioContext } from '@context/UsuarioContext'
import { CheckBox, SocialIcon, Button } from 'react-native-elements'
import * as firebase from 'firebase'
import Snackbar from 'react-native-snackbar'

function goToScreen(props, routename){
    props.navigation.navigate(routename)
}

export default function RegistroScreen(props) {

    const [login, loginAction] = useContext(UsuarioContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false);

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: Colors.WHITE }}>
            <StatusBar backgroundColor={Colors.ICONCOLOR} translucent={true} />
            <ToolBar titulo='Registrarse'
                onPressLeft={() => goToScreen(props, 'Login')}
                iconLeft={require('@recursos/images/back.png')} />
            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Crea tu Cuenta</Text>
                <MyTextInput placeholder='Nombres' image='user' />
                <MyTextInput placeholder='Apellidos' image='user' />
                <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user' 
                value={email} onChangeText={(email)=> setEmail(email)} image='envelope' />
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true} 
                secureTextEntry={hidePassword} onPress={() => setHidePassword(!hidePassword)} value={password} onChangeText={(password)=> setPassword(password)}
                />
                <CheckBox
                    containerStyle={registroStyles.checkBox}
                    textStyle={{ color: Colors.ICONCOLOR }}
                    title='He leído y acepto los términos y condiciones'
                    checked={false}
                    checkedColor={Colors.ICONCOLOR}
                />
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() =>
                        registro(props)}>
                        <Text style={mainStyles.btntxt}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: Colors.ICONCOLOR }}>¿Ya tienes una cuenta? </Text>
                    <Button title="Inicia Sesión" onPress={() => goToScreen(props, 'Login')} type="clear" />
                </View>
            </View>
        </ScrollView>
    )

    function registro(){
        loginAction({
            type:'sign', data:{
                email, password
            }
        })
        firebase.auth().createUserWithEmailAndPassword(email, password).then((email) => {
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