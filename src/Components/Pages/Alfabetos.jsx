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

export default function Alfabetos() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const alfabeto = [
    { id: "1", title: "A" },
    { id: "2", title: "B" },
    { id: "3", title: "C" },
    { id: "4", title: "CH" },
    { id: "5", title: "D" },
    { id: "6", title: "E" },
    { id: "7", title: "F" },
    { id: "8", title: "G" },
    { id: "9", title: "H" },
    { id: "10", title: "I" },
    { id: "11", title: "J" },
    { id: "12", title: "K" },
    { id: "13", title: "L" },
    { id: "14", title: "LL" },
    { id: "15", title: "M" },
    { id: "16", title: "N" },
    { id: "17", title: "Ñ" },
    { id: "18", title: "O" },
    { id: "19", title: "P" },
    { id: "20", title: "Q" },
    { id: "21", title: "R" },
    { id: "22", title: "RR" },
    { id: "23", title: "S" },
    { id: "24", title: "T" },
    { id: "25", title: "U" },
    { id: "26", title: "V" },
    { id: "27", title: "W" },
    { id: "28", title: "X" },
    { id: "29", title: "Y" },
    { id: "30", title: "Z" },
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
          navigation.navigate("VistaAbecedario", {
            alfabetoSeleccionado: item.title,
          })
        }
      >
        <Text style={styles.botonTexto}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.T3xto5}>El ABECEDARIO</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar abecederio..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={alfabeto}
        numColumns={5}
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
    width: 55,
    // height: 70,
    backgroundColor: "#008000",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 5,
    padding: 15,
    margin: 4,
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
    marginBottom: 10,
  },
  T3xto5: {
    color: "#ffff",
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "#145ddbc2",
    // marginTop: 50,
    fontSize: 30,
    fotWeight: 700,
    borderRadius: 15,
    padding: 8,
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
    marginTop: 10,
  },
  botonText1: {
    color: "white",
    fontSize: 16,
    // fontWeight: 600,
  },
});
