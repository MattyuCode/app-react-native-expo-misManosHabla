import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../Context/AuthContext";
import tw from "twrnc";

export default function Home() {
  const { userInfo, logout } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={tw`flex-1  font-semibold text-center text-2xl text-lime-700`}>
          Bienvenido {userInfo} {"\n"}a
        </Text>
        <Text style={styles.textoM}>MIS MANOS HABLAN</Text>
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

        <TouchableOpacity
          style={styles.log_out}
          //  onPress={() => navigation.navigate("login")}
          onPress={() => {
            logout();
          }}
        >
          <Feather
            name="log-out"
            size={24}
            color="white"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.botonText}>Cerrar Sessión</Text>
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
    marginTop: 100,
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
  log_out: {
    backgroundColor: "#4a98f7",
    padding: 10,
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
