import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "../styles/feedStyles";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes);

  return (
    <View style={styles.postCard}>
      {/* 👤 User Info */}
      <View style={styles.userRow}>
        <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.user.name}</Text>
      </View>

      {/* 📸 Post Image */}
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* 📝 Post Caption */}
      <Text style={styles.caption}>{post.caption}</Text>

      {/* ❤️ Like Button */}
      <TouchableOpacity
        style={styles.likeRow}
        onPress={() => setLikes(likes + 1)}
      >
        <Ionicons name="heart" size={20} color="red" />
        <Text style={styles.likeText}>{likes} Likes</Text>
      </TouchableOpacity>
    </View>
  );
}
