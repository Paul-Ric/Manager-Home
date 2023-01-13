/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { loginStyle } from './login.style';
import { TextInput, Button, Text } from 'react-native-paper';

export default function Login() {
    const [text, setText] = useState<string>('');
    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.viewImage}>
                <Image
                    source={require('../../assets/logo.png')}
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
                    outlineColor="#fff"
                />
                <TextInput
                    label="Password"
                    value={text}
                    onChangeText={text => setText(text)}
                    mode="outlined"
                    style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                />
            </View>


            <View style={loginStyle.viewButton}>
                <Button
                    style={loginStyle.button}
                    mode="contained-tonal"
                    buttonColor="#fff"
                    onPress={() => console.log('Pressed')}>
                    Entrar
                </Button>
            </View>

            <View style={loginStyle.viewForgotPassword}>
                <Text style={loginStyle.text} variant="titleMedium">Esqueci a senha</Text>
            </View>
        </View>
    );
}
