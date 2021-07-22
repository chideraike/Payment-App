import React from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

export default function TransactionsImage() {
    let spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 7000,
                delay: 1500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={{ margin: 40 }}>
            <Animated.View
                style={[
                    styles.circleOuter,
                    { transform: [{ rotate: spin }] }
                ]}
            >
                <UserFriendImage
                    style={{
                        top: 5,
                        left: 5,
                    }}
                />
                <UserFriendImage
                    style={{
                        top: 5,
                        right: 5,
                    }}
                />
                <UserFriendImage
                    style={{
                        bottom: 5,
                        left: 5,
                    }}
                />
                <UserFriendImage
                    style={{
                        bottom: 5,
                        right: 5,
                    }}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.circleInner}>
                        <View
                            style={{
                                height: 170,
                                width: 170,
                                borderRadius: 85,
                                backgroundColor: '#e9f0fb',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View style={styles.userPicture}>
                                <View style={styles.userImg}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}

const UserFriendImage = ({ style }) => {
    return (
        <View style={[styles.userFriendImage, style]}></View>
    )
}

const styles = StyleSheet.create({
    circleOuter: {
        alignSelf: 'center',
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: '#b4c5e5',
    },
    userFriendImage: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'gold',
        position: 'absolute',
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    circleInner: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4c5e5',
        height: 210,
        width: 210,
        borderRadius: 125,
        borderWidth: 2,
        borderColor: 'white',
    },
    userPicture: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: '#424d8c',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    userImg: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#aa7465',
    },
})
