import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA", padding: 16 },
  feedList: { paddingBottom: 80 },
  postCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  userRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontSize: 16, fontWeight: "bold" },
  postImage: { width: "100%", height: 200, borderRadius: 8, marginBottom: 8 },
  caption: { fontSize: 14, color: "#333" },
  likeRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  likeText: { fontSize: 14, marginLeft: 6 },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 50,
    alignItems: "center",
  },
});
