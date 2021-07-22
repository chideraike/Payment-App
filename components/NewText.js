import React from 'react';
import { Text } from 'react-native';

export default NewText = ({ style, h1, h2, h3, h4, h5, p, bold, white, light, grey, dark, primary, children }) => {
    return (
        <Text
            style={[
                style,
                { fontFamily: 'Poppins_400Regular' },
                h1 && { fontSize: 36 },
                h2 && { fontSize: 28 },
                h3 && { fontSize: 20 },
                h4 && { fontSize: 18 },
                h5 && { fontSize: 16 },
                p && { fontSize: 12 },
                bold && { fontFamily: 'Poppins_700Bold' },
                white && { color: '#fff' },
                light && { color: '#a9a9a9' },
                grey && { color: '#808080' },
                dark && { color: '#0d0f35' },
                primary && { color: '#424d8c' },
            ]}
        >
            {children}
        </Text>
    );
};