import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ModalGestos() {
  const AllGestos = {
    AMOR: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Emociones/Amor.jpg?raw=true",
    },
    ENFADADO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Emociones/Enfadado.jpg?raw=true",
    },
    FELIZ: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Emociones/Feliz.jpg?raw=true",
    },
    MIEDO: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Emociones/Miedo.jpg?raw=true",
    },
    PACIENTE: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Emociones/Paciente.jpg?raw=true",
    },
    TRISTE: {
      uri: "https://github.com/Victor587/image-app/blob/main/Image-Emociones/Triste.jpg?raw=true",
    },
  };

  return (
    <View>
      <Text>ModalGestos</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
