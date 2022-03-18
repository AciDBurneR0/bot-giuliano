module.exports = {
  name: 'prossima',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Nun ce sta ncazzo nella queue cojone de merda!`)
    try {
      const song = await queue.skip()
      message.channel.send(`${client.emotes.success} | Daje con la prossima! Mo te canto:\n${song.name}`)
    } catch (e) {
      message.channel.send(`${client.emotes.error} | ${e}`)
    }
  }
}
