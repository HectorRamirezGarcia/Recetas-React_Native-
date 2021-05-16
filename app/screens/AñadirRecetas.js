import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, Alert, BackHandler, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Colors from '@styles/Colors'
import MyButton from '@components/MyButton'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UsuarioContext } from '@context/UsuarioContext'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export default function AñadirRecetas() {
    return (
        <View><Text>Hola</Text></View>
    );
}