import { EmbedBuilder } from "discord.js"
import text from "./text"

export class EmbedIP extends EmbedBuilder {
  constructor() {

    const embed = {
      title: "Server IP",
      Thumbnail: {
        url: "https://cdn.discordapp.com/icons/809304175040528414/01dec44bf768dece199d7b09afeb5db3.png?size=2048"
      },
      color: 0x0099FF,
      description: text
    }

    super(embed)
  }
}

