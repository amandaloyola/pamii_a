import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

function Apostila_4() {
  const [entrada, setEntrada] = useState('');
  const [mensagem, setMensagem] = useState('Aqui aparece o texto digitador');

    function apresentaMensagem() {
        setMensagem(entrada);
        setEntrada('');
}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo 4</Text>

      <Text style={styles.txtSaida}>{mensagem}</Text>
      <TextInput style={styles.txtEntrada}
            onChangeText={ (inputEntrada) => setEntrada(inputEntrada)}
            value={entrada}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => apresentaMensagem()}
      >
            <Text style={styles.textButton}>
                  Mostrar valor digitado
            </Text>
      </TouchableOpacity>

    </View>
  );
}
export default Apostila_4;