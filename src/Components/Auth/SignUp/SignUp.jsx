import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { API_Services } from "../../../Config/environment";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../../Context/AuthContext";

export default function SignUp() {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const registrar = async () => {
    try {
      const _UserName = userName.trim();
      const _Password = password.trim();

      const response = await fetch(`${API_Services}/users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: _UserName,
          email: "testApp@gmial.com",
          password: _Password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        //  console.error("Error:", errorData.message);
        alert(errorData.message);
      } else {
        const data = await response.json();
        setIsLoading(true);
        //TODO: MANDAMOS A LLAMAR EL USECONTEXT DE LOGIN PARA ENTRAR DIRECTAMENTE EL HOME DE LA APP
        login(data.user.user, data.user.password);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.principal}>
      <Text style={styles.texto}>Registrate</Text>

      <View style={styles.card}>
        {isLoading ? (
          <Text style={tw`text-green-600 text-lg`}>Usuario Registrado</Text>
        ) : null}

        <TextInput
          style={[
            tw`w-80 bg-white p-5 border-2 border-sky-500 rounded-md mb-5 mt-5`,
            { fontSize: 17 },
          ]}
          placeholder="Nombre de usuario"
          value={userName}
          onChangeText={(value) => setUsername(value)}
        />

        <TextInput
          style={[
            tw`w-80 bg-white p-5 border-2 border-sky-500 rounded-md mb-5`,
            { fontSize: 17 },
          ]}
          placeholder="Contraseña"
          // keyboardType="phone-pad"
          // secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity
          onPress={() => {
            registrar();
          }}
          style={[
            tw`bottom-0 w-52 bg-white p-5 rounded-2xl mt-3 `,
            styles.bottom,
          ]}
        >
          <Text style={tw`font-semibold text-center text-white text-xl`}>
            Registrar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FondoBlanco}></View>
      <StatusBar style={"light"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: "#2980B9",
    height: "100%",
  },
  FondoBlanco: {
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#e1e1e1",
    height: "100%",
    zIndex: 0,
    marginTop: 150,
  },
  texto: {
    paddingTop: 80,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  card: {
    zIndex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ffff",
    height: 350,
    borderRadius: 10,
    width: "90%",
    marginLeft: 20,
    marginTop: 200,
  },
  bottom: {
    margnHorizontal: "25%",
    backgroundColor: "#2980B9",
  },
});
