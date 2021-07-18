import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import Home from './screens/Home'
import Transactions from './screens/Transactions'

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#424d8c",
                inactiveTintColor: "#808080",
                showLabel: false,
                // keyboardHidesTabBar: true,
                style: {
                    backgroundColor: "#e9f0fb",
                    borderTopWidth: 0
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Card"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="card-outline" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <AddIcon />
                    ),
                }}
            />
            <Tab.Screen
                name="Dollar"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="dollar" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-circle-outline" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

export default function MainApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={HomeTabs}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Transactions"
                    component={Transactions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const AddIcon = () => (
    <View style={styles.addIcon}>
        <Entypo name="plus" color="#fff" size={24} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0fb',
    },
    addIcon: {
        backgroundColor: '#424d8c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        width: 45,
    },
})
