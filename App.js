import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } 
from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [cidade, setCidade] = useState("");
  const [dadosA, setDadosA] = useState("");
  const [dadosB, setDadosB] = useState("");


  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description&key=11568a6c&city_name=${cidade},SP`);
    setDadosA(response.data.forecast[0]);
    setDadosB(response.data.forecast[1]);

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
          onChangeText={data=>setCidade(data)}
        />
      </View>

        <TouchableOpacity style={styles.botao} onPress={buscaCep}>
          <Text style={styles.textoBotao}>Procurar</Text>
        </TouchableOpacity> 

    <Tempo dataA={dadosA}
            dataB={dadosB}
      /> 
       </View>
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
	  width: 320,
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
    cidade: {
        fontSize: 16,
    },

    textobloco: {
      color: '#fff',
		  fontSize: 30,
		  padding: 20,
    },
    input:{
        width: '100%',	
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