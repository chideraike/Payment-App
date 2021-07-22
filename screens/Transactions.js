import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

import NewText from '../components/NewText'
import NewButton from '../components/NewButton'
import Tags from '../components/Tags'
import TransactionsImage from '../components/TransactionsImage'

export default function Transactions() {
    return (
        <View style={styles.container}>
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 20,
                        paddingBottom: 10,
                    }}
                >
                    <NewText primary bold h2>Recent Transactions</NewText>
                    <NewText grey h5>See all</NewText>
                </View>
                <Tags />
                <View style={{ margin: 10, marginLeft: 20 }}>
                    <NewText primary bold h2>Today</NewText>
                </View>
                <Receipts />
                <TransactionsImage />
                <NewButton title="See Details" />
            </View>
        </View>
    )
}

const Receipts = () => {
    const Receipt = () => (
        <View style={styles.receipt}>
            <View style={{ flex: 1 }}>
                <SimpleLineIcons name="envelope-letter" size={35} color="#424d8c" />
            </View>
            <View style={{ flex: 4 }}>
                <NewText dark bold h5>Payment</NewText>
                <NewText light p>Payment from Andrea</NewText>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <NewText primary bold p>$30.00</NewText>
            </View>
        </View>
    )

    return (
        <View>
            <Receipt />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0fb',
    },
    receipt: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
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
})
