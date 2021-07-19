import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import NewText from '../components/NewText'
import NewButton from '../components/NewButton'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <UserInfo />
            <NewButton title="Transactions" onClick={() => navigation.navigate('Transactions')} />
        </SafeAreaView>
    )
}

const UserInfo = () => (
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
        <View></View>
    </View>
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
    }
})
