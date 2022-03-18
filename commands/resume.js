module.exports = {
  name: 'riprendi',
  aliases: ['resume', 'ricomincia'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Ricomincio a scopamme tu madre? :)`)
    queue.resume()
    message.channel.send('Daje ricomincio a canta!')
  }
}
