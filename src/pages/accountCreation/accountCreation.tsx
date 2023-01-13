import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { Image, View } from 'react-native';
import { accountCreationStyle } from './accountCreationStyle';

export default function AccountCreation() {
    return (
        <View style={accountCreationStyle.container} >
            <View style={accountCreationStyle.viewTitle} >
                <Text variant="headlineMedium">Crie sua conta</Text>
            </View>

            <View >

                <TextInput
                    label="CPF"
                    //value={text}
                    // onChangeText={text => setText(text)}
                    mode="outlined"
                    //style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                    style={accountCreationStyle.textInput}

                />
                <TextInput
                    label="Nome"
                    // value={text}
                    //onChangeText={text => setText(text)}
                    mode="outlined"
                    // style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                    style={accountCreationStyle.textInput}
                />
                <TextInput
                    label="Sobrenome"
                    // value={text}
                    //onChangeText={text => setText(text)}
                    mode="outlined"
                    // style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                    style={accountCreationStyle.textInput}
                />
                <TextInput
                    label="Idade"
                    // value={text}
                    //onChangeText={text => setText(text)}
                    mode="outlined"
                    // style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                    style={accountCreationStyle.textInput}
                />
                <TextInput
                    label="Profissão"
                    // value={text}
                    //onChangeText={text => setText(text)}
                    mode="outlined"
                    // style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                    style={accountCreationStyle.textInput}
                />
                <TextInput
                    label="Salario"
                    // value={text}
                    //onChangeText={text => setText(text)}
                    mode="outlined"
                    // style={loginStyle.input}
                    activeOutlineColor="#000"
                    outlineColor="#fff"
                    style={accountCreationStyle.textInput}
                />

            </View>


            <View style={accountCreationStyle.viewButton} >
                <Button
                    //style={loginStyle.button}
                    mode="contained"
                    style={accountCreationStyle.button}
                    buttonColor="#5EC57E"

                    onPress={() => console.log('Pressed')}>
                    Criar
                </Button>
            </View>


        </View>
    )
}