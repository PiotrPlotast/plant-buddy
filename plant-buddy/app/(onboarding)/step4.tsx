import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
export default function Onboarding() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>🌱 Welcome to PlantBuddy!4</Text>
      <Button title="Next" onPress={() => router.push("/(onboarding)/step1")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
  },
});
