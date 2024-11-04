import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import Avatar from "../../assets/images/man.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Feather
          name="chevron-left"
          size={30}
          color={Colors.default}
          style={{ position: "absolute", left: 10 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfitRegular",
          }}
        >
          Profile
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={Avatar}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: Colors.default,
            borderRadius: 100,
          }}
        />
        <Text style={{ fontFamily: "outfit", marginTop: 10 }}>
          Favour Omojola
        </Text>
        <Text style={{ fontFamily: "outfit", opacity: 0.5, marginTop: 10 }}>
          Omojolaobaloluwa@gmail.com
        </Text>
      </View>
      <View style={{ padding: 15 }}>
        <View
          style={{
            backgroundColor: Colors.defaultBg,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <View style={{ padding: 15 }}>
            <Text>
              <FontAwesome5 name="user-circle" size={17} color="gray" /> Profile
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              opacity: 0.1,
              width: "100%",
              height: 1,
            }}
          ></View>
          <View style={{ padding: 15 }}>
            <Text>
              <FontAwesome name="shield" size={17} color="gray" /> security
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              opacity: 0.1,
              width: "100%",
              height: 1,
            }}
          ></View>
          <View style={{ padding: 15 }}>
            <Text>
              <AntDesign name="earth" size={17} color="gray" /> Language
            </Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 15, marginTop: 10 }}>
        <View
          style={{
            backgroundColor: Colors.defaultBg,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <View style={{ padding: 15 }}>
            <Text>
              <FontAwesome5 name="user-circle" size={17} color="gray" /> Account
              Settings
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              opacity: 0.1,
              width: "100%",
              height: 1,
            }}
          ></View>
          <View style={{ padding: 15 }}>
            <Text>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={17}
                color="gray"
              />{" "}
              Orders
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              opacity: 0.1,
              width: "100%",
              height: 1,
            }}
          ></View>
          <View style={{ padding: 15 }}>
            <Text>
              <Feather name="bell" size={17} color="gray" /> Notifications
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              opacity: 0.1,
              width: "100%",
              height: 1,
            }}
          ></View>
          <View style={{ padding: 15, flexDirection: "row", gap: 5 }}>
            <Ionicons name="exit-outline" size={24} color="red" />
            <Text style={{ color: "red" }}>Log out</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
