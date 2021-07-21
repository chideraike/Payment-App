import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import NewText from '../components/NewText'
import History from '../components/History'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <UserInfo navigation={navigation} />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginLeft: 20,
                    marginRight: 20,
                }}
            >
                <View style={styles.overviewContainer}>
                    <NewText primary bold h2>Overview</NewText>
                    <View style={styles.notificationIcon}>
                        <Ionicons name="notifications-outline" size={24} color="#0d0f35" />
                        <View style={styles.notificationIconDot} />
                    </View>
                </View>
                <View>
                    <NewText dark>Sept 13, 2020</NewText>
                </View>
            </View>
            <History />
        </SafeAreaView>
    )
}

const UserInfo = ({ navigation }) => {
    const openTransactions = () => navigation.navigate('Transactions')

    return (
        <View style={styles.userInfoContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Ionicons name="reorder-two-outline" size={24} color="#0d0f35" />
                <Ionicons name="ellipsis-vertical-outline" size={24} color="#0d0f35" />
            </View>
            <View style={styles.userInfoPicture}></View>
            <View style={{ alignItems: 'center' }}>
                <NewText h2 bold primary>Hira Riaz</NewText>
                <NewText h5>UX/UI Designer</NewText>
            </View>
            <View style={styles.statsContainer}>
                <Stat name="Income" onPress={openTransactions}>8900</Stat>
                <View style={styles.line} />
                <Stat name="Expenses" onPress={openTransactions}>5500</Stat>
                <View style={styles.line} />
                <Stat name="Loan" onPress={openTransactions}>890</Stat>
            </View>
        </View>
    )
}

const Stat = ({ name, children, onPress }) => (
    <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={onPress}
    >
        <NewText primary h3>${children}</NewText>
        <NewText p>{name}</NewText>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0fb',
    },
    userInfoContainer: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 30,
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    userInfoPicture: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#aa7465',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    statsContainer: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: 'grey',
        opacity: 0.5
    },
    overviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationIcon: {
        marginLeft: 10,
    },
    notificationIconDot: {
        height: 6.5,
        width: 6.5,
        borderRadius: 2.5,
        borderWidth: 0.5,
        borderColor: 'white',
        backgroundColor: 'red',
        position: 'absolute',
        right: 3,
        top: 4,
    },
})
