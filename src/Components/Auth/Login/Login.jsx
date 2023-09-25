import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleRegisterButtonClick = () => {
    navigation.navigate("signUp");
  };

  const handleForgotPasswordClick = () => {
    navigation.navigate("recuperar");
  };

  return (
    <SafeAreaView style={styles.principal}>
      {/* <ImageBackground
        resizeMode="cover"
        style={[tw`flex-1 items-center  `, { paddingTop: 100 }]}
        source={require("../../../../assets/gradient.png")}
      > */}

      <View style={styles.card}>
        <View style={tw`  `}>
          <Image
            style={[
              // tw`w-70 h-70  border-4 border-green-500`,
              tw`w-60 h-60  border-4 border-sky-500`,
              { borderRadius: 150 },
            ]}
            source={{
              uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Logo/LogoAzul.jpg?raw=true",
            }}
          />
        </View>

        <TextInput
          style={[
            tw`w-80 bg-white p-4 border-2 border-sky-500 rounded-md mb-5 mt-5`,
            { fontSize: 17 },
          ]}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />

        <TextInput
          style={[
            tw`w-80 bg-white p-4 border-2 border-sky-500 rounded-md mb-5 mt-5`,
            { fontSize: 17 },
          ]}
          placeholder="Contraseña"
          // keyboardType="phone-pad"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity
          // onPress={handleButtonClick}
          onPress={() => {
            login(username, password);
          }}
          style={[tw`bottom-0 w-52  p-3 rounded-2xl `, styles.botones]}
        >
          <Text style={tw`font-semibold text-white text-center text-xl`}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          //FIXME: LLAMAMOS A ESTA FUNCION PARA IR LA PARTE DE REGISTRO CON NAVIGATION
          onPress={handleRegisterButtonClick}
          style={[tw`bottom-0 w-52 p-3 rounded-2xl mt-5`, styles.botones]}
        >
          <Text style={tw`font-semibold text-white text-center text-xl`}>
            Registrarse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleForgotPasswordClick}
          style={[tw`bottom-0 p-1 rounded-2xl mt-5`]}
        >
          <Text style={tw`font-semibold text-center text-cyan-700 text-xl`}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        {/* </ImageBackground> */}
      </View>
      <View style={styles.FondoBlanco}></View>

      <StatusBar style={"light"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: "#009baa",
    height: "100%",
  },
  FondoBlanco: {
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#ffff",
    // backgroundColor: "#e1e1e1",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    height: "100%",
    zIndex: 0,
    marginTop: 250,
  },

  card: {
    zIndex: 1,
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "#e1e1e1",
    // height: 350,
    width: "100%",
    // marginLeft: 20,
    marginTop: 100,
  },
  botones: {
    margnHorizontal: "25%",
    backgroundColor: "#2980B9",
  },
});
