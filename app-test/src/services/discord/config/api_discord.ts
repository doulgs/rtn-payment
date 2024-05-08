import axios from "axios";

export const api_discord = axios.create({
  baseURL: "https://discord.com/api/webhooks",
});
