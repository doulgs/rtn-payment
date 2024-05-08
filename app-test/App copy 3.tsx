import React, { useState } from "react";
import { View, TextInput, Button, Alert, Linking } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
  const [amount, setAmount] = useState("");
  const [editableAmount, setEditableAmount] = useState("0");
  const [transactionType, setTransactionType] = useState("DEBIT");
  const [installmentType, setInstallmentType] = useState("NONE");
  const [installmentCount, setInstallmentCount] = useState("");
  const [orderId, setOrderId] = useState("");

  const transactionTypes = [
    "DEBIT",
    "CREDIT",
    "VOUCHER",
    "INSTANT_PAYMENT",
    "PIX",
  ];
  const installmentTypes = ["MERCHANT", "ISSUER", "NONE"];

  const handlePayment = () => {
    //deeplinktest
    const uri = `payment-app://pay?return_scheme=com.doulgs.apptest&amount=${amount}&editable_amount=${editableAmount}&transaction_type=${transactionType}`;
    Linking.openURL(uri);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 16 }}>
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
      <Picker
        selectedValue={editableAmount}
        onValueChange={(itemValue) => setEditableAmount(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
      </Picker>
      <Picker
        selectedValue={transactionType}
        onValueChange={(itemValue) => setTransactionType(itemValue)}
      >
        {transactionTypes.map((type, index) => (
          <Picker.Item key={index} label={type} value={type} />
        ))}
      </Picker>
      <Picker
        selectedValue={installmentType}
        onValueChange={(itemValue) => setInstallmentType(itemValue)}
      >
        {installmentTypes.map((type, index) => (
          <Picker.Item key={index} label={type} value={type} />
        ))}
      </Picker>
      <TextInput
        placeholder="Installment Count"
        value={installmentCount}
        onChangeText={setInstallmentCount}
      />
      <TextInput
        placeholder="Order ID"
        value={orderId}
        onChangeText={setOrderId}
      />
      <Button title="Start Payment" onPress={handlePayment} />
      {/*  <Button title="Start Config" onPress={() => Linking.openSettings()} /> */}
    </View>
  );
};

export default App;
