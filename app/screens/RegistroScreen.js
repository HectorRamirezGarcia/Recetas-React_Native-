import React, { useState } from 'react'
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
import { CheckBox, SocialIcon, Button } from 'react-native-elements'
import * as firebase from 'firebase'

function goToScreen(props, routename){
    props.navigation.navigate(routename)
}

export default function RegistroScreen(props) {

    const [hidePassword, setHidePassword] = useState(false)

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
                <MyTextInput keyboardType='email-address' placeholder='E-mail'
                    image='envelope' />
                <MyTextInput keyboardType={null} placeholder='Contraseña'
                    onPress={() => setHidePassword(!hidePassword)}
                    keyboardType={null}
                    image='lock' bolGone={true}
                    secureTextEntry={hidePassword}
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
                        goToScreen(props, 'Login')}>
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
}