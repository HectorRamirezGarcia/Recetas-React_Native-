import React,  {Component, useState} from 'react'
import { Text, View, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import { mainStyles} from '@styles/General'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import Colors from '@styles/Colors'

function goToScreen(props, routename){
    props.navigation.navigate(routename)
}

export default function RecuperarPasswordScreen (props){

    return(
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{backgroundColor: Colors.WHITE}}>
            <StatusBar backgroundColor={Colors.ICONCOLOR} translucent={true}/>
            <ToolBar titulo='Contraseña'
            onPressLeft={()=> goToScreen(props, 'Login')}
            iconLeft={require('@recursos/images/back.png')}/>
            <View style={[mainStyles.container, {padding: 20}]}>
                <Text style={mainStyles.titleText}>Escribe tu correo para recuperar tu contraseña</Text>
            </View>
            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
            <View style={ mainStyles.btnMain}>
                <TouchableOpacity onPress={()=> goToScreen(props, 'Login')}>
                    <Text style={ mainStyles.btntxt}>Recuperar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}