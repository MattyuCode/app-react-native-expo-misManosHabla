import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Colores() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const colores = [
    { id: 1, title: "ROJO" },
    { id: 2, title: "AZUL" },
    { id: 3, title: "MORADO" },
    { id: 4, title: "VERDE" },
    { id: 5, title: "ROSA" },
    { id: 6, title: "CAFÉ" },
    { id: 7, title: "NEGRO" },
    { id: 8, title: "AMARILLO" },
    { id: 9, title: "NARANJA" },
  ];

  const renderData = ({ item }) => {
    if (
      searchText &&
      !item.title.toUpperCase().includes(searchText.toUpperCase())
    ) {
      return null;
    }

    return (
      <TouchableOpacity
        style={styles.boton}
        onPress={() =>
          navigation.navigate("VistaColores", { colorsSelected: item.title })
        }
      >
        <Text style={styles.botonTexto}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.T3xto5}>LOS COLORES</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar colores..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={colores}
        numColumns={2}
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
    // flex: 1,
    padding: 16,
    
  },
  boton: {
    // flex: 1,
    width: "48%",
    backgroundColor: "#14c3dc",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 4,
  },
  icono: {
    marginBottom: 8,
  },
  botonTexto: {
    color: "white",
    fontSize: 18,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  T3xto5: {
    color: "#ffff",
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "#145ddbc2",
    // marginTop: 50,
    fontSize: 30,
    fotWeight: 700,
    borderRadius: 15,
    padding: 25,
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
    // fontWeight: 600,
  },
});
