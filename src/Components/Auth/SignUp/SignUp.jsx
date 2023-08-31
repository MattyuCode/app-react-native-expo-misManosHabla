import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      {/* <Text className="text-center text-red-700">SignUpssssssssss</Text> */}
      <Text >SignUpssssssssss</Text>
    </View>
  )
}

const styles = StyleSheet.create({})