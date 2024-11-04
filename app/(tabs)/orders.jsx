import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Orders = () => {
  const price = 500;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    if (count < 2) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
              Order List
            </Text>
            <View style={{ position: "relative" }}>
              <MaterialCommunityIcons
                name="cart-variant"
                size={24}
                color="gray"
              />
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
          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
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
              <TextInput
                placeholder="Search Cart item...."
                style={{
                  opacity: 0.6,
                  fontFamily: "outfitRegular",
                  width: 300,
                }}
              />
            </View>
          </View>
          <View style={{ height: 320 }}>
            <ScrollView>
              <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    marginBottom: 30,
                  }}
                >
                  <View
                    style={{ backgroundColor: Colors.defaultBg, padding: 10 }}
                  >
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
                        ₦{price * count.toLocaleString()}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          onPress={() => increment()}
                          style={{
                            backgroundColor: Colors.defaultBg,
                            borderRadius: 10,
                            padding: 7,
                          }}
                        >
                          <Text>+</Text>
                        </TouchableOpacity>
                        <View>
                          <Text
                            style={{
                              paddingHorizontal: 15,
                              paddingVertical: 5,
                              borderRadius: 10,
                            }}
                          >
                            {count}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => decrement()}
                          style={{
                            backgroundColor: Colors.defaultBg,
                            borderRadius: 10,
                            padding: 7,
                          }}
                        >
                          <Text>-</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                borderColor: "#00000025",
                borderWidth: 1,
                padding: 15,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <TextInput
                style={{ width: "95%" }}
                placeholder="input Promo Code"
                returnKeyType="done"
              />
              <MaterialCommunityIcons
                name="checkbox-marked-circle-outline"
                size={24}
                color="green"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontFamily: "outfit" }}>
                  Sub Total
                </Text>
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontFamily: "outfit" }}>
                  Delivery Fee
                </Text>
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontFamily: "outfit" }}>
                  Discount
                </Text>
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontFamily: "outfit" }}>
                  Total
                </Text>
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
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.default,
                  padding: 20,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    color: "white",
                    fontFamily: "outfit",
                  }}
                >
                  CheckOut
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({});
