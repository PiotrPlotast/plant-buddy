import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { login } from "../../api/auth";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) router.replace("/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderBottomWidth: 1, marginVertical: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        onPress={() => router.push("/register")}
        style={{ marginTop: 10, color: "blue" }}
      >
        Create an account
      </Text>
    </View>
  );
}
