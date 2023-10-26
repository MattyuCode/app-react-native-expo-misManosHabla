import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { API_Services } from "../../Config/environment";
import Toast from 'react-native-toast-message'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isToken, setIsToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
   

  const login = async (username, password) => {
    setIsLoading(true);

    //BUG. Esto es para el login con BACKEND
    try {
      const response = await fetch(`${API_Services}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // console.error("Error:", errorData.message);
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
        alert(errorData.message);
      } else {
        const data = await response.json();
        const datos = data.data;

        setUserInfo(datos.user.user);
        setIsToken(datos.token);

        // AsyncStorage.setItem("userInfo", JSON.stringify(datos.user.user));
        AsyncStorage.setItem("userInfo", datos.user.user);
        AsyncStorage.setItem("isToken", datos.token);
      }
    } catch (error) {
      // console.error("Fetch Error:", error);
    }

    /*    setIsToken("Mattyus");
    // TODO: PARA EL ASYNC-STORAGE COMO EL LOCALSTORAGE
    //https://react-native-async-storage.github.io/async-storage/docs/install/
    AsyncStorage.setItem("isToken", "Mattyus");*/
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setIsToken(null);
    
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("isToken");
    setIsLoading(false);
  };

  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        setIsLoading(true);
        const token = await AsyncStorage.getItem("isToken");
        let userInfo = await AsyncStorage.getItem("userInfo");
        // userInfo = JSON.parse(userInfo);

        if (userInfo) {
          setIsToken(token);
          setUserInfo(userInfo);
        }

        setIsLoading(false);
      } catch (error) {
        // console.log("------->", error.message);
      }
    };

    isAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, isToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
