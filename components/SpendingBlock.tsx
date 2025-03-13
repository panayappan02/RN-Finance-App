import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/Icons";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  let icon = <DollarIcon width={22} height={22} color={Colors.white} />;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        July <Text style={styles.headerBold}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        if (item.name == "AirBnB Rent") {
          icon = <AirbnbIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Netflix") {
          icon = <NetflixIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Spotify") {
          icon = <SpotifyIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Figma") {
          icon = <FigmaIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Online Shopping") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        }

        return (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.iconContainer}>{icon}</View>
            <View style={styles.itemDetails}>
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
              </View>
              <Text style={styles.itemAmount}>{item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "flex-start",
  },
  headerText: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 20,
  },
  headerBold: {
    fontFamily: Fonts.PoppinsBold,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: Colors.grey,
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    gap: 5,
  },
  itemName: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
  itemDate: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsRegular,
  },
  itemAmount: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
});
