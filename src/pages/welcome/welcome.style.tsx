import { StyleSheet } from 'react-native';

export const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%'
    },
    button: {
        marginBottom: 22,
        borderRadius: 10,
        width: '60%'
    }
})