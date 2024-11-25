import { View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-8" style={{ marginTop: statusBarHeight }}>
        <Header></Header>
        <Banner></Banner>
      </View>
    </ScrollView>
  );
}
