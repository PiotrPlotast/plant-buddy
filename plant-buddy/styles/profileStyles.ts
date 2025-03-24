import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA", padding: 16 },
  header: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  username: { fontSize: 22, fontWeight: "bold" },
  email: { fontSize: 14, color: "gray" },
  streakContainer: {
    backgroundColor: "#FFEB3B",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  streakText: { fontSize: 16, fontWeight: "bold" },
  section: { marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  itemText: { flex: 1, fontSize: 16, marginLeft: 10 },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: "#E53935",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  logoutText: { color: "white", fontSize: 16, marginLeft: 8 },
});
