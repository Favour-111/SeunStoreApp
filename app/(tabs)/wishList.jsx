import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
const wishList = () => {
  const price = 500;
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 12,
        }}
      >
        <Feather name="menu" size={24} color={Colors.default} />
        <Text style={{ fontFamily: "outfit", fontSize: 20 }}>WishList</Text>
        <View style={{ position: "relative" }}>
          <Fontisto name="heart" size={24} color="gray" />
          <View
            style={{
              backgroundColor: Colors.default,
              height: 16,
              width: 16,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: -5,
              top: -3,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 10,
                fontFamily: "outfitSemiBold",
              }}
            >
              2
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                marginBottom: 30,
              }}
            >
              <View style={{ backgroundColor: Colors.defaultBg, padding: 10 }}>
                <Image
                  source={{
                    uri: "https://agriholders.com/wp-content/uploads/2022/06/beans-small.png",
                  }}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "83%",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "outfitRegular",
                        fontSize: 16,
                        opacity: 0.7,
                      }}
                    >
                      50kg beans
                    </Text>
                    <Text
                      style={{
                        fontFamily: "outfit",
                        opacity: 0.4,
                        fontSize: 10,
                        textTransform: "uppercase",
                        marginTop: 5,
                      }}
                    >
                      Dry Goods
                    </Text>
                  </View>
                  <View>
                    <AntDesign name="delete" size={17} color="red" />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "80%",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontFamily: "outfitRegular",
                      fontSize: 15,
                      opacity: 0.7,
                      marginTop: 10,
                    }}
                  >
                    ₦{price.toLocaleString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default wishList;

const styles = StyleSheet.create({});
