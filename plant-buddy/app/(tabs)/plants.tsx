import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

// Sample Data (for demonstration purposes)
const samplePlants = [
  {
    id: "1",
    name: "Monstera",
    image: "https://source.unsplash.com/200x200/?monstera",
    nextWatering: "In 2 hours",
  },
  {
    id: "2",
    name: "Fiddle Leaf Fig",
    image: "https://source.unsplash.com/200x200/?fiddle-leaf",
    nextWatering: "Tomorrow",
  },
  {
    id: "3",
    name: "Succulent",
    image: "https://source.unsplash.com/200x200/?succulent",
    nextWatering: "In 3 days",
  },
];

export default function MyPlantsScreen() {
  const router = useRouter();

  // Plant Render Item
  const renderPlant = ({ item }) => (
    <TouchableOpacity
      style={styles.plantCard}
      onPress={() => router.push(`/plant-details/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.plantImage} />
      <View style={styles.plantInfo}>
        <Text style={styles.plantName}>{item.name}</Text>
        <Text style={styles.waterReminder}>
          Next watering: {item.nextWatering}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>🌿 My Plants</Text>

      {/* Plant List */}
      <FlatList
        data={samplePlants}
        renderItem={renderPlant}
        keyExtractor={(item) => item.id}
      />

      {/* Add Plant Button */}
      <TouchableOpacity
        style={styles.addPlantButton}
        onPress={() => router.push("/add-plant")}
      >
        <Text style={styles.addPlantText}>+ Add a New Plant</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
  },
  plantCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  plantImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  plantInfo: {
    flex: 1,
  },
  plantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  waterReminder: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  addPlantButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addPlantText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
