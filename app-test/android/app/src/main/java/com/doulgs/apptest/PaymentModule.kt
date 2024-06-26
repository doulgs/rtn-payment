package com.doulgs.apptest

import android.content.Intent
import android.net.Uri
import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.*
import java.lang.Exception

class PaymentModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {

    companion object {
        const val AMOUNT = "amount"
        const val ORDER_ID = "order_id"
        const val EDITABLE_AMOUNT = "editable_amount"
        const val TRANSACTION_TYPE = "transaction_type"
        const val INSTALLMENT_TYPE = "installment_type"
        const val INSTALLMENT_COUNT = "installment_count"
        const val TAG = "PaymentModule"
        private const val RETURN_SCHEME = "return_scheme"
    }

    override fun getName(): String {
        return "PaymentModule"
    }

    @ReactMethod
    fun startPayment(
            amount: String,
            orderId: String?,
            editableAmount: Boolean,
            transactionType: String?,
            installmentType: String?,
            installmentCount: String?
    ) {
        // Verificar se os campos obrigatórios foram fornecidos
        if (amount.isBlank()) {
            Log.e(TAG, "Amount is required.")
            return
        }

        if (transactionType.isNullOrBlank()) {
            Log.e(TAG, "Transaction type is required.")
            return
        }

        // Construir a URI
        val uriBuilder = Uri.Builder()
        uriBuilder.authority("pay")
        uriBuilder.scheme("payment-app")
        uriBuilder.appendQueryParameter(RETURN_SCHEME, "com.doulgs.apptest")

        // Adicionar parâmetros à URI
        uriBuilder.appendQueryParameter(AMOUNT, amount)
        uriBuilder.appendQueryParameter(EDITABLE_AMOUNT, if (editableAmount) "1" else "0")
        uriBuilder.appendQueryParameter(TRANSACTION_TYPE, transactionType)

        installmentType?.takeIf { it.isNotBlank() }?.let {
            uriBuilder.appendQueryParameter(INSTALLMENT_TYPE, it)
        }

        installmentCount?.takeIf { it.isNotBlank() }?.let {
            uriBuilder.appendQueryParameter(INSTALLMENT_COUNT, it)
        }

        orderId?.takeIf { it.isNotBlank() }?.let { uriBuilder.appendQueryParameter(ORDER_ID, it) }

        // Criar o Intent
        val intent = Intent(Intent.ACTION_VIEW)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        intent.data = uriBuilder.build()

        // Verificar se o contexto está disponível
        if (reactApplicationContext == null) {
            Log.e(TAG, "React application context is not available.")
            return
        }

        // Iniciar a atividade
        try {
            reactApplicationContext.startActivity(intent)
            Log.v(TAG, "toUri(scheme = ${intent.data})")
        } catch (e: Exception) {
            Log.e(TAG, "Failed to start payment activity: ${e.message}")
        }
    }
}
