import React from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native' 
import {mainStyles } from '@styles/General'
import Colors from '@styles/Colors'

function MyButton(props) {
    const sButton = props.transparent?mainStyles.btnTransparent:mainStyles.btnMain
    const sText = props.transparent?{color: Colors.ICONCOLOR}: null

    return(
        <TouchableOpacity style={[sButton, props.style]}
            onPress={ props.onPress}>
            <Text style={[mainStyles.btntxt, sText]}>{props.titulo}</Text>
        </TouchableOpacity>
    )
}

export default MyButton