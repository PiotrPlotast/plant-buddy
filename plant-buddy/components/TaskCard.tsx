import { View, Text, StyleSheet } from "react-native";

export default function TaskCard({ task }) {
  return (
    <View style={styles.card}>
      <Text style={styles.taskText}>
        🌱 {task.plant}: {task.task} - {task.due}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFEB3B",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
