import { useState, useEffect } from 'react'
import { FlatList } from 'react-native';
import { CardFood } from './food';

export interface FoodProps {
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([]);

    useEffect(() => {
        // async function fetchFoods() {
        //     const response = await fetch("http://localhost:3000/foods")
        //     const data = await response.json()
        //     setFoods(data);
        // }

        // fetchFoods();

        const foodArray = [
            {
                "id": "1",
                "name": "Frango assado",
                "price": 39.90,
                "time": "50-60 min",
                "delivery": 5.99,
                "rating": 4.8,
                "image": "https://i.imgur.com/CEVUdju.png",
                "restaurantId": "1"
            },
            {
                "id": "2",
                "name": "Marmita fit",
                "price": 29,
                "time": "30-40 min",
                "delivery": 2.99,
                "rating": 4.9,
                "image": "https://i.imgur.com/uXRuDFD.png",
                "restaurantId": "6"
            },
            {
                "id": "3",
                "name": "Burguer Dev",
                "price": 40,
                "time": "50-60 min",
                "delivery": 5.99,
                "rating": 4.5,
                "image": "https://i.imgur.com/O5c3lyU.png",
                "restaurantId": "5"
            },
            {
                "id": "4",
                "name": "Picanha Grill",
                "price": 36,
                "time": "50-60 min",
                "delivery": 5.99,
                "rating": 4.4,
                "image": "https://i.imgur.com/0UjG3wk.png",
                "restaurantId": "3"
            },
        ];

        setFoods(foodArray);
    }, []);

    return (
        <FlatList data={foods} renderItem={({ item }) => <CardFood food={item} />}
            horizontal={true} contentContainerStyle={{ gap: 14 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}
