module.exports = {
  name: 'fermete',
  category: 'musica',
  aliases: ['fermo', 'ba'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Ma che cazzo dici che nun sto a sona gniente`)
    queue.stop()
    message.channel.send(`${client.emotes.success} | Me so fermato, stabbono!`)
  }
}
