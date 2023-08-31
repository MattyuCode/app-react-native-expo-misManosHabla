import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Emociones() {
  const navigation = useNavigation();
  const [buscarTexto, setBuscarTexto] = useState("");

  const emociones = [
    { id: 1, title: "AMOR" },
    { id: 2, title: "ENFADADO" },
    { id: 3, title: "FELIZ" },
    { id: 4, title: "MIEDO" },
    { id: 5, title: "PACIENTE" },
    { id: 6, title: "TRISTE" },
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
          navigation.navigate("VistaEmocion", {
            // FIXME: ESTO ES LO QUE SE MANDA EL EL ROUTE DESDE EL MODALS
            emocionSeleccionado: item.title,
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
      <Text style={styles.TextoEncabezado}>LAS EMOCIONES</Text>
      <TextInput
        style={styles.inputBuscar}
        placeholder="Buscar emoción..."
        value={buscarTexto}
        onChangeText={(text) => setBuscarTexto(text)}
      />

      <FlatList
        data={emociones}
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
    width: "auto",
    backgroundColor: "#8f0000",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 8,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 8,
  },
  botonTexto: {
    color: "white",
    fontSize: 18,
  },
  TextoEncabezado: {
    color: "#ffff",
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "#becc00",
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
