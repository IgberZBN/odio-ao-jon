import { Message } from "discord.js"
import { EmbedIP } from "./embed/embedIP"
import reply from "./reply"
import embedStatus from "./embed/embedStatus"
import embedPlayers from "./embed/embedPlayer"

const commands = {
  "server-ip": (interaction: Message) => reply(interaction, new EmbedIP()),
  "server-status": (interaction: Message) => embedStatusWrapper(interaction),
  "server-players": (interaction: Message) => embedPlayersWrapper(interaction)
}

async function embedStatusWrapper(interaction: Message) {
  const result = await embedStatus();
  reply(interaction, result);
}

async function embedPlayersWrapper(interaction: Message) {
  const result = await embedPlayers();
  reply(interaction, result);
}

export default commands
