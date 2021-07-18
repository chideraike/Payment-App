import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import NewText from './NewText'

export default function NewButton({ title, onClick }) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onClick}
        >
            <NewText bold white h4>
                {title}
            </NewText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#424d8c',
        margin: 20,
        marginTop: 15,
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
    },
})
