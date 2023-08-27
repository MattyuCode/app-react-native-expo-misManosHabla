import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Numeros() {
  const navigation = useNavigation();
  const [buscarTexto, setBuscarTexto] = useState("");

  const numeros = [
    { id: 1, title: "UNO", number: 1 },
    { id: 2, title: "DOS", number: 2 },
    { id: 3, title: "TRES", number: 3 },
    { id: 4, title: "CUATRO", number: 4 },
    { id: 5, title: "CINCO", number: 5 },
    { id: 6, title: "SEIS", number: 6 },
    { id: 7, title: "SIETE", number: 7 },
    { id: 8, title: "OCHO", number: 8 },
    { id: 9, title: "NUEVE", number: 9 },
    { id: 10, title: "DIEZ", number: 10 },
  ];

  const renderData = ({ item }) => {
    if (
      buscarTexto &&
      !item.title.toUpperCase().includes(buscarTexto.toUpperCase())
    ) {
      return null;
    }

    //NOTE: MOSTRAR TEXTO DEL HTML CON LOS DATOS QUE NECESITAMOS
    return (
      <TouchableOpacity
        style={styles.boton}
        onPress={() =>
          navigation.navigate("VistaNumeros", {
            // FIXME: ESTO ES LO QUE SE MANDA EL EL ROUTE DESDE EL MODALS
            numerosSeleccionados: item.title,
          })
        }
      >
        <Text style={styles.botonTexto}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  //BUG: PARA MOSTRAR TODOS LOS BOTONES CREADOS EN LA FUNCION DE RENDERDATA
  return (
    <View style={styles.container}>
      <Text style={styles.TextoEncabezado}>LOS NÚMEROS</Text>
      <TextInput
        style={styles.inputBuscar}
        placeholder="Buscar números..."
        value={buscarTexto}
        onChangeText={(text) => setBuscarTexto(text)}
      />

      <FlatList
        data={numeros}
        numColumns={3}
        renderItem={renderData}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.boton1}
        onPress={() => navigation.navigate("INICIO")}
      >
        <AntDesign name="caretleft" size={20} color="white" />

        <Text style={styles.botonText1}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  boton: {
    width: "30%",
    backgroundColor: "#02d2ed",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 8,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 4,
  },
  botonTexto: {
    color: "white",
    fontSize: 18,
  },
  TextoEncabezado: {
    color: "#ffff",
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "#4af740",
    fontSize: 30,
    fontWeight: 700,
    borderRadius: 15,
    padding: 25,
  },
  inputBuscar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  boton1: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    width: "50%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    marginTop: 30,
  },
  botonText1: {
    color: "white",
    fontSize: 16,
  },
});
