import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function ModalEmciones({ route }) {
  const navigation = useNavigation();
  const { emocionSeleccionado } = route.params;

  const AllEmociones = {
    AMOR: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Emociones/Amor.jpg?raw=true",
    },
    ENFADADO: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Emociones/Enfadado.jpg?raw=true",
    },
    FELIZ: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Emociones/Feliz.jpg?raw=true",
    },
    MIEDO: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Emociones/Miedo.jpg?raw=true",
    },
    PACIENTE: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Emociones/Paciente.jpg?raw=true",
    },
    TRISTE: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Emociones/Triste.jpg?raw=true",
    },
  };

  const emocion = AllEmociones[emocionSeleccionado];

  return (
    <View style={styles.container}>
      <Text style={styles.encabezado}>{emocionSeleccionado}</Text>

      <Image source={emocion} style={styles.image} resizeMode="contain" />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Emociones")}
      >
        <AntDesign name="caretleft" size={20} color="white" />
        <Text style={styles.botonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  encabezado: {
   // fontWeight: 600,
    fontSize: 40,
    color: "#05633E",
    marginTop: 10,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 1,
    marginBottom: 50,
  },
  botonText: {
    color: "white",
    fontSize: 16,
  },
  touchableOpacity: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    width: "50%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
});
