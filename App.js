import React,{Component, useState} from 'react';
import { Text, TextInput, View, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [value, onChangeText] = React.useState('');
  const [value1, onChangeNumber] = React.useState('');  
  return (
    <View
      style={{backgroundColor: 'green',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Enter your name</Text>
      <TextInput
      style={{ height: 40, borderColor: 'yellow', borderWidth: 1, width: 150, borderRadius: 10, backgroundColor: 'green'}}
      onChangeText={text => onChangeText(text)}

      value={value}
    />
     <Text>Enter your age</Text>
     <TextInput
      style={{ height: 40, borderColor: 'yellow', borderWidth: 1, width: 100, borderRadius: 10, backgroundColor: 'green' }}
      onChangeText={text => onChangeNumber(text)}
      value={value1}
    />

<TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => Alert.alert(`My name is ${value} and my age is ${value1}`)}>
          <Text style={styles.TextStyle}> ENTER </Text>
            
          </TouchableOpacity>
                

    </View>
  )
    }
  const styles = StyleSheet.create({
    SubmitButtonStyle: {
 
     
      borderRadius:10,
      borderWidth: 1,
      borderColor: 'yellow'

    },
   
    TextStyle:{
        color:'red',
        textAlign:'center',
        
        borderRadius:10
    }
  });
  

  

export default App;