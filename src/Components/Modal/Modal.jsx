import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Modal({ route }) {
  const navigation = useNavigation();

  const { daySelected } = route.params;

  const AllDays = {
    LUNES: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/Lunes.jpg?raw=true",
    },
    MARTES: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/Martes.jpg?raw=true",
    },
    MIERCOLES: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/Miercoles.jpg?raw=true",
    },
    JUEVES: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/Jueves.jpg?raw=true",
    },
    VIERNES: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/Viernes.jpg?raw=true",
    },
    SABADO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/S%C3%A0dado.jpg?raw=true",
    },
    DOMINGO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Semanas/Domingo.jpg?raw=true",
    },
  };

  const Day = AllDays[daySelected];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{daySelected}</Text>
      <Image source={Day} style={styles.imagen} resizeMode="contain" />
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("DiasSemana")}
      >
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
