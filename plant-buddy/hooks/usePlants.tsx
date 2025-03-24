import { useState } from "react";

export function usePlants() {
  const [plants, setPlants] = useState([
    {
      id: "1",
      name: "Aloe Vera",
      lastWatered: "3 days ago",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "2",
      name: "Monstera",
      lastWatered: "5 days ago",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "3",
      name: "Orchid",
      lastWatered: "1 week ago",
      image: "https://via.placeholder.com/100",
    },
  ]);

  return { plants, setPlants };
}
