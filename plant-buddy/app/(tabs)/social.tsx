import { View, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import PostCard from "../../components/PostCard";
import styles from "../../styles/feedStyles";
import { usePosts } from "../../hooks/usePosts";

export default function Social() {
  const router = useRouter();
  const { posts } = usePosts();

  return (
    <View style={styles.container}>
      {/* 📝 Post List */}
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedList}
      />

      {/* ➕ Add Post Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add-post")}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
