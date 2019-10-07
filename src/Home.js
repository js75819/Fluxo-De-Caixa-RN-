import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title:null,
    header:null
  }
  constructor(props) {
    super(props);
    this.state={};
    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
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
        <View style={styles.btnarea}>
           <TouchableHighlight style={styles.button} onPress={this.cadastrar}>
           <Text style={styles.btntext}>Cadastrar</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.button} onPress={this.login}>
           <Text style={styles.btntext}>Login</Text>
           </TouchableHighlight>
        </View>
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

   },
   btnarea:{
     marginTop:30
   },
   button:{
     backgroundColor:'#000',
     margin:10,
     height:40,
     width:200,
     color:'#fff',
     fontSize:30
   },
   btntext:{
     color:'#fff',
     fontSize:30,
     textAlign:'center',
   }
});