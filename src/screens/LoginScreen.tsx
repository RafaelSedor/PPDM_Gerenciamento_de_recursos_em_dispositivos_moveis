import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { LoginScreenProps } from "../types";
import { useAuthStore } from "../store";

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = () => {
    setToken(true);
    navigation.replace('LoggedHome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoginScreen;
