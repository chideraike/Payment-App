import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import NewText from './NewText'

export default function NewButton({ title }) {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <NewText bold style={{ color: '#fff' }}>
                {title}
            </NewText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#424d8c',
        margin: 20,
        padding: 20,
        borderRadius: 30,
    },
})
