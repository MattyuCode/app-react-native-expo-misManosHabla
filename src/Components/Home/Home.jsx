import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const handleAgregarPress = () => {
    console.log("Funcionando con la funcion");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoM}>MIS MANOS HABLA</Text>
        <Image
          //   source={require("../../../assets/favicon.png")}
          source={{
            uri: "https://github.com/Victor587/image-app/blob/main/Image-Logo/WhatsApp%20Image%202023-08-16%20at%2012.21.47%20AM.jpeg?raw=true",
          }}
          style={styles.imagen}
        />
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("INICIO")}
        >
          <Entypo
            name="home"
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.botonText}>INICIO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 50,
  },
  boton: {
    backgroundColor: "green",
    padding: 20,
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
  imagen: {
    width: 250,
    height: 250,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 100,
    border: "1px solid red",
  },

  textoM: {
    color: "#0071d5",
    fontSize: 30,
    // fontWeight: 600,
  },
});
