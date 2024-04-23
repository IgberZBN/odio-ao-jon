export default interface MinecraftReponse {
  online: boolean
  players: players
  icon: string
}

interface players {
  online: number
  max: number
  list: player[]
}

interface player {
  name_clean: string
}
