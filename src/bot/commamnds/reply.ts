import { EmbedBuilder, Message } from "discord.js";

export default function reply(interaction: Message, embed: EmbedBuilder) {
  interaction.reply({
    embeds: [embed]
  })
}
