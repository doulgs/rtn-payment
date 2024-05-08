import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  WebhookType,
  discord_props,
  gravar_log,
} from "./src/services/discord/gravar_log";

export default function App() {
  async function gerar_log_retaguarda() {
    const config: discord_props = {
      webhook: WebhookType.LOG,
      content: "Douglas Developer",
      embeds: [
        {
          title: "Douglas de Souza Domiciano",
          description: "Esta é a descrição da mensagem.",
          color: 5763719,
          fields: [
            {
              name: "Gerar Log",
              value:
                "Lorem ipsum dolor sit amet. Rem repellat velit sed beatae temporibus eum voluptatem fugiat. Id ipsam enim a maiores ratione qui reprehenderit ducimus eum vitae error id unde velit.",
              inline: false,
            },
          ],
        },
      ],
    };
    await gravar_log(config);
  }
  async function gerar_log_error_retaguarda() {
    const config: discord_props = {
      webhook: WebhookType.ERROR,
      content: "Douglas Developer",
      embeds: [
        {
          title: "Douglas de Souza Domiciano",
          description: "Esta é a descrição da mensagem.",
          color: 15548997,
          fields: [
            {
              name: "Gerar Log Error",
              value:
                "Lorem ipsum dolor sit amet. Rem repellat velit sed beatae temporibus eum voluptatem fugiat. Id ipsam enim a maiores ratione qui reprehenderit ducimus eum vitae error id unde velit.",
              inline: false,
            },
          ],
        },
      ],
    };
    await gravar_log(config);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Olá Mundo! vamos gerar log`s</Text>
      <Button title="Gerar_Log" onPress={gerar_log_retaguarda} />
      <Button title="Gerar_Log_Error" onPress={gerar_log_error_retaguarda} />
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
