import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: "absolute",
            bottom: 40,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 63,
            marginHorizontal: 100,
            paddingHorizontal: 10,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItem,
                  {
                    backgroundColor: focused ? Colors.tintColor : Colors.grey,
                  },
                ]}
              >
                <SimpleLineIcons name="pie-chart" size={20} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItem,
                  {
                    backgroundColor: focused ? Colors.tintColor : Colors.grey,
                  },
                ]}
              >
                <AntDesign name="swap" size={20} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItem,
                  {
                    backgroundColor: focused ? Colors.tintColor : Colors.grey,
                  },
                ]}
              >
                <FontAwesome name="user-o" size={20} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabItem: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
