import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import axios from "axios";
const signUp = () => {
  //form input state
  const [Fullname, setName] = useState("");
  const [email, Setemail] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [NickName, setNickName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [Loader, SetLoader] = useState(false);
  //initializing route
  const router = useRouter();

  // Validation Function
  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!Fullname.trim()) {
      errors.Fullname = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        SetLoader(true); // Set loader state to true
        const data = { Fullname, email, phoneNumber, password, NickName };
        const response = await axios.post(
          "  https://fce2-102-89-69-26.ngrok-free.app/api/users", // Ensure this is the correct URL
          data
        );
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        if (response.status === 200) {
          Alert.alert("Success", "User registered successfully");
          router.push("login");
        } else {
          Alert.alert("Error", response.data.message);
        }
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error);
        Alert.alert(
          "Error",
          error.response ? error.response.data.message : "Something went wrong"
        );
      } finally {
        SetLoader(false); // Set loader state back to false
      }
    } else {
      Alert.alert("Error", "Please fix the highlighted fields");
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
              onPress={() => router.back()}
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
              Register now
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
              Sign up with your email and password to continue
            </Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputField}>
              <AntDesign
                name="user"
                style={{ marginStart: 10 }}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="User name"
                value={Fullname}
                onChangeText={(text) => setName(text)}
              />
            </View>
            {errors.Fullname && (
              <Text style={styles.errorText}>{errors.Fullname}</Text>
            )}

            <View style={styles.inputField}>
              <FontAwesome5
                name="user-plus"
                style={{ marginStart: 10 }}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="What do we call you"
                value={NickName}
                onChangeText={(text) => setNickName(text)}
              />
            </View>

            <View style={styles.inputField}>
              <AntDesign
                name="mail"
                style={{ marginStart: 10 }}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => Setemail(text)}
                keyboardType="email-address"
              />
            </View>
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <View style={styles.inputField}>
              <AntDesign
                name="phone"
                style={{ marginStart: 10 }}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={(text) => SetPhoneNumber(text)}
                keyboardType="number-pad"
              />
            </View>
            {errors.phoneNumber && (
              <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            )}

            <View style={styles.inputField}>
              <AntDesign
                name="lock"
                style={{ marginStart: 10 }}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={styles.inputField}>
              <AntDesign
                name="lock"
                style={{ marginStart: 10 }}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={(text) => setconfirmPassword(text)}
                secureTextEntry
              />
            </View>
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
              {Loader ? (
                <ActivityIndicator />
              ) : (
                <>
                  <MaterialIcons name="navigate-next" size={24} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    Sign Up
                  </Text>
                </>
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
                - Or sign in with -
              </Text>
            </View>
            <TouchableOpacity style={styles.google}>
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
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  color: "#787878",
                }}
              >
                i have an account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("login");
                }}
              >
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: "bold",
                  }}
                >
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signUp;

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  inputField: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: "#1c1c1c08",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 25,
    marginTop: 20,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 280,
  },
  submit: {
    width: "100%",
    backgroundColor: Colors.default,
    padding: 20,
    borderRadius: 30,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
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
