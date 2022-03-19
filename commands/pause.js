module.exports = {
  name: 'pausa',
  aliases: ['hold'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Che cazzo me fermo che nun sto a fa gniente!`)
    if (queue.pause) {
      queue.resume()
      return message.channel.send('Ricomincio a canta')
    }
    queue.pause()
    message.channel.send('Me fermo nattimo')
  }
}
