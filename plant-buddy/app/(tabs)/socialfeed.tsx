import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

// Sample Data (for demonstration purposes)
const samplePosts = [
  {
    id: "1",
    username: "Alice",
    userImage: "https://source.unsplash.com/50x50/?person",
    postText: "Loving my new Monstera! 🌱 #plantparenthood",
    likes: 23,
    image: "https://source.unsplash.com/400x300/?monstera",
  },
  {
    id: "2",
    username: "Bob",
    userImage: "https://source.unsplash.com/50x50/?person",
    postText: "My Fiddle Leaf Fig is growing so fast! 😍 #plantlover",
    likes: 15,
    image: "https://source.unsplash.com/400x300/?fiddle-leaf",
  },
];

export default function Socialfeed() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Simulating data fetching
  useEffect(() => {
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 2000);
  }, []);

  // Post Render Item
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.userContainer}>
        <Image source={{ uri: item.userImage }} style={styles.userImage} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Text style={styles.postText}>{item.postText}</Text>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>❤️ {item.likes} Likes</Text>
      </View>
    </View>
  );

  // Skeleton Loader
  const renderSkeleton = () => (
    <View style={styles.skeletonContainer}>
      <View style={styles.skeletonUser}>
        <View style={styles.skeletonImage} />
        <View style={styles.skeletonText} />
      </View>
      <View style={styles.skeletonPostText} />
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonLikes} />
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <FlatList
          data={[1, 2, 3]} // Dummy data for skeleton
          renderItem={renderSkeleton}
          keyExtractor={(item) => item.toString()}
        />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 10,
    marginTop: 50,
  },
  post: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  postText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  likesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  likes: {
    fontSize: 14,
    color: "#D32F2F",
  },
  skeletonContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  skeletonUser: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  skeletonImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 10,
  },
  skeletonText: {
    width: 100,
    height: 15,
    backgroundColor: "#e0e0e0",
  },
  skeletonPostText: {
    width: "80%",
    height: 15,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
  },
  skeletonLikes: {
    width: 60,
    height: 15,
    backgroundColor: "#e0e0e0",
  },
});
