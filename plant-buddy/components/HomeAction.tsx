import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/homeStyles";

export default function HomeAction({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Ionicons name={icon} size={24} color="white" />
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}
