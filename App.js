import { React } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';

export default function App() {
  return (
    <View style={styles.container}>
  
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Meteorologia</Text>
      </View>
  
      <View>
        <Text>Cidade:</Text>
        <TextInput
          placeholder='Digite sua cidade'
          style={styles.input}
        />
      </View>

      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBloco}>Procurar</Text>
        </TouchableOpacity>
      </View>
    <Tempo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
    alignItems: 'center',
    justifyContent: 'center',
	  width: '55%',
    height: '5%',
	  backgroundColor: '#C6DCE4',
    borderRadius: 5,
    },

    textobloco: {
      color: '#fff',
      fontSize: 45,
      padding: 20,
    },
  
    botao: {
      padding: 20 ,
    },
  
    textobotao:{
      color: '#fff',
      fontSize: 27,
    },
    blocoGeral:{
      width: '30%',	
	    color: '#607EAA',
	    borderBottomWidth:1,
    }
  }); 