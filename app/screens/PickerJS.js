import React, { Component, useState } from "react";
import { View, Text, Picker, StyleSheet } from 'react-native'


state = {
    name: ''
};

const PickerJS = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Facil" value="java" />
                <Picker.Item label="Normal" value="js" />
                <Picker.Item label="Dificil" value="jsp" />
            </Picker>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Primer Plato" value="java" />
                <Picker.Item label="Segundo Plato" value="js" />
                <Picker.Item label="Postre" value="jsp" />
            </Picker>
        </View>
    );
}

export default PickerJS
