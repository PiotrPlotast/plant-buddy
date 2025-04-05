import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good morning, User!🌿</Text>
      <Text style={styles.title}>
        You’ve cared for your plants using Plant Buddy for 7 days straight!
      </Text>
      <Text style={styles.title}>Water your Monstera in 2 hours ⏳</Text>
      <Button
        title="Onboarding demo"
        onPress={() => router.push("/(onboarding)/step1")}
      />
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
