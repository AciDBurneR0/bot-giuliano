module.exports = {
  name: 'mischia',
  category: 'musica',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Le palle mie te mischio!`)
    queue.shuffle()
    message.channel.send('Ho mischiato le canzoni')
  }
}
