import { StyleSheet } from 'react-native';

export const loginStyle= StyleSheet.create({
    container:{
        flex:1,

    },
    viewImage:{
        alignItems:'center',
        padding:10
    },
    image:{
        width:'70%',
        position:"relative",
        marginTop:-45
    },
    viewInput:{
        padding:3,
        alignItems:'center',
        marginTop:-100
    },
    input:{
        width:'90%',
        margin:3
    },
    viewButton:{
        alignItems:'center',
        marginTop:80
    },
    button:{
        borderRadius:9,
        width:'65%'
    },
    viewForgotPassword:{
        alignItems:'center',
        marginTop:20
    }
})