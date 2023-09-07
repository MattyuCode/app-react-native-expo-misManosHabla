import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home/Home";
import Inicio from "../Home/Inicio";

import DiasSemana from "../Pages/DiasSemana";
import Numeros from "../Pages/Numeros";
import Colores from "../Pages/Colores";
import Familia from "../Pages/Familia";
import Emociones from "../Pages/Emociones";
import Modal from "../Modal/Modal";
import ModalAlfabeto from "../Modal/ModalAlfabeto";
import ModalNumeros from "../Modal/ModalNumeros";
import ModalColores from "../Modal/ModalColores";
import ModalEmciones from "../Modal/ModalEmciones";
import Login from "./Login/Login";
import { AuthContext } from "../Context/AuthContext";
import Alfabetos from "../Pages/Alfabetos";

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  const { isLoading, isToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="login"> */}
      <Stack.Navigator>
        {isToken !== null ? (
          <>
            {/* BUG: TODAS LAS VISTAS */}
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="INICIO" component={Inicio} />
            <Stack.Screen name="Numeros" component={Numeros} />
            <Stack.Screen name="Alfabeto" component={Alfabetos} />
            <Stack.Screen name="DiasSemana" component={DiasSemana} />
            <Stack.Screen name="Colores" component={Colores} />
            <Stack.Screen name="Familia" component={Familia} />
            <Stack.Screen name="Emociones" component={Emociones} />

            {/* NOTE: TODOS LOS MODALES */}
            <Stack.Screen name="Vista" component={Modal} />
            <Stack.Screen name="VistaAlfabetos" component={ModalAlfabeto} />
            <Stack.Screen name="VistaNumeros" component={ModalNumeros} />
            <Stack.Screen name="VistaColores" component={ModalColores} />
            <Stack.Screen name="VistaEmocion" component={ModalEmciones} />
          </>
        ) : (
          <>
            {/* FIXME: VALIDAR INICIO DE SESSION Y REGISTRO */}
            <Stack.Screen name="login" component={Login} />
            {/* <Stack.Screen name="signUp" component={SignUp} /> */}
          </>
        )}
      </Stack.Navigator>
      <StatusBar style={"dark"} />
    </NavigationContainer>
  );
};

export default AuthNavigator;
