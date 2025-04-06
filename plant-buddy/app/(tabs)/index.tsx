import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function HomeScreen() {
  const [checkedIn, setCheckedIn] = useState(false);
  const router = useRouter();
  const handleCheckIn = () => {
    if (checkedIn) {
      Alert.alert(
        "✅ Already Checked In",
        "You've already checked in today. Come back tomorrow!"
      );
      return;
    }
    setCheckedIn(true);
    Alert.alert(
      "🎉 Check-in Successful!",
      "Great job caring for your plants today! 🌱"
    );
  };
  return (
    <View style={styles.container}>
      {/* Greeting Section */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good morning, User! 🌿</Text>
        <Text style={styles.streak}>
          🔥 You've cared for your plants for 7 days straight!
        </Text>
      </View>

      {/* Water Reminder */}
      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>
          💧 Water your Monstera in 2 hours ⏳
        </Text>
      </View>
      {/* Daily Check-in Button */}
      <TouchableOpacity
        style={[styles.checkInButton, checkedIn && styles.checkedIn]}
        onPress={handleCheckIn}
      >
        <Text style={styles.checkInText}>
          {checkedIn ? "✅ Checked In" : "📅 Daily Check-in"}
        </Text>
      </TouchableOpacity>
      {/* Onboarding Demo Button */}
      <Button
        title="Onboarding Demo"
        onPress={() => router.push("/(onboarding)/step1")}
      />

      {/* Your Plants Section */}
      <TouchableOpacity
        style={styles.plantsSection}
        onPress={() => router.push("/(tabs)/plants")}
      >
        <Text style={styles.sectionTitle}>🌱 Your Plants:</Text>
        <View style={styles.plantContainer}>
          {/* Example Plant Card */}
          <View style={styles.plantCard}>
            <Image
              source={{ uri: "https://source.unsplash.com/100x100/?monstera" }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Monstera</Text>
          </View>
          <View style={styles.plantCard}>
            <Image
              source={{ uri: "https://source.unsplash.com/100x100/?succulent" }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Succulent</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Explore Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔍 Explore:</Text>
        <TouchableOpacity style={styles.exploreItem}>
          <Text style={styles.exploreText}>📖 Plant care tips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreItem}>
          <Text style={styles.exploreText}>🦠 Plant diseases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreItem}>
          <Text style={styles.exploreText}>🛍️ Plant care products</Text>
        </TouchableOpacity>
      </View>
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
  greetingContainer: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  streak: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  reminderContainer: {
    backgroundColor: "#FFF3E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  checkInButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  checkedIn: {
    backgroundColor: "#81C784", // Light green when checked in
  },
  checkInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  reminderText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#D84315",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2E7D32",
  },
  plantsSection: {
    backgroundColor: "#C8E6C9",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  plantContainer: {
    flexDirection: "row",
    gap: 15,
  },
  plantCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  plantImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Makes it circular
  },
  plantName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1B5E20",
    marginTop: 5,
  },
  exploreItem: {
    backgroundColor: "#E3F2FD",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  exploreText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1565C0",
  },
});
