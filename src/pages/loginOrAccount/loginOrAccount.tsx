import React from "react";
import { ImageBackground, View } from "react-native";
import { Button } from "react-native-paper";
import { loginOrAccountStyle } from "./loginOrAccountStyle";

export default function LoginOrAccount() {
    return (
        <View style={loginOrAccountStyle.container}>
            <ImageBackground
                source={require('../../assets/account.png')}
                style={loginOrAccountStyle.imageBackground}
            >
            </ImageBackground>
            <View style={loginOrAccountStyle.viewButton}>
                <Button
                    mode="elevated"
                    style={loginOrAccountStyle.buttonInit}
                >
                    Iniciar
                </Button>
                <Button
                    mode="contained"
                    buttonColor="#5EC57E"
                    style={loginOrAccountStyle.button}
                >Cadastrar
                </Button>
            </View>
        </View>
    )
}