import * as React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import NewText from '../components/NewText'

const DATA = [
    {
        id: 0,
        type: 'sent',
        amount: 150,
        details: 'Payment to Clients',
    },
    {
        id: 1,
        type: 'receive',
        amount: 250,
        details: 'Salary from company',
    },
    {
        id: 2,
        type: 'loan',
        amount: 400,
        details: 'for the car',
    },
    {
        id: 3,
        type: 'sent',
        amount: 100,
        details: 'money to babe',
    },
    {
        id: 4,
        type: 'loan',
        amount: 200,
        details: `for Sam's computer`,
    },
    {
        id: 5,
        type: 'receive',
        amount: 340,
        details: 'Payment from freelance',
    },
]

export default function History() {
    const [isFetching, setIsFetching] = React.useState(false);

    const fetchData = () => {
        setTimeout(() => {
            setIsFetching(false)
        }, 2000)
    }

    const onRefresh = () => {
        setIsFetching(true);
        fetchData()
    }

    const renderItem = ({ item }) => (
        <HistoryItem
            type={item.type}
            amount={item.amount}
            details={item.details}
        />
    )

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.historyContainer}
            refreshControl={
                <RefreshControl
                    refreshing={isFetching}
                    onRefresh={onRefresh}
                    colors={['#fff']}
                    progressBackgroundColor="#424d8c"
                    tintColor="#424d8c"
                />
            }
        />
    )
}

const HistoryItem = ({ type, amount, details }) => {
    let name, title, message

    switch (type) {
        case 'sent':
            name = 'arrow-up-outline'
            title = 'Sent'
            message = 'Sending '
            break
        case 'receive':
            name = 'arrow-down-outline'
            title = 'Receive'
            message = 'Receiving '
            break
        case 'loan':
            name = 'cash-outline'
            title = 'Loan'
            message = 'Loan '
            break
    }

    return (
        <View style={styles.historyItemContainer}>
            <View style={styles.historyItemIcon}>
                <Ionicons name={name} size={30} color="#0d0f35" />
            </View>
            <View style={{ flex: 7 }}>
                <NewText bold dark>{title}</NewText>
                <NewText light p>{message}{details}</NewText>
            </View>
            <View style={{ flex: 1 }}>
                <NewText bold dark p>${amount}</NewText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    historyContainer: {},
    historyItemContainer: {
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
    historyItemIcon: {
        flex: 1,
        padding: 10,
        borderRadius: 20,
        marginRight: 15,
        backgroundColor: '#b4c5e5',
        alignItems: 'center',
    },
})
