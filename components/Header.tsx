import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/24.jpg" }}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Hi, Jenny</Text>
            <Text style={styles.budgetText}>
              Your <Text style={styles.budgetBold}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.transactionButton}>
          <Text style={styles.transactionText}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 70,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  textContainer: {
    marginLeft: 10,
  },
  greetingText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.PoppinsRegular,
  },
  budgetText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
  },
  budgetBold: {
    fontFamily: Fonts.PoppinsBold,
  },
  transactionButton: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 8,
    borderRadius: 10,
  },
  transactionText: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsRegular,
  },
});
