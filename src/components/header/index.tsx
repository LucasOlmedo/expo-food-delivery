import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
    return (
        <View className="w-full items-center flex-row justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={30} color="black" />
            </Pressable>
            <View className="flex flex-col items-center justify-center">
                <Text className="text-center text-sm text-slate-400">Localização</Text>
                <View className="flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={18} color="#FF0000" />
                    <Text className="text-lg font-bold">São Paulo - SP</Text>
                </View>
            </View>
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={30} color="black" />
            </Pressable>
        </View>
    );
}
