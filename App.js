import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

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

      <View>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBloco}>Procurar</Text>
        </TouchableOpacity>
      </View>

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
	  width: '60%',
	  backgroundColor: '#C6DCE4',
    borderRadius: 5,
    },

    textobloco: {
      color: '#fff',
      fontSize: 20,
      padding: 20,
    },
  
    botao: {
      padding: 20 ,
    },
  
    textobotao:{
      color: '#fff',
      fontSize: 25,
  
    },
  }); 