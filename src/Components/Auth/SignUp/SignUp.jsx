import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

export default function SignUp() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.principal}>
      <Text style={styles.texto}>Registrate</Text>

      <View style={styles.card}>
        <TextInput
          style={[
            tw`w-80 bg-white p-5 border-2 border-sky-500 rounded-md mb-5 mt-5`,
            { fontSize: 17 },
          ]}
          placeholder="Nombre de usuario"
          value="usuario"
          // onChangeText={(value) => setUsername(value)}
        />

        <TextInput
          style={[
            tw`w-80 bg-blue p-5 border-2 border-sky-500 rounded-md mb-5`,
            { fontSize: 17 },
          ]}
          placeholder="Contraseña"
          // keyboardType="phone-pad"
          secureTextEntry={true}
          value="password"
          // onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={styles.FondoBlanco}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: "#2980B9",
    height: "100%",
  },
  FondoBlanco: {
    paddingHorizontal:10,
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
});
