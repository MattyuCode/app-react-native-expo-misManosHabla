import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from 'twrnc';

export default function Inicio() {
  const navigation = useNavigation();

  const data = [
    { id: "1", title: "ALFABETOS", name: "Alfabetos" },
    { id: "2", title: "NÚMEROS", name: "Numeros" },
    { id: "3", title: "COLORES", name: "Colores" },
    { id: "4", title: "EMOCIONES", name: "Emociones" },
    { id: "5", title: "DÍAS DE LA SEMANA", name: "DiasSemana" },
  ];

  //NOTE: Para ejecutar la funcion y hacer la llamada de cada component
  const handleBotonPress = (item) => {
    navigation.navigate(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.boton}
      onPress={() => handleBotonPress(item.name)}
    >
      <Text style={styles.botonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.T3xto}>APRENDIENDO LENGUAJE DE SEÑAS</Text>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  boton: {
    // flex: 1,
    // height: 70,
    width: "auto",
    backgroundColor: "#4a98f7",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 6,
    textAlign: "center",
  },
  icono: {
    fontSize: 18,
  },
  botonText: {
    color: "white",
  },

  T3xto: {
    color: "#4a98f7",
    textAlign: "center",
    marginBottom: 50,
    marginTop: 50,
    fontSize: 30,
    // fotWeight: 600,
  },
});
