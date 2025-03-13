import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import { Feather } from "@expo/vector-icons";

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addItemBtn}>
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    }

    const amount = item.amount?.split(".") || ["0", "00"];

    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name === "Food"
                ? Colors.blue
                : item.name === "Saving"
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockTxt1,
            {
              color:
                item.name === "Food"
                  ? Colors.black
                  : item.name === "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockTxt2,
            {
              color:
                item.name === "Food"
                  ? Colors.black
                  : item.name === "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          ₹{amount[0]}.{" "}
          <Text
            style={[
              styles.expenseBlockTxt2Span,
              {
                color:
                  item.name === "Food"
                    ? Colors.black
                    : item.name === "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {amount[1]}
          </Text>
        </Text>
        <View style={styles.expenseBlock3View}>
          <Text
            style={[
              styles.expenseBlockTxt3,
              {
                color:
                  item.name === "Food"
                    ? Colors.black
                    : item.name === "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const staticItem = [{ name: "Add Item" }];

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.PoppinsRegular,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.PoppinsBold,
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontFamily: Fonts.PoppinsMedium,
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
  expenseBlockTxt3: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.PoppinsRegular,
  },
});
