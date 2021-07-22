import * as React from 'react'
import { StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native'

import NewText from '../components/NewText'
import NewButton from '../components/NewButton'

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

const Tags = () => {
    const [clickedTag, setClickedTag] = React.useState('All')
    const TAGS = [
        {
            id: 0,
            name: 'All',
        },
        {
            id: 1,
            name: 'Income'
        },
        {
            id: 2,
            name: 'Expense'
        },
        {
            id: 3,
            name: 'Loan'
        },
    ]

    const onTagClick = (newTag) => {
        setClickedTag(newTag)
    }

    const Tag = ({ title, onClick, style, color }) => (
        <TouchableHighlight
            underlayColor="#b4c5e5"
            style={[styles.tag, style]}
            onPress={onClick}
        >
            <NewText style={color}>{title}</NewText>
        </TouchableHighlight>
    )

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingBottom: 20,
                    paddingTop: 20,
                }}
            >
                {TAGS.map((tag) => (
                    <Tag
                        key={tag.id}
                        title={tag.name}
                        onClick={() => onTagClick(tag.name)}
                        style={
                            (clickedTag == tag.name) ? { backgroundColor: '#424d8c' } : { backgroundColor: 'white' }
                        }
                        color={
                            (clickedTag == tag.name) ? { color: '#fff' } : { color: '#808080' }
                        }
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0fb',
    },
    tag: {
        marginRight: 5,
        marginLeft: 5,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
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
