import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

function Apostila_004_ativ() {
  const [entrada, setEntrada] = useState('');
  const [entrada1, setEntrada1] = useState('');
  const [mensagem, setMensagem] = useState('Inserir o nome e sobrenome');

    function apresentaMensagem() {
        setMensagem(entrada+''+Entrada1);
        setEntrada('');
        setEntrada1('');
}

  return ( 
    <View style={styles.container}>
      <Text style={styles.texto}>Atividade Apostila 4</Text>

      <Text style={styles.txtSaida}>{mensagem}</Text>
      <TextInput style={styles.txtEntrada}
            onChangeText={ (inputEntrada) => setEntrada(inputEntrada)}
            value={entrada}
      />

<Text style={styles.txtSaida}>{mensagem}</Text>
      <TextInput style={styles.txtEntrada}
            onChangeText={ (inputEntrada) => setEntrada1(inputEntrada)}
            value={entrada1}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => apresentaMensagem()}
      >
            <Text style={styles.textButton}>
              Exibir Texto
            </Text>
      </TouchableOpacity>

    </View>
  );
}
export default Apostila_004_ativ;