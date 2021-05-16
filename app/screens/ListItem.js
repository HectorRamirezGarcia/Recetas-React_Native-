import React, { Component } from 'react';
import { Text, View, StatusBar, Button, StyleSheet } from 'react-native';
import Colors from '@styles/Colors'
import { db } from '@src/config';
import ItemComponent from '@components/ItemComponent';


let itemsRef = db.ref('/items');
export default class ListItem extends Component {
    state = {
        items: []
    };
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar
                    backgroundColor={Colors.ICONCOLOR}
                    barStyle='dark-content'
                    translucent={true}
                />
                {this.state.items.length > 0 ? (
                    <ItemComponent items={this.state.items} />
                ) : (
                    <Text>No items</Text>
                )}
            </View>
        );
    }
}