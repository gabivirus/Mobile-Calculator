import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function summ()
  {
    const result = parseFloat(num1) + parseFloat(num2);

    alert('O resultado é: '+ result)
  }
  function sub()
  {
    const result = parseFloat(num1) - parseFloat(num2);

    alert('O resultado é: '+ result)
  }
  function mult()
  {
    const result = parseFloat(num1) * parseFloat(num2);

    alert('O resultado é: '+ result)
  }
  function div()
  {
    const result = parseFloat(num1) / parseFloat(num2);

    alert('O resultado é: '+ result)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Soma de Valores </Text>

      <Text style={styles.label}>Primerio Valor:</Text>
      <TextInput
       style={styles.input}
       KeyboardType='numeric'
       placeholder='Digite um número'
       onChangeText={(num1)=>setNum1(num1)}
       />

      <Text style={styles.label}>Primerio Valor:</Text>
      <TextInput 
      style={styles.input} 
      KeyboardType='numeric' 
      placeholder='Digite um número'
      onChangeText={(num2)=>setNum2(num2)}
      />

      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btn} onPress={summ}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={sub}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btn} onPress={mult}>
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={div}>
          <Text style={styles.btnText}>÷</Text>
        </TouchableOpacity>
      </View>
          
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#212121',
    color: '#fff',
    padding: 20,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  input: {
    backgroundColor: '#212121',
    color: '#fff',
    borderColor: '#fff',
    borderBottomWidth: 1,

    margin: 20,
    padding: 10,
    fontSize: 18,
  },
  btnRow:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2da43',
    textAlign: "center",
    padding: 10,
    width: '30%'
  },
  btnText:{
    color: '#212121',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: '1.1rem',
  },
  label: {
    marginLeft: 25,
    color: '#fff',
    marginTop: 25
  }
});
