import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
 return (
     <>
        <Text style={styles.texto}>Minimo: {props.data.min}</Text>
        <Text style={styles.texto}>Maximo: {props.data.max}</Text>
        <Text style={styles.texto}>Descricao: {props.data.description}</Text>
    </>
    );
 }

   const styles = StyleSheet.create({
       texto:{
           fontSize: 17,
           marginTop:10
       }
   });
