import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ForgotPassword() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/forgot.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Recuperar Contraseña</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            "https://api.whatsapp.com/send?phone=50258874794&text=Buenas tardes Ing. Victor necesito recuperar mi contraseña, puede ayudarme por favor plis.😂🤣"
          )
        }
      >
        <FontAwesome5 name="whatsapp" size={24} color="white" />
        <Text style={styles.buttonText}>Contactar al Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 270,
    height: 270,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
  },
});
