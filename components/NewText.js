import React from 'react';
import { Text } from 'react-native';

export default NewText = ({ h1, h2, h3, h4, h5, p, bold, light, dark, primary, children }) => {
    return (
        <Text
            style={[
                { fontFamily: 'Poppins_400Regular' },
                h1 && { fontSize: 48 },
                h2 && { fontSize: 32 },
                h3 && { fontSize: 20 },
                h4 && { fontSize: 18 },
                h5 && { fontSize: 16 },
                p && { fontSize: 12 },
                bold && { fontFamily: 'Poppins_700Bold' },
                light && { color: '#d3d3d3' },
                dark && { color: '#0d0f35' },
                primary && { color: '#424d8c' },
            ]}
        >
            {children}
        </Text>
    );
};