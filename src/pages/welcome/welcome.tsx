import React from "react";
import { Image, View, ImageBackground } from 'react-native';
import { Button } from "react-native-paper";
import { welcomeStyle } from "./welcome.style";
export default function Welcome() {
    return (
        <View style={welcomeStyle.container}>
            <ImageBackground
                source={require('../../assets/welcome.png')}
                style={welcomeStyle.imageBackground}
            >
                <Button
                    mode="contained"
                    buttonColor="#5EC57E"
                    style={welcomeStyle.button}
                >Iniciar
                </Button>
            </ImageBackground>

        </View>
    )
}