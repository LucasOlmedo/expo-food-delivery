import { FlatList, View, Pressable, Image, Text } from 'react-native';
import { useEffect, useState } from 'react'
import { RestaurantItem } from './item'
import { Ionicons } from '@expo/vector-icons';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

const restaurantArray = [
    {
        "id": "1",
        "name": "KFC",
        "image": "https://i.imgur.com/sZ1Jye3.png"
    },
    {
        "id": "2",
        "name": "McDonald's",
        "image": "https://i.imgur.com/su4iB3p.png"
    },
    {
        "id": "3",
        "name": "Outback",
        "image": "https://i.imgur.com/jg3GJVN.png"
    },
    {
        "id": "4",
        "name": "Sushi Dev",
        "image": "https://i.imgur.com/ffYWFBX.png"
    },
    {
        "id": "5",
        "name": "Burguer Grill",
        "image": "https://i.imgur.com/kmQvG2T.png"
    },
    {
        "id": "6",
        "name": "Marmitas express",
        "image": "https://i.imgur.com/uXRuDFD.png"
    }
];

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        // async function getFoods() {
        //     const response = await fetch("http://localhost:3000/restaurants")
        //     const data = await response.json()
        //     setRestaurants(data);
        // }

        // getFoods();

        setRestaurants(restaurantArray);
    }, [])

    return (
        <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem item={item} />}
            horizontal={true} contentContainerStyle={{ gap: 14 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}

export function RestaurantsList() {
    return (
        <View className="flex-1 w-full h-full mb-20 gap-8">
            {restaurantArray.map((item) => (
                <Pressable key={item.id} className="flex flex-row items-center justify-start gap-4">
                    <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
                    <View className="flex gap-2">
                        <Text className="text-base text-black leading-4 font-bold" numberOfLines={2}>
                            {item.name}
                        </Text>
                        <View className="flex-row items-center gap-1">
                            <Ionicons name="star" size={14} color="#ca8a04" />
                            <Text className="text-sm">4.5</Text>
                        </View>
                    </View>
                </Pressable>
            ))}
        </View>
    );
}
