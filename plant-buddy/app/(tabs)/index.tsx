import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/homeStyles";
import { usePlants } from "../../hooks/usePlants";
import HomeAction from "../../components/HomeAction";

export default function HomeScreen() {
  const router = useRouter();
  const { plants } = usePlants();

  return (
    <ScrollView style={styles.container}>
      {/* 🌄 Gradient Header with Greeting */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome Back, Gardener! 🌱</Text>
        <Text style={styles.subtext}>
          Your plants are happy to see you today!
        </Text>
      </View>

      {/* 🔘 Quick Actions */}
      <View style={styles.actionsRow}>
        <HomeAction
          icon="add"
          label="Add Plant"
          onPress={() => router.push("/add-plant")}
        />
        <HomeAction
          icon="leaf"
          label="View Feed"
          onPress={() => router.push("/feed")}
        />
      </View>

      {/* 🌿 Featured Plants */}
      <Text style={styles.sectionTitle}>Your Plants</Text>
      <FlatList
        horizontal
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/plants/${item.id}`)}>
            <View style={styles.plantCard}>
              <Image source={{ uri: item.image }} style={styles.plantImage} />
              <Text style={styles.plantName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.plantList}
        showsHorizontalScrollIndicator={false}
      />

      {/* 🔔 Care Reminders */}
      <Text style={styles.sectionTitle}>Care Reminders</Text>
      <View style={styles.reminderBox}>
        <Text style={styles.reminderText}>🚰 Water Monstera in 2 days</Text>
        <Text style={styles.reminderText}>
          ☀️ Rotate Aloe Vera for sunlight
        </Text>
      </View>
    </ScrollView>
  );
}
