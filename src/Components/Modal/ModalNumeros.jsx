import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

//COMMENT: SE AGREGA UN PARAMETRO ROUTE PARA RECIBIR EL VALOR SELECCIONADO DESDE NUMEROS
export default function ModalNumeros({ route }) {
  const navigation = useNavigation();
  const { numerosSeleccionados } = route.params;

  const AllNumeros = {
    UNO: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Uno.jpg?raw=true",
    },
    DOS: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Dos.jpg?raw=true",
    },
    TRES: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Tres.jpg?raw=true",
    },
    CUATRO: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Cuatro.jpg?raw=true",
    },
    CINCO: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/cinco.jpg?raw=true",
    },
    SEIS: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Seis.jpg?raw=true",
    },
    SIETE: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Siete.jpg?raw=true",
    },
    OCHO: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Ocho.jpg?raw=true",
    },
    NUEVE: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Nueve.jpg?raw=true",
    },
    DIEZ: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Numero/Dies.jpg?raw=true",
    },
  };

  //BUG: Se crea una variable por donde se llama el objeto de los valores correspondientes pasando el valor seleccionado
  const numeros = AllNumeros[numerosSeleccionados];

  return (
    <View style={styles.container}>
      <Text style={styles.encabezado}>{numerosSeleccionados}</Text>

      <Image source={numeros} style={styles.image} resizeMode="contain" />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Numeros")}
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
    fontWeight: 600,
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


//NOTE: SIN CAMBIOS AQUI EN MODAL NUMEROS