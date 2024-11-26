import { Image, Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    return (
        <View className="w-full h-40 md:h-60 rounded-2x1 mt-5 mb-4">
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                <Pressable className="w-full h-40 md:h-60 rounded-2xl"
                    key="1" onPress={() => console.log("Clicou no `Banner 1`")}>
                    <Image source={require("../../assets/images/banner1.png")}
                        className="w-full h-40 md:h-60 rounded-2xl" />
                </Pressable>
                <Pressable className="w-full h-40 md:h-60 rounded-2xl"
                    key="2" onPress={() => console.log("Clicou no `Banner 2`")}>
                    <Image source={require("../../assets/images/banner2.png")}
                        className="w-full h-40 md:h-60 rounded-2xl" />
                </Pressable>
            </PagerView>
        </View>
    );
}
