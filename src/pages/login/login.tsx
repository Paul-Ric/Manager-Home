import React, { useState } from "react";
import { Image, View } from "react-native";
import { loginStyle } from './login.style';
import { TextInput, Button,Text } from 'react-native-paper';

export default function Login() {
    const [text, setText] = useState<string>('')
    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.viewImage}>
                <Image
                    source={require('../../assets/Manager.png')}
                    style={loginStyle.image}
                    resizeMode="contain"
                />

            </View>
            <View style={loginStyle.viewInput}>

                <TextInput
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                    mode="outlined"
                    style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor='#000'
                />
                <TextInput
                    label="Password"
                    value={text}
                    onChangeText={text => setText(text)}
                    mode="outlined"
                    style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor='#000'
                />
            </View>
      

            <View style={loginStyle.viewButton}>
                <Button
                    style={loginStyle.button}
                    mode="contained"
                    buttonColor="#ab212e"
                    onPress={() => console.log('Pressed')}>
                    Entrar
                </Button>
            </View>

            <View style={loginStyle.viewForgotPassword}>
                <Text variant="titleMedium">Esqueci a senha</Text>
            </View>
        </View>
    )
}
