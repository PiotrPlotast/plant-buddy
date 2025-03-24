import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import ProfileItem from "../../components/ProfileItem";
import styles from "../../styles/profileStyles";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <ScrollView style={styles.container}>
      {/* 👤 User Avatar & Name */}
      <View style={styles.header}>
        <Image
          source={{ uri: user?.avatar || "https://via.placeholder.com/100" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.name || "Guest User"}</Text>
        <Text style={styles.email}>{user?.email || "guest@example.com"}</Text>
      </View>

      {/* 🔥 Streak & Stats */}
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>
          🔥 {user?.streak || 7}-Day Plant Care Streak
        </Text>
      </View>

      {/* ⚙️ Profile Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <ProfileItem
          icon="notifications"
          label="Notifications"
          onPress={() => {}}
        />
        <ProfileItem icon="color-palette" label="Theme" onPress={() => {}} />
        <ProfileItem
          icon="lock-closed"
          label="Privacy & Security"
          onPress={() => {}}
        />
      </View>

      {/* 🚪 Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Ionicons name="log-out" size={20} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
