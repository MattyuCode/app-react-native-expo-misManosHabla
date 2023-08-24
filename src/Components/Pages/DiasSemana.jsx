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

export default function Inicio() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const diasSemana = [
    { id: "1", title: "LUNES" },
    { id: "2", title: "MARTES" },
    { id: "3", title: "MIERCOLES" },
    { id: "4", title: "JUEVES" },
    { id: "5", title: "VIERNES" },
    { id: "6", title: "SABADO" },
    { id: "7", title: "DOMINGO" },
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
          navigation.navigate("Vista", { daySelected: item.title })
        }
      >
        <Text style={styles.botonTexto}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.T3xto5}>LOS DÍAS DE LA SEMANA</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar día..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={diasSemana}
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
    // flex: 1,
    padding: 16,
  },
  boton: {
    //  flex: 1,
    width: "auto",
    backgroundColor: "#d58700",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 8,
    borderRadius: 5,
    padding: 15,
    // marginHorizontal: 4,
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
