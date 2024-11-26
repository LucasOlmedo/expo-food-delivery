import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

export function Search() {
    return (
        <View className="w-full flex-row border h-14 mt-4 rounded-full items-center gap-2 px-4">
            <Feather name="search" size={24} />
            <TextInput placeholder="Procure sua comida" className="w-full h-full flex-1" />
        </View>
    );
}
