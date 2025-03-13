import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Fonts from "@/constants/Fonts";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsRegular,
  },
});
