import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } 
from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [cidade, setCidade] = useState("peruibe");
  const [dados, setDados] = useState("");

  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description&key=11568a6c&city_name=${cidade},SP`);
    setDados(response.data.forecast[0]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>

        <Text style={styles.titulo}>Meteorologia</Text>

  
      <View>
      <View style={styles.blocoGeral}>
        <Text style={styles.cidade}>Cidade:</Text>
        <TextInput
          placeholder='Digite sua cidade'
          style={styles.input}
          onChangeText={(value)=>setCidade(value)}
        />
      </View>

        <TouchableOpacity style={styles.botao} onPress={buscaCep}>
          <Text style={styles.textoBotao}>Procurar</Text>
        </TouchableOpacity> 

      </View>
    <Tempo data={dados}/> 
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7CADB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
    alignItems: 'center',
    justifyContent: 'center',
	  width: 300,
	  backgroundColor: '#92A9BD',
    borderRadius: 5,
    },
    titulo:{
      fontSize: 25,
      marginBottom: 15,
      marginTop: 10,
      fontWeight: 'bold',
      color: "#1C3879",
    },

    textobloco: {
      color: '#fff',
		  fontSize: 30,
		  padding: 20,
    },
    input:{
        width: '80%',	
        color: '#fff',
        borderBottomWidth:1,
    },
  
    botao: {
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 9,
      backgroundColor: '#607EAA'
    },
  
    textobotao:{
      color: '#fff',
      fontSize: 27,
    },
    blocoGeral:{
      width: '30%',	
	    color: '#607EAA',
    }
  }); 