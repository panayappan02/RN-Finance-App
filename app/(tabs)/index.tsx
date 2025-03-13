import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { Stack } from "expo-router";

import Colors from "@/constants/Colors";
import Header from "@/components/Header";
import Fonts from "@/constants/Fonts";
import ExpenseBlock from "@/components/ExpenseBlock";
import ExpenseList from "@/data/expenses.json";
import SpendingList from "@/data/spending.json";
import IncomeList from "@/data/income.json";
import IncomeBlock from "@/components/IncomeBlock";
import SpendingBlock from "@/components/SpendingBlock";

const Page = () => {
  const pieData = [
    { value: 47, color: Colors.tintColor, focused: true, text: "47%" },
    { value: 40, color: Colors.blue, text: "40%" },
    { value: 16, color: Colors.white, text: "16%" },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 }}
        >
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.expensesText}>
                My <Text style={styles.boldText}>Expenses</Text>
              </Text>
              <Text style={styles.amountText}>
                ₹1475.
                <Text style={styles.amountSubText}>00</Text>
              </Text>
            </View>
            <View style={styles.chartContainer}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => (
                  <View style={styles.centerLabel}>
                    <Text style={styles.centerLabelText}>47%</Text>
                  </View>
                )}
              />
            </View>
          </View>
          <ExpenseBlock expenseList={ExpenseList} />
          <IncomeBlock incomeList={IncomeList} />
          <SpendingBlock spendingList={SpendingList} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    gap: 10,
  },
  expensesText: {
    color: Colors.white,
    fontSize: 16,
  },
  boldText: {
    fontFamily: Fonts.PoppinsBold,
  },
  amountText: {
    color: Colors.white,
    fontSize: 36,
    fontFamily: Fonts.PoppinsBold,
  },
  amountSubText: {
    fontSize: 22,
    fontFamily: Fonts.PoppinsMedium,
  },
  chartContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  centerLabel: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerLabelText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});
