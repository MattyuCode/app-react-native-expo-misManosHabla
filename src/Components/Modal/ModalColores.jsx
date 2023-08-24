import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function ModalColores({ route }) {
  const navigation = useNavigation();
  const { colorsSelected } = route.params;

  const AllColores = {
    AMARILLO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Amarillo.jpg?raw=true",
    },
    NARANJA: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Anaranjado.jpg?raw=true",
    },
    AZUL: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Azul.jpg?raw=true",
    },
    CAFÉ: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Caf%C3%A8.jpg?raw=true",
    },
    MORADO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Morado.jpg?raw=true",
    },
    NEGRO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Negro.jpg?raw=true",
    },
    ROJO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Rojo.jpg?raw=true",
    },
    ROSA: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Rosa.jpg?raw=true",
    },

    VERDE: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Colores/Verede.jpg?raw=true",
    },
  };

const colors = AllColores[colorsSelected];


return (
  <View style={styles.container}>
    <Text style={styles.heading}>{colorsSelected}</Text>
    <Image source={colors} style={styles.imagen} resizeMode="contain" />
    <TouchableOpacity
      style={styles.boton}
      onPress={() => navigation.navigate("Colores")}
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
    // justifyContent: "center",
     alignItems: "center",
    // paddingVertical: 20,
    // marginTop: 50,
  },
  boton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    width: "50%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  botonText: {
    color: "white",
    fontSize: 16,
    // fontWeight: 600,
  },
  icono: {
    fontSize: 12,
    marginRight: 5,
  },
  //MAT: PARA VISUALIZAR EL IMAGEN EL LOS MODALES
  imagen: {
    width: "100%",
    width: "100%",
    height: undefined, // Esto permite ajustar la altura de acuerdo a la relación de aspecto original
    aspectRatio: 1, // Relación de aspecto 1:1
    borderRadius: 1,
    marginBottom: 50,
  },
  heading: {
    fontSize: 30,
    // fontWeight: 600,
    color: "#05633E",
    marginTop: 10,
    marginBottom: 40,
  },
});

