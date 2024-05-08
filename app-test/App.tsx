import React, { useState } from "react";
import { View, TextInput, Button, Alert, Linking } from "react-native";
import { Picker } from "@react-native-picker/picker";

import PaymentModule from "./PaymentModule";

const App = () => {
  function handleOpenPayment() {
    PaymentModule.startPayment("1000", "123", false, "DEBIT");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 16 }}>
      <Button title="Start Payment" onPress={handleOpenPayment} />
      {/*  <Button title="Start Config" onPress={() => Linking.openSettings()} /> */}
    </View>
  );
};

export default App;
