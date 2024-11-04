import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../constants/Colors";
import designImage from "../assets/images/halftone-dotted-background-free-png.webp";
import logo from "../assets/images/infinite.png";
import blackDot from "../assets/images/blackdots.png";
import { useRouter } from "expo-router";
const index = () => {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.replace("login");
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image source={designImage} style={styles.backgroundDesign} />
      <Image source={designImage} style={styles.backgroundDesign2} />
      <Image source={blackDot} style={styles.blackDot} />
      <Image source={logo} style={{ width: 70, height: 70 }} />
      <Text style={styles.logo}>seun's store</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "outfit",
  },
  backgroundDesign: {
    position: "absolute",
    bottom: -50,
    left: -120,
    right: 0,
    transform: [{ rotate: "45deg" }],
  },
  backgroundDesign2: {
    position: "absolute",
    top: -50,
    right: 0,
    left: 170,
    transform: [{ rotate: "45deg" }],
  },
  blackDot: {
    position: "absolute",
    top: 450,
    right: 20,
    width: 200,
    height: 200,
    opacity: 0.2,
  },
});
