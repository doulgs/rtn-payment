import { Button, Linking, ToastAndroid, View } from "react-native";
import PaymentModule from "./PaymentModule";
import { realizarImpressao } from "./controlarImpressao";

import React, { useEffect } from "react";

const App = () => {
  function handleOpenPayment() {
    PaymentModule.startPayment("1000", "123", false, "CREDIT");
  }

  useEffect(() => {
    const handleOpenURL = async (event: { url: string }) => {
      const url = new URL(event.url);
      const params = new URLSearchParams(url.search);

      const extractedParams = {
        cardholder_name: params.get("cardholder_name") ?? "",
        itk: params.get("itk") ?? "",
        atk: params.get("atk") ?? "",
        authorization_date_time: "2024-02-19T19:29:12.403Z",
        brand: params.get("brand") ?? "",
        order_id: params.get("order_id") ?? "",
        authorization_code: params.get("authorization_code") ?? "",
        installment_count: params.get("installment_count") ?? "",
        pan: params.get("pan") ?? "",
        type: params.get("type") ?? "",
        entry_mode: params.get("entry_mode") ?? "",
        account_id: params.get("account_id") ?? "",
        customer_wallet_provider_id:
          params.get("customer_wallet_provider_id") ?? "",
        code: params.get("code") ?? "",
      };

      //console.log("Parametros extraidos -->", extractedParams);

      if (extractedParams.code === "0") {
        console.log(`processamento do pagamento, ${url} `);
        ToastAndroid.show(`${extractedParams}`, ToastAndroid.LONG);
      } else {
        ToastAndroid.show("Falha ao finalizar pagamento", ToastAndroid.LONG);
        console.log(`Erro ao finalizar no processamento do pagamento, ${url} `);
      }
    };

    Linking.addEventListener("url", handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log("O aplicativo foi aberto por um deep link:", url);
      }
    });

    return () => {
      Linking.removeAllListeners("url");
    };
  }, [handleOpenPayment]);

  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 16 }}>
      <Button title="Start Payment" onPress={handleOpenPayment} />
      <Button title="Start Payment" onPress={realizarImpressao} />
      {/*  <Button title="Start Config" onPress={() => Linking.openSettings()} /> */}
    </View>
  );
};

export default App;
