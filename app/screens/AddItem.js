import React, { Component, useState } from "react";

import {
    Text, View, StatusBar,
    TextInput,
    ScrollView

} from 'react-native';

import { db } from '@src/config';
import { mainStyles, registroStyles } from '@styles/General'
import Snackbar from 'react-native-snackbar'
import MyButton from '@components/MyButton'
import Colors from '@styles/Colors';
import PickerExemple from './PickerJS.js';
import * as firebase from 'firebase'


var uid;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      uid = user.uid;
    } else {
      // User not logged in or has just logged out.
    }
  });

let addItems = (name, time, ing, desc) => {
    db.ref('/items/' + uid).push({
        name: name,
        time: time,
        ing: ing,
        desc: desc,

    });
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });

export default class AddItem extends Component {
    state = {
        name: '', time: '', ing: '', desc: ''
    };

    handleChangeName = n => {
        this.setState({
            name: n.nativeEvent.text,
        });
    };

    handleChangeTime = t => {
        this.setState({
            time: t.nativeEvent.text,
        });
    };

    handleChangeIng = i => {
        this.setState({
            ing: i.nativeEvent.text,
        });
    };

    handleChangeDesc = d => {
        this.setState({
            desc: d.nativeEvent.text,
        });
    };

    handleChangePicker = o => {
        this.setState({
            o: o.nativeEvent.text,
        });
    };


    handleSubmit = () => {
        addItems(this.state.name, this.state.time, this.state.ing, this.state.desc);
        Snackbar.show({
            text: 'Datos guardados con exito',
            duration: Snackbar.LENGTH_LONG,
        })
    };


    render() {
        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: Colors.WHITE }}>
                <View style={[mainStyles.container, { padding: 50 }]}>
                    <StatusBar
                        backgroundColor={Colors.ICONCOLOR}
                        barStyle='dark-content'
                        translucent={true}
                    />
                    <Text style={{ height: 40, width: "95%", marginBottom: 20 }}>Nombre de la Receta</Text>
                    <TextInput style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginBottom: 20 }} onChange={this.handleChangeName} />
                    <Text style={{ height: 40, width: "95%", marginBottom: 20 }}>Tiempo para hacerla</Text>
                    <TextInput style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginBottom: 20 }} onChange={this.handleChangeTime} />
                    <Text style={{ height: 40, width: "95%", marginBottom: 20 }}>Ingredientes</Text>
                    <TextInput style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginBottom: 20 }} onChange={this.handleChangeIng} />
                    <Text style={{ height: 40, width: "95%", marginBottom: 20 }}>Descripción</Text>
                    <TextInput multiline={true} numberOfLines={4} style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginBottom: 20 }} onChange={this.handleChangeDesc} />

                    <PickerExemple />

                    <MyButton
                        titulo='Añadir'
                        onPress={this.handleSubmit}
                    />
                </View>
                <StatusBar
                    backgroundColor={Colors.ICONCOLOR}
                    barStyle='dark-content'
                    translucent={true}
                />

            </ScrollView>
        );
    }
}