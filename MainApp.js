import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import Home from './screens/Home'
import Transactions from './screens/Transactions'

const App = createStackNavigator();

function HomeStack() {
    return (
        <App.Navigator
            initialRouteName="Home"
        >
            <App.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <App.Screen
                name="Transactions"
                component={Transactions}
            />
        </App.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function MainApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: "#424d8c",
                    inactiveTintColor: "#808080",
                    showLabel: false,
                    // keyboardHidesTabBar: true,
                    style: {
                        backgroundColor: "#e9f0fb",
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="home" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Card"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="card-outline" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={HomeStack}
                    options={{
                        tabBarIcon: () => (
                            <AddIcon />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Dollar"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="dollar" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person-circle-outline" color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
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
