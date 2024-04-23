import MinecraftReponse from "./interface/minecraftResponse";

const API_URL: string = "https://api.mcstatus.io/v2/status/java/bra0.primoshost.com.br:25571"

export default async function getMinecraftResponse(): Promise<MinecraftReponse> {
  const resp = await fetch(API_URL)
  return await resp.json() as MinecraftReponse
}
