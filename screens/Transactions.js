import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import NewText from '../components/NewText'
import NewButton from '../components/NewButton'
import Tags from '../components/Tags'

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
                <NewButton title="See Details" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0fb',
    },
})
