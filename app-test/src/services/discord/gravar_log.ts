import { ToastAndroid } from "react-native";
import { api_discord } from "./config/api_discord";
import { colors } from "./config/colors";

export enum WebhookType {
  LOG = "/1236021137092247563/MN1J8BKfJWvkXTImNWHCwDEHPLhF9CsSEAcFeO_WVlFjK8T-nUF-NkZvBogpGOhakizW",
  ERROR = "/1236003408901705820/RFw463fCkxMzTD3ROhkFDU6KaHt1qqq-buyQ913f3Ni191NKNomewTJRWoQ0nej-z2EH",
}

export type discord_props = {
  webhook: WebhookType; //webhook
  content: string; //Conteudo da Mensagem
  embeds: embeds_props[]; //Box de informações
};
type embeds_props = {
  title: string; //"Título principal do Box";
  description: string; //"Descrição principal do Box.";
  color: colors; //Cor do Box;
  fields: fields[];
};
type fields = {
  name: string;
  value: string;
  inline: boolean;
};

export const gravar_log = async (config: discord_props) => {
  try {
    const { status } = await api_discord.post(config.webhook, config);
  } catch (err) {
    ToastAndroid.show("Não doi possivel gravar o log", ToastAndroid.SHORT);
    throw err;
  }
};
