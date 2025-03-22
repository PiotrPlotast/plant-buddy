import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { register } from "../../api/auth";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const success = await register(email, password);
    if (success) router.replace("/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Register</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Text
        onPress={() => router.push("/login")}
        style={{ marginTop: 10, color: "blue" }}
      >
        Already have an account? Login
      </Text>
    </View>
  );
}
