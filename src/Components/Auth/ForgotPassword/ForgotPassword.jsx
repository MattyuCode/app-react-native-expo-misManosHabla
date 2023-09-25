import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
import { API_Services } from "../../../Config/environment";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [userName, setUsername] = useState("");
  const [usuarioEncontrado, setUsuarioEncontrado] = useState("");
  const [passEncontrado, setPassEncontrado] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const buscarUsers = async () => {
    setError("");
    try {
      // const formatoMayuscula = userName.toUpperCase();
      // console.log(formatoMayuscula)
      const response = await fetch(`${API_Services}/users/${userName}`);
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data.error;
        setError(errorMessage);
        // if (response.status === 404) {
        //   setError("Usuario no encontrado"); 
        // } else {
        //   setError("Error en la solicitud"); 
        // }
      } else {
        setIsLoading(true);
        setUsuarioEncontrado(data.datosUser.user);
        setPassEncontrado(data.datosUser.password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/forgot.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Recuperar Contraseña</Text>

      {error ? (
        <Text style={tw`text-red-600`}>{error}</Text>
      ) : isLoading ? (
        <View style={{ width: 250 }}>
          <Text style={[tw`text-xl font-bold text-blue-600`]}>
            Datos encontrados
          </Text>
          <Text style={[tw`text-lg  font-semibold text-green-600`]}>
            USUARIO: {usuarioEncontrado}
          </Text>
          <Text style={[tw`text-lg  font-semibold text-green-600`]}>
            CONTRASEÑA: {passEncontrado}
          </Text>
        </View>
      ) : null}

      <TextInput
        style={[
          tw`w-80 bg-white p-3 border-2 border-sky-500 rounded-md mb-5 mt-5`,
          { fontSize: 17 },
        ]}
        placeholder="Nombre de usuario"
        value={userName}
        onChangeText={(value) => setUsername(value)}
      />

      <TouchableOpacity
        onPress={buscarUsers}
        style={[tw`bottom-0 w-52 bg-black p-2 rounded-2xl mt-3 `]}
      >
        <Text style={tw`font-semibold text-center text-white text-xl`}>
          Buscar por usuario
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            "https://api.whatsapp.com/send?phone=50258874794&text=Buen día. Necesito ayuda para recuperar mi contraseña."
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
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 20,
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
