import React, { Component } from 'react';
import {
    Text, View, StatusBar, Button,
    TouchableHighlight,
    StyleSheet,
    TextInput,
} from 'react-native';
import Colors from '@styles/Colors';
import { db } from '@src/config';
import Snackbar from 'react-native-snackbar'

let addItem = item => {
    db.ref('/items').push({
        name: item
    });
};

export default class AddItem extends Component {
    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        addItem(this.state.name);
        Snackbar.show({
            text: 'Datos guardados con exito',
            duration: Snackbar.LENGTH_LONG,
        })
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar
                    backgroundColor={Colors.ICONCOLOR}
                    barStyle='dark-content'
                    translucent={true}
                />
                <TextInput onChange={this.handleChange} />
                <TouchableHighlight
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}