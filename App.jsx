import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Components/Home/Home";
import Inicio from "./src/Components/Home/Inicio";
import Familia from "./src/Components/Pages/Familia";
import Colores from "./src/Components/Pages/Colores";
import DiasSemana from "./src/Components/Pages/DiasSemana";
import Alfabetos from "./src/Components/Pages/Alfabetos";
import Numeros from "./src/Components/Pages/Numeros";
import Modal from "./src/Components/Modal/Modal";
import ModalAlfabeto from "./src/Components/Modal/ModalAlfabeto";
import ModalNumeros from "./src/Components/Modal/ModalNumeros";
import ModalColores from "./src/Components/Modal/ModalColores";
import Emociones from "./src/Components/Pages/Emociones";
import ModalEmciones from "./src/Components/Modal/ModalEmciones";
 
export default function App() {
  const Stack = createStackNavigator();
  const [isAthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* NOTE: TODAS LAS VISTAS */}
{/* New */}
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="INICIO" component={Inicio} />
        <Stack.Screen name="Numeros" component={Numeros} />
        <Stack.Screen name="Alfabetos" component={Alfabetos} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
