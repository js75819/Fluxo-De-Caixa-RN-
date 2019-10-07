import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground,} from 'react-native';
import firebase from './Firebaseconection';


export default class Preload extends Component {
  static navigationOptions = {
    title:null,
    header:null
  }
  constructor(props) {
    super(props);
    this.state={};
      firebase.auth().onAuthStateChanged((user)=>{
     if(user) {
       this.props.navigation.navigate('Interna');
     }else{
       this.props.navigation.navigate('Home');
     }
    });
  }
  cadastrar() {
     this.props.navigation.navigate('Cadastro');
  }
  login () {
     this.props.navigation.navigate('Login');
  } 
  render(){
    return (
        <ImageBackground source={require('../img/fundo.jpg')} style={styles.bg}>
        <View style={styles.container}>
        <Text style={styles.titulo}>DataBase JB</Text>
        </View>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
   bg:{
     flex:1,
     width:null
   },
   titulo:{
     fontSize:40,
     color:'#fff',
     backgroundColor:'transparent'
   },
   container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',

   }
});