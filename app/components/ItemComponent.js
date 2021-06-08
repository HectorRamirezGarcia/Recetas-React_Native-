import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '@styles/Colors'
import { List, Checkbox } from 'react-native-paper';
import { mainStyles, registroStyles } from '@styles/General'



export default class ItemComponent extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    render() {
        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: Colors.WHITE }}>
                <View style={[mainStyles.container, { padding: 50 }]}>
                    {this.props.items.map((item, index) => {
                        return (
                            <View key={index}>
                                <List.Section title={"Receta "+index+"                                                              "}>
                                    <List.Accordion
                                        title={item.name}
                                    >
                                        <List.Item title={item.name} />
                                        <List.Item title={item.time} />
                                        <List.Item title={item.ing} />
                                        <List.Item title={item.desc} />
                                    </List.Accordion>
                                </List.Section>
                            </View>
                        );
                    })}
                            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
                    itemsList: {
                    flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    itemtext: {
                    fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});