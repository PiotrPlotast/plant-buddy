import { View, Text, Button } from "react-native";
import { logout } from "../../api/auth";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome to PlantBuddy! 🌱
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
