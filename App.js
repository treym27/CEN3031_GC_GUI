import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
   /* fetch('localhost:3000/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
      },
  body: JSON.stringify({
    username: 'yourValue',
    password: 'yourOtherValue',
      }),
    }) */
  }
  render() {
    return (

      <View style={styles.container}>
        <Text> </Text>
        <Text> </Text>
        <Text style = {styles.header}>GATORCHAT</Text>
        <Image
          style={{width: 275, height:275}}
          source={{uri: 'https://i.imgur.com/391Jrm4.png'}}
          />
    
     <TextInput
        style={{fontSize: 24, fontFamily: 'sans-serif-thin', height: 40, width: 250, color: 'orange', borderBottomColor: 'orange', borderBottomWidth: 3}}
        underlineColorAndroid={'transparent'}
        placeholder = 'USERNAME'
        placeholderTextColor = 'orange'
     />
      
     <TextInput
        style={{fontSize: 24, fontFamily: 'sans-serif-thin', height: 40, width: 250, color: 'orange', borderBottomColor: 'orange', borderBottomWidth: 3, marginBottom: 5}}
        underlineColorAndroid={'transparent'}
        secureTextEntry = {true}
        placeholder = 'PASSWORD'
        placeholderTextColor = 'orange'
     />

     <Button
        onPress={this._onPressButton}
        //marginBottom = '10'
        title = "LOGIN"
        color = 'orange'
        
      />
      <Text> </Text>
     <Button
        onPress={this._onPressButton}
        title = "NEW USER? SIGN UP HERE!"
        color = 'blue'
      />
      <Text> </Text>
     <Button
        onPress={this._onPressButton}
        title = "FORGOT PASSWORD?"
        color = 'blue'
      />

     </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 50,
    fontFamily: 'notoserif',
    color: 'green',
  },
});
