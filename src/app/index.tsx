import { View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import Constants from "expo-constants";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants, RestaurantsList } from "../components/restaurants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-6" style={{ marginTop: statusBarHeight / 2 }}>
        <Header />
        <Banner />
        <Search />

        <Section
          name="Comidas em alta"
          size="text-2xl"
          label="Ver mais"
          action={() => console.log("Clicou em `Comidas em alta`")} />
        <TrendingFoods />

        <Section
          name="Restaurantes famosos"
          size="text-2xl"
          label="Ver mais"
          action={() => console.log("Clicou em `Restaurantes famosos`")} />
        <Restaurants />

        <Section
          name="Todos os restaurantes"
          size="text-2xl"
          label=""
          action={() => console.log("Clicou em `Restaurantes famosos`")} />
        <RestaurantsList />
      </View>
    </ScrollView>
  );
}
