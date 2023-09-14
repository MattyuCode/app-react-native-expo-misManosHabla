import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
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

  return (
    <View style={tw`flex-1 bg-slate-700`}>
      <ImageBackground
        resizeMode="cover"
        style={[tw`flex-1 items-center  `, { paddingTop: 100 }]}
        source={require("../../../../assets/gradient.png")}
      >
        <View style={tw`  `}>
          <Image
            style={[
              // tw`w-70 h-70  border-4 border-green-500`,
              tw`w-70 h-70  border-4 border-indigo-500/100`,
              { borderRadius: 150 },
            ]}
            source={{
              uri: "https://github.com/Victor587/Image-apps/blob/master/Image-Logo/LogoAzul.jpg?raw=true",
            }}
          />
        </View>

        <TextInput
          style={[tw`w-80 bg-white p-5 rounded-xl mb-5 mt-5`, { fontSize: 17 }]}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />

        <TextInput
          style={[tw`w-80 bg-white p-5 rounded-xl mb-5`, { fontSize: 17 }]}
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
          style={[
            tw`bottom-0 w-52 bg-white p-5 rounded-2xl `,
            { margnHorizontal: "25%" },
          ]}
        >
          <Text style={tw`font-semibold text-center text-xl`}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          //FIXME: LLAMAMOS A ESTA FUNCION PARA IR LA PARTE DE REGISTRO CON NAVIGATION
          onPress={handleRegisterButtonClick}
          style={[tw`bottom-0 w-52 bg-white p-5 rounded-2xl mt-5`]}
        >
          <Text style={tw`font-semibold text-center text-xl`}>Registrarse</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style={"light"} />
    </View>
  );
}
