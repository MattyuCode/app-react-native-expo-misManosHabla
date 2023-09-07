import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ModalAlfabeto({ route }) {
  const navigation = useNavigation();
  const { alfabetoSeleccionado } = route.params;

  const AllAlfabeto = {
    A: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/A.jpg?raw=true",
    },
    B: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/B.jpg?raw=true",
    },
    C: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/C.jpg?raw=true",
    },
    CH: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/CH.jpg?raw=true",
    },
    D: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/D.jpg?raw=true",
    },
    E: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/E.jpg?raw=true",
    },
    F: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/F.jpg?raw=true",
    },
    G: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/G.jpg?raw=true",
    },
    H: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/H.jpg?raw=true",
    },
    I: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/I.jpg?raw=true",
    },
    J: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/J.jpg?raw=true",
    },
    K: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/K.jpg?raw=true",
    },
    L: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/L.jpg?raw=true",
    },
    LL: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/LL.jpg?raw=true",
    },

    M: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/M.jpg?raw=true",
    },
    N: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/N.jpg?raw=true",
    },
    Ñ: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/%C3%91.JPG?raw=true",
    },
    O: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/O.jpg?raw=true",
    },
    P: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/P.jpg?raw=true",
    },
    Q: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/Q.jpg?raw=true",
    },
    R: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/R.jpg?raw=true",
    },

    RR: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/RR.jpg?raw=true",
    },
    S: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/S.jpg?raw=true",
    },
    T: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/T.jpg?raw=true",
    },
    U: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/U.jpg?raw=true",
    },
    V: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/V.jpg?raw=true",
    },
    W: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/W.jpg?raw=true",
    },
    X: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/X.jpg?raw=true",
    },
    Y: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/Y.jpg?raw=true",
    },
    Z: {
      uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Alfabeto/Z.jpg?raw=true",
    },
  };

  const alfabeto = AllAlfabeto[alfabetoSeleccionado];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{alfabetoSeleccionado}</Text>
      <Image source={alfabeto} style={styles.imagen} resizeMode="contain" />
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("Alfabeto")}
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
  
