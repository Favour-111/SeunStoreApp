import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";
import googleicn from "../assets/images/google.png";
import { useRouter } from "expo-router";
import logo from "../assets/images/infiniteBlue.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Checkbox from "expo-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import axios from "axios";
const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [loader, SetLoader] = useState(false);
  const signIn = async () => {
    try {
      SetLoader(true);
      const response = await axios.post(
        "  https://fce2-102-89-69-26.ngrok-free.app /login",
        { password, email }
      );
      if (response.status === 200) {
        Alert.alert("Login successful");
        router.replace("home");
        console.log(response.data.message);
        const token = response.data.message;
        AsyncStorage.setItem("token", token);
      } else {
        Alert.alert("Login failed");
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert("Invalid email address");
    } finally {
      SetLoader(false);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            paddingTop: Platform.OS === "android" ? 55 : 10,
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000010",
              borderRadius: 100,
            }}
            onPress={() => router.canGoBack()}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontWeight: "800",
              opacity: 0.8,
              fontSize: 25,
              letterSpacing: 1,
              color: Colors.TextColor,
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 13,
              opacity: 0.4,
              color: Colors.TextColor,
              marginTop: 5,
            }}
          >
            Access your account by inputing email and password
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputField}>
            <Fontisto
              name="email"
              style={{ marginStart: 10 }}
              size={20}
              color="black"
            />
            <TextInput
              style={styles.input} // Added specific TextInput styles
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputField}>
            <AntDesign
              name="lock1"
              style={{ marginStart: 10 }}
              size={20}
              color="black"
            />
            <TextInput
              style={styles.input} // Added specific TextInput styles
              placeholder="password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text
                style={{
                  color: Colors.TextColor,
                  fontWeight: "bold",
                  opacity: 0.7,
                }}
              >
                Save password
              </Text>
            </View>
            <TouchableOpacity style={{ marginVertical: 20 }}>
              <Text style={{ color: Colors.default }}>Forgot password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              signIn();
            }}
          >
            {loader ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Sign in
              </Text>
            )}
          </TouchableOpacity>

          <View>
            <Text
              style={{
                marginTop: 30,
                textAlign: "center",
                color: "gray",
                fontWeight: "600",
              }}
            >
              - Or continue with -
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push("home");
            }}
            style={styles.google}
          >
            <Image
              source={googleicn}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#4285F4",
                fontSize: 15,
              }}
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.google}>
            <FontAwesome5 name="apple" size={20} color="black" />
            <Text
              style={{
                fontWeight: "bold",
                color: "#4285F4",
                fontSize: 15,
              }}
            >
              apple
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{
                color: "#787878",
              }}
            >
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("signUp");
              }}
            >
              <Text
                style={{
                  color: Colors.TextColor,
                  fontWeight: "bold",
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  inputField: {
    paddingHorizontal: 10, // Reduced padding for better alignment
    paddingVertical: 13,
    backgroundColor: "#1c1c1c08",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 25,
    marginTop: 20,
  },
  input: {
    paddingHorizontal: 10, // Padding inside the TextInput
    paddingVertical: 10, // Padding inside the TextInput'
    width: 280,
  },
  submit: {
    width: "100%",
    backgroundColor: Colors.default,
    padding: 20,
    borderRadius: 30,
  },
  google: {
    width: "100%",
    backgroundColor: "#4285F420",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
  },
});
