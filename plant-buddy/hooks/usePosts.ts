import { useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      user: {
        name: "Alex Green",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      image: "https://via.placeholder.com/200",
      caption: "My monstera is growing beautifully! 🌱",
      likes: 12,
    },
    {
      id: "2",
      user: {
        name: "Sophia Brown",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      image: "https://via.placeholder.com/200",
      caption: "Finally repotted my aloe vera! 🌿",
      likes: 18,
    },
  ]);

  return { posts, setPosts };
}
