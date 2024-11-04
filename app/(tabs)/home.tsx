import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import Avatar from "../../assets/images/man.png";
import chicken from "../../assets/images/chicken.png";
import oil from "../../assets/images/cooking-oil.png";
import soda from "../../assets/images/soda-bottle.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
const home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View>
          <Feather name="menu" size={24} color={Colors.default} />
        </View>
        <View>
          <Image source={Avatar} style={{ width: 50, height: 50 }} />
        </View>
      </View>
      <ScrollView
        style={{
          marginBottom: Platform.OS === "android" ? 30 : 0,
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 25,
                fontFamily: "outfitSemiBold",
              }}
            >
              Welcome
              <Text style={{ color: Colors.default }}> Favour!</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontWeight: "bold",
                fontFamily: "outfitRegular",
                opacity: 0.3,
                fontSize: 18,
                width: 250,
              }}
            >
              What are you looking for today
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Pressable
            onPress={() => {
              router.push("/products");
            }}
            style={{ padding: 20 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                borderColor: "#00000030",
                borderWidth: 1,
                padding: 15,
                borderRadius: 10,
              }}
            >
              <EvilIcons name="search" size={24} color="black" />
              <Text style={{ opacity: 0.6, fontFamily: "outfitRegular" }}>
                Search Product
              </Text>
            </View>
          </Pressable>
          <View style={{ padding: 20 }}>
            <View
              style={{
                backgroundColor: Colors.defaultBg,
                height: 150,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontFamily: "outfitRegular",
                  fontSize: 15,
                  color: "gray",
                }}
              >
                Total Invoice
              </Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.default,
                  fontSize: 19,
                  marginTop: 10,
                }}
              >
                <FontAwesome6
                  name="naira-sign"
                  size={15}
                  color={Colors.default}
                />{" "}
                200,000.00
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "outfitRegular",
                  color: Colors.TextColor,
                  fontSize: 18,
                  marginVertical: 15,
                }}
              >
                Product Categories
              </Text>
              <Text
                style={{
                  fontFamily: "outfitRegular",
                  color: Colors.default,
                  fontSize: 13,
                  marginVertical: 10,
                }}
              >
                View All
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={[styles.CategoryList, { backgroundColor: "#859F3D30" }]}
              >
                <Image source={chicken} style={{ width: 70, height: 70 }} />
                <Text
                  style={{
                    fontFamily: "outfitRegular",
                    color: Colors.TextColor,
                  }}
                >
                  Poultry
                </Text>
              </View>
              <View
                style={[styles.CategoryList, { backgroundColor: "#09105730" }]}
              >
                <Image source={oil} style={{ width: 60, height: 60 }} />
                <Text
                  style={{
                    fontFamily: "outfitRegular",
                    marginTop: 4,
                    color: Colors.TextColor,
                  }}
                >
                  Dry goods
                </Text>
              </View>
              <View
                style={[styles.CategoryList, { backgroundColor: "#C62E2E30" }]}
              >
                <Image source={soda} style={{ width: 60, height: 60 }} />
                <Text
                  style={{
                    fontFamily: "outfitRegular",
                    color: Colors.TextColor,
                    marginTop: 5,
                  }}
                >
                  Drinks
                </Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfitSemiBold",
                  fontSize: 18,
                  color: Colors.TextColor,
                }}
              >
                Recent Orders
              </Text>
              <Text
                style={{
                  fontFamily: "outfitRegular",
                  fontSize: 13,
                  color: Colors.default,
                }}
              >
                View All
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: 20,
                marginTop: 20,
                marginBottom: 20,
                shadowColor: "#0000010",
                shadowOpacity: 0.05,
                shadowOffset: { width: 0.2, height: 0.1 },
                shadowRadius: 10,
                elevation: 10, // For Android shadow
              }}
            >
              <Text
                style={{
                  fontFamily: "outfitSemiBold",
                  color: Colors.TextColor,
                }}
              >
                Order ID:335523
              </Text>
              <Text style={{ marginTop: 10, fontFamily: "outfitRegular" }}>
                Date:2020-feb-19
              </Text>
              <Text
                style={{
                  color: "green",
                  fontFamily: "outfitRegular",
                  marginTop: 10,
                }}
              >
                <Feather name="check-circle" size={13} color="green" />{" "}
                Delivered
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: 20,
                marginTop: 10,
                shadowColor: "#0000010",
                shadowOpacity: 0.05,
                shadowOffset: { width: 0.2, height: 0.1 },
                shadowRadius: 10,
                elevation: 10, // For Android shadow
              }}
            >
              <Text
                style={{
                  fontFamily: "outfitSemiBold",
                  color: Colors.TextColor,
                }}
              >
                Order ID:333683
              </Text>
              <Text style={{ marginTop: 10, fontFamily: "outfitRegular" }}>
                Date:2021-feb-24
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  marginTop: 5,
                }}
              >
                <EvilIcons
                  name="clock"
                  size={17}
                  style={{ marginTop: Platform.OS === "ios" ? 5 : 0 }}
                  color="orange"
                />
                <Text
                  style={{
                    color: "orange",
                    fontFamily: "outfitRegular",
                  }}
                >
                  pending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  CategoryList: {
    height: 120,
    width: 110,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
