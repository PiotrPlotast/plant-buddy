import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://source.unsplash.com/100x100/?person" }} // Placeholder image
          style={styles.avatar}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      {/* User Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>🔥 Streak: 7 days</Text>
        <Text style={styles.stat}>🌱 Plants: 5</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/edit-profile")}
      >
        <Text style={styles.buttonText}>✏️ Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => alert("Logged out!")}
      >
        <Text style={styles.buttonText}>🚪 Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    alignItems: "center",
    marginTop: 50,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  statsContainer: {
    backgroundColor: "#C8E6C9",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  stat: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1B5E20",
  },
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#D84315",
  },
});
