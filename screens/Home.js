import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import NewText from '../components/NewText'
import NewButton from '../components/NewButton'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <NewText>Home Screen</NewText>
            <NewButton title="Transactions" onClick={() => navigation.navigate('Transactions')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0fb',
    },
})
