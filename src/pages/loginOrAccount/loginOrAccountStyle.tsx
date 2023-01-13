import { StyleSheet } from "react-native";

export const loginOrAccountStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        //justifyContent: "flex-end",
        alignItems: "center",
        width: '100%',
        height: '90%'
    },
    viewButton: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginBottom: 52,
        borderRadius: 10,
        width: '80%',

    },
    buttonInit: {
        borderRadius: 10,
        width: '80%',
        marginBottom: 15
    },

})