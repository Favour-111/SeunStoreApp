import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors } from "../../constants/Colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Product");
  const [input, setInput] = useState("");
  const Category = [
    { name: "All Product" },
    { name: "Drinks" },
    { name: "Dry Goods" },
    { name: "Agro Commodities" },
    { name: "Non Food" },
    { name: "Fruit and Vegetables" },
    { name: "Oils" },
    { name: "Meats" },
    { name: "Spices" },
    { name: "Baking Goods" },
  ];

  const itms = [
    {
      id: 1,
      name: "50kg rice",
      image:
        "https://24hoursmarket.com/wp-content/uploads/2019/11/bagofrice1.jpg",
      price: 20000,
      category: "Dry Goods",
      status: "available",
    },
    {
      id: 2,
      name: "50kg oil",
      image:
        "https://shoprite.ng/wp-content/uploads/2023/05/Cooking-Oil-Vgtable-Oil-Power-750Ml-1699.99.jpg",
      price: 25000,
      category: "Dry Goods",
      status: "unavailable",
    },
    {
      id: 3,
      name: "1kg beef",
      image:
        "https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml",
      price: 2000,
      category: "Meats",
      status: "available",
    },
    {
      id: 4,
      name: "beans",
      image:
        "https://agriholders.com/wp-content/uploads/2022/06/beans-small.png",
      price: 21700,
      category: "Drinks",
      status: "available",
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
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
            Product List
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
              placeholder="Search Product"
              onPress={() => {
                setSelectedCategory("All Product");
              }}
              onChangeText={(text) => setInput(text)}
              style={{
                opacity: 0.6,
                fontFamily: "outfitRegular",
                width: 300,
              }}
            />
          </View>
        </View>

        <FlatList
          data={Category}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
          renderItem={({ item }) => {
            const isSelected = item.name === selectedCategory;
            return (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  isSelected && styles.selectedCategoryButton,
                ]}
                onPress={() => setSelectedCategory(item.name)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.selectedCategoryText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </View>

      <ScrollView style={{ backgroundColor: "white", padding: 20 }}>
        {selectedCategory && (
          <>
            {itms.filter((item) => {
              // Filter by selected category and search input
              const matchesCategory =
                selectedCategory === "All Product" ||
                item.category === selectedCategory;
              const matchesSearch = item.name
                .toLowerCase()
                .includes(input.toLowerCase());

              return matchesCategory && matchesSearch;
            }).length > 0 ? (
              <FlatList
                data={itms.filter((item) => {
                  const matchesCategory =
                    selectedCategory === "All Product" ||
                    item.category === selectedCategory;
                  const matchesSearch = item.name
                    .toLowerCase()
                    .includes(input.toLowerCase());

                  return matchesCategory && matchesSearch;
                })}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ padding: 5 }}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginBottom: 20,
                        paddingBottom: 20,
                        width: 170,
                        justifyContent: "center",
                        paddingTop: 10,
                        borderRadius: 10,
                        shadowColor: "black",
                        shadowOpacity: 0.05,
                        shadowOffset: { width: 0, height: 4 },
                        shadowRadius: 5,
                        marginRight: 10,
                        elevation: 10,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: Colors.defaultBg,
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: 25,
                          padding: 10,
                        }}
                      >
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={{
                            borderRadius: 10,
                            width: 120,
                            height: 100,
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "outfit",
                            opacity: 0.6,
                            width: 100,
                            fontSize: 16,
                            marginTop: 15,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: "black",
                            fontFamily: "outfitSemiBold",
                            fontSize: 16,
                            marginTop: 10,
                          }}
                        >
                          ₦{item.price.toLocaleString()}
                        </Text>

                        <Text
                          style={{
                            fontFamily: "outfitRegular",
                            opacity: 0.6,
                            textTransform: "uppercase",
                            fontSize: 12,
                            marginTop: 5,
                          }}
                        >
                          {item.category}
                        </Text>
                      </View>
                      <Ionicons
                        style={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                        }}
                        name="heart-outline"
                        size={24}
                        color="gray"
                      />
                      {item.status === "unavailable" ? (
                        <View
                          style={{
                            marginTop: 5,
                            backgroundColor: "#f5424220",
                            width: 100,
                            padding: 2,
                            borderRadius: 5,
                            marginTop: 10,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              textTransform: "uppercase",
                              opacity: 0.7,
                              fontFamily: "outfitSemiBold",
                              fontSize: 12,
                              color: "#f54242",
                            }}
                          >
                            {item.status}
                          </Text>
                        </View>
                      ) : (
                        <View
                          style={{
                            marginTop: 5,
                            backgroundColor: "#42f55a20",
                            width: 100,
                            padding: 2,
                            borderRadius: 5,
                            marginTop: 10,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              textTransform: "uppercase",
                              opacity: 0.7,
                              fontFamily: "outfitSemiBold",
                              fontSize: 12,
                              color: "green",
                            }}
                          >
                            {item.status}
                          </Text>
                        </View>
                      )}
                    </View>
                  );
                }}
              />
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  color: "gray",
                  marginTop: 20,
                  fontFamily: "outfitRegular",
                }}
              >
                No items available in this category.
              </Text>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  categoryButton: {
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    // borderRadius: 20,
  },
  selectedCategoryButton: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.default,
  },
  categoryText: {
    fontFamily: "outfitRegular",
    fontWeight: "200",
    opacity: 0.5,
    color: "black",
  },
  selectedCategoryText: {
    color: Colors.default,
    opacity: 1,
  },
});
