package com.RTNPayment;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

public class RTNPaymentModule extends ReactContextBaseJavaModule {

    public static String NAME = "RTNPayment";

    RTNPaymentModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public String startPayment(String amount, String transactionType, String installmentType, String installmentCount, String orderId, String editableAmount, String returnScheme, Promise promise) {
        try {
            Uri.Builder uriBuilder = new Uri.Builder();
            uriBuilder.authority("pay");
            uriBuilder.scheme("payment-app");
            uriBuilder.appendQueryParameter("return_scheme", returnScheme);
            uriBuilder.appendQueryParameter("amount", amount);
            uriBuilder.appendQueryParameter("editable_amount", editableAmount);
            uriBuilder.appendQueryParameter("transaction_type", transactionType);
            uriBuilder.appendQueryParameter("installment_type", installmentType);
            uriBuilder.appendQueryParameter("installment_count", installmentCount);
            uriBuilder.appendQueryParameter("order_id", orderId);

            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setData(uriBuilder.build());

            // Obter a Activity atual e iniciar a Intent
            ReactApplicationContext reactContext = getReactApplicationContext();
            reactContext.startActivity(intent);

            // Exibir o link na Intent usando um Toast
            new Handler(reactContext.getMainLooper()).post(() -> {
                Toast.makeText(reactContext, "Link chamado: " + intent.getDataString(), Toast.LENGTH_LONG).show();
            });

            promise.resolve("Payment initiated");
            return "Payment initiated";
        } catch (Exception e) {
            promise.reject("PaymentError", e);
        }
    }
}
