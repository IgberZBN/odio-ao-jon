import { EmbedBuilder } from "discord.js"
import getMinecraftResponse from "../../../api"

export default async function embedPlayers() {
  const { players } = await getMinecraftResponse()
  const playersNames = await formatPlayers()

  const embed = {
    title: "Server Players",
    description: `
Players online: ${players.online}
Max players: ${players.max}

Players name: 
${playersNames.map(name => `${name}\n`).join('')}
`
  }
  return new EmbedBuilder(embed)
}

async function formatPlayers() {
  const { players } = await getMinecraftResponse()

  const playersNames = players.list.map(player => player.name_clean);

  return playersNames
}
