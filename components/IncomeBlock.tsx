import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import { IncomeType } from "@/types";
import {
  DollarIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
} from "@/constants/Icons";
import { Feather } from "@expo/vector-icons";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />;
    if (item.name === "Freelancing") {
      icon = <WalletCardIcon width={22} height={22} color={Colors.white} />;
    } else if (item.name === "Interest") {
      icon = <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />;
    }
    let amount = item.amount.split(".");

    return (
      <View style={styles.incomeContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>{icon}</View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.amountText}>
          ${amount[0]}.<Text style={styles.amountDecimalText}>{amount[1]}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.titleText}>
        My <Text style={{ fontFamily: Fonts.PoppinsBold }}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({
  incomeContainer: {
    backgroundColor: Colors.grey,
    padding: 20,
    borderRadius: 20,
    marginRight: 15,
    width: 150,
    gap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    alignSelf: "flex-start",
  },
  nameText: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsRegular,
  },
  amountText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.PoppinsBold,
  },
  amountDecimalText: {
    fontSize: 14,
    fontFamily: Fonts.PoppinsMedium,
  },
  titleText: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 20,
  },
});
