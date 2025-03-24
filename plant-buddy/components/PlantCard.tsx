import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PlantCard({ plant }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.emoji}>{plant.image}</Text>
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.lastWatered}>Last Watered: {plant.lastWatered}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 16,
    margin: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  emoji: { fontSize: 32 },
  name: { fontSize: 16, fontWeight: "bold", color: "white", marginTop: 4 },
  lastWatered: { fontSize: 12, color: "white", marginTop: 4 },
});
