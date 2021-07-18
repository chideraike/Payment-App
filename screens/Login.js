import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import NewText from '../components/NewText'

export default function Login() {
    return (
        <View>
            <View style={styles.logo}></View>
            <InputContainer title="Email Address" >
                <View style={styles.inputIconLeft}>
                    <Ionicons name="mail-outline" size={24} color="#0d0f35" />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="user@mail.com"
                    placeholderTextColor="#808080"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    autoCorrect={false}
                />
                <View style={styles.inputIconRight} />
            </InputContainer>
            <InputContainer title="Password" >
                <View style={styles.inputIconLeft}>
                    <Ionicons name="lock-closed-outline" size={24} color="#0d0f35" />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="********"
                    placeholderTextColor="#808080"
                    autoCapitalize="none"
                    autoCompleteType="password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <View style={styles.inputIconRight}>
                    <Ionicons name="eye-outline" size={24} color="#0d0f35" />
                </View>
            </InputContainer>
        </View>
    )
}

const InputContainer = ({ title, children }) => (
    <View style={styles.inputContainer}>
        <View style={styles.inputTitle}>
            <NewText grey h4>{title}</NewText>
        </View>
        <View style={styles.inputBody}>
            {children}
        </View>
    </View>
)

const styles = StyleSheet.create({
    logo: {
        height: 130,
        width: 130,
        borderRadius: 65,
        backgroundColor: '#424d8c',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 100,
    },
    inputContainer: {
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
    inputTitle: {
        paddingLeft: 10,
        paddingBottom: 10,
    },
    inputBody: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputIconLeft: {
        flex: 1,
    },
    input: {
        flex: 7,
        fontFamily: 'Poppins_400Regular',
        color: '#303035',
        fontSize: 18,
    },
    inputIconRight: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
})
