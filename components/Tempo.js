import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo() {
 return (
     <>
        <Text style={styles.texto}>Minimo:</Text>
        <Text style={styles.texto}>Maximo:</Text>
        <Text style={styles.texto}>Descricao:</Text>
    </>
    );
 }

   const styles = StyleSheet.create({
       texto:{
           fontSize: 17,
           marginTop:10
       }
   });
