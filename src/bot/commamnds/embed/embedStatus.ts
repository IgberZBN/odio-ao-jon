import { EmbedBuilder } from "discord.js";
import getMinecraftResponse from "../../../api";

export default async function embedStatus() {
  const { online } = await getMinecraftResponse()
  const embed = {
    title: "Server Status",
    description: `Server is ${online ? "**Online** :white_check_mark:" : "**Offiline**"}`,
  }
  return new EmbedBuilder(embed)
}
