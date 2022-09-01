import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
 return (
     <>
        <Text style={styles.title}>Hoje: </Text>
        <Text style={styles.texto}>Minimo: {props.dataA.min}</Text>
        <Text style={styles.texto}>Maximo: {props.dataA.max}</Text>
        <Text style={styles.texto}>Descrição: {props.dataA.description}</Text>
        <Text style={styles.title}>Amanhã: </Text>
        <Text style={styles.texto}>Mínimo: {props.dataB.min}</Text>
        <Text style={styles.texto}>Máximo: {props.dataB.max}</Text>
        <Text style={styles.texto}>Descrição: {props.dataB.description}</Text>

    </>
    );
 }

   const styles = StyleSheet.create({
    title:{
        fontSize: 17,
        marginTop:10,
        fontWeight: 'bold',

    },
       texto:{
           fontSize: 17,
           marginTop:10
       }
   });
