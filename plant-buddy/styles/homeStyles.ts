import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },

  // 🏡 HEADER STYLES
  header: {
    backgroundColor: "#4CAF50",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: { fontSize: 22, fontWeight: "bold", color: "white" },
  subtext: { fontSize: 14, color: "white", marginTop: 4 },

  // 🔘 QUICK ACTION BUTTONS
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    width: 120,
  },
  actionText: { color: "white", fontSize: 14, marginTop: 6 },

  // 🌿 PLANTS SECTION
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 14,
    paddingHorizontal: 16,
  },
  plantList: { paddingLeft: 16, paddingRight: 8 },
  plantCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  plantImage: { width: 80, height: 80, borderRadius: 40 },
  plantName: { fontSize: 14, fontWeight: "bold", marginTop: 6 },

  // 🔔 REMINDERS
  reminderBox: {
    backgroundColor: "#FFF3CD",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  reminderText: { fontSize: 14, color: "#856404", marginVertical: 4 },
});
