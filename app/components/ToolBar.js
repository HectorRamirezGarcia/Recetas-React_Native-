import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Colors from '@styles/Colors'

export default function ToolBar(props){

    return (
        <View style={[props.style, { height: 64, marginTop: 24, backgroundColor: Colors.ICONCOLOR }]}>
            {props.titulo && 
                <Text style={{ fontFamily: "Poppins-Medium", 
                    marginTop: 12, textAlign: 'center', fontSize: 25, 
                    color: Colors.WHITE }}>{props.titulo}
                </Text>
            }
            {props.iconLeft &&
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 15 }} onPress={props.onPressLeft}>
                <Image style={{ tintColor: Colors.WHITE, width: 30, height: 30 }} source={props.iconLeft} />
            </TouchableOpacity>
            }
        </View>
    )
}

