import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good morning, User!🌿</Text>
      <Text style={styles.title}>
        You’ve cared for your plants using Plant Buddy for 7 days straight!
      </Text>
      <Text style={styles.title}>Water your Monstera in 2 hours ⏳</Text>
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
