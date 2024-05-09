package com.doulgs.apptest

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class DeepLinkReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == Intent.ACTION_VIEW) {
            val deepLink: Uri? = intent.data
            if (deepLink != null) {
                val deepLinkString = deepLink.toString()
                Log.d("DeepLinkReceiver", "Deep link received: $deepLinkString")
                // Enviar o deeplink para o React Native
                sendEventToRN(context, "DeepLinkReceived", deepLinkString)
            }
        }
    }

    private fun sendEventToRN(context: Context, eventName: String, data: String) {
        val reactContext = context as ReactApplicationContext
        val params: WritableMap = Arguments.createMap()
        params.putString("data", data)
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }
}
