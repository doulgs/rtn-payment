import { NativeModules } from "react-native";

const { PaymentModule } = NativeModules;

export default {
  startPayment: (
    amount,
    orderId,
    editableAmount,
    transactionType,
    installmentType,
    installmentCount
  ) => {
    return PaymentModule.startPayment(
      amount,
      orderId,
      editableAmount,
      transactionType,
      installmentType,
      installmentCount
    );
  },
  // Adicione outras funções aqui conforme necessário
};
