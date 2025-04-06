import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Premium() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>🌟 Unlock PlantBuddy Premium!</Text>
      <Text style={styles.subtitle}>
        Get the most out of your plant care journey.
      </Text>

      {/* Benefits Section */}
      <View style={styles.benefitsContainer}>
        <Text style={styles.benefit}>✅ Smart watering reminders</Text>
        <Text style={styles.benefit}>✅ Unlimited plant tracking</Text>
        <Text style={styles.benefit}>✅ AI-powered plant care tips</Text>
        <Text style={styles.benefit}>✅ Exclusive plant community</Text>
      </View>

      {/* Pricing Section */}
      <View style={styles.pricingContainer}>
        <Text style={styles.pricingTitle}>🌱 Only $4.99/month</Text>
      </View>

      {/* Upgrade Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Redirect to Payment")}
      >
        <Text style={styles.buttonText}>Upgrade to Premium 🚀</Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <TouchableOpacity
        onPress={() => router.push("/")}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Back to Home</Text>
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
    justifyContent: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  benefitsContainer: {
    backgroundColor: "#C8E6C9",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  benefit: {
    fontSize: 18,
    color: "#1B5E20",
    fontWeight: "600",
    marginBottom: 5,
  },
  pricingContainer: {
    marginBottom: 20,
  },
  pricingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D84315",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 10,
  },
  backText: {
    fontSize: 16,
    color: "#1565C0",
  },
});
