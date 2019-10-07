import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HistoricoItem extends Component {

  constructor(props){
      super(props);
      let bg = '#1E90FF';
      if(this.props.data.type == 'despesa') {
        bg = '#C0C0C0';
      }
      this.state = {
        bg:bg
      };
  }

  render () {
    return (
       <View style={[styles.hist, {backgroundColor:this.state.bg}]}>
      <Text>{this.props.data.type}</Text>
      <Text>R$ {this.props.data.valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   hist:{
     flexDirection:'row',
     flex:1,
     height:40,
     alignItems:'center',
     justifyContent:'space-between',
     paddingLeft:20,
     paddingRight:20
     }
});