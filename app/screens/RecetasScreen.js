import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddItem from '@screens/AddItem'
import ListItem from '@screens/ListItem'
import Colors from '@styles/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase'


const Tab = createBottomTabNavigator();

export default function RecetasScreen(props) {
    return (
        <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ activeTintColor: Colors.ICONCOLOR, }}>
            <Tab.Screen name="AddItem" component={AddItem} options={{
                tabBarLabel: 'Añadir',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="add" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="ListItem" component={ListItem} options={{
                tabBarLabel: 'Lista',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="list" color={color} size={size} />
                ),
            }} />
      </Tab.Navigator>
    );
}