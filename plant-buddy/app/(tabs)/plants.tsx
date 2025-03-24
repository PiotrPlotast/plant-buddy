import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import PlantCard from "../../components/PlantCard";
import styles from "../../styles/plantsStyles";
import { usePlants } from "../../hooks/usePlants";

export default function PlantsScreen() {
  const router = useRouter();
  const { plants } = usePlants();
  const [search, setSearch] = useState("");

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search plants..."
        value={search}
        onChangeText={setSearch}
      />

      {/* 🌿 Plant List (Grid) */}
      <FlatList
        data={filteredPlants}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/plants/${item.id}`)}>
            <PlantCard plant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.plantList}
      />

      {/* ➕ Add Plant Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add-plant")}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
