import { React } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } 
from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [dados, setDados] = useState();
  const [cidade, setCidade] = useState();

  async function buscaCep(){
    const resposta= await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=11568a6c&city_name=CapaoRedondo,SP');
    setDados(resposta.data.forecast[0]);
  }

  return (
    <View style={styles.container}>
  
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Meteorologia</Text>
      </View>
  
      <View>
        <Text style={styles.cidade}>Cidade:</Text>
        <TextInput
          placeholder='Digite sua cidade'
          style={styles.input}
          onKeyPress={buscaCep}
        />
      </View>

      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBloco}>Procurar</Text>
        </TouchableOpacity>
      </View>
    <Tempo data={dados}/>
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
    input:{
      fontSize: 15,
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
    }
  }); 