import React from "react";
import { StatusBar } from "expo-status-bar";
import { Linking } from "react-native";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
} from "react-native";

import RTN from "rtn-calculator/js/NativeCalculator";
import RTNP from "rtn-payment/js/Native";

export default function App() {
  useEffect(() => {
    console.log(RTN?.add);
    console.log(RTNP?.startPayment);
  }, []);

  function pagamento() {
    try {
      const scheme = "payment-app";
      const host = "pay";
      const returnScheme = "return_scheme";
      const amount = "100";
      const editableAmount = "0";
      const transactionType = "DEBIT";
      const installmentType = "NONE";
      const installmentCount = "2";
      const orderId = "123";

      const uri = `${scheme}://${host}?return_scheme=${returnScheme}&amount=${amount}&editable_amount=${editableAmount}&transaction_type=${transactionType}`;

      Linking.sendIntent();
    } catch (error) {
      Alert.alert("Erro", `${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Olá Mundo! vamos gerar log`s</Text>
      <Button title="Iniciar Pagamento" onPress={pagamento} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
});
