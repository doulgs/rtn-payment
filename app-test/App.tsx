import React from "react";
import { Button, View } from "react-native";
import PaymentModule from "./PaymentModule";
import { realizarImpressao } from "./controlarImpressao";

const App = () => {
  function handleOpenPayment() {
    PaymentModule.startPayment("1000", "123", false, "CREDIT");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 16 }}>
      <Button title="Start Payment" onPress={handleOpenPayment} />
      <Button title="Start Payment" onPress={realizarImpressao} />
      {/*  <Button title="Start Config" onPress={() => Linking.openSettings()} /> */}
    </View>
  );
};

export default App;
