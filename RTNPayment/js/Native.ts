import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  startPayment(
    amount: string,
    transactionType: string,
    installmentType: string,
    installmentCount: string,
    orderId: string,
    editableAmount: string,
    returnScheme: string
  ): void;
}

export default TurboModuleRegistry.get<Spec>("RTNPayment") as Spec | null;
