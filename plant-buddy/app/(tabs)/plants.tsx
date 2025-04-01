import {
  View,
  Text,
  StyleSheet,
  FlatList,
  FlatListComponent,
} from "react-native";

export default function Plants() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { id: "1", name: "Fern" },
          { id: "2", name: "Cactus" },
          { id: "3", name: "Bamboo" },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.plantContainer}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </View>
        )}
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
  plantContainer: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
  },
});
