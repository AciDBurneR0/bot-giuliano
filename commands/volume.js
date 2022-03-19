module.exports = {
  name: 'volume',
  aliases: ['v', 'set', 'set-volume'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Che t'abbasso, sto cazzo t'abbasso!`)
    const volume = parseInt(args[0])
    console.log(volume > 100, 'VOLUME');
    if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Ma li mortacci tua damme un valore normale!`)
    if (volume > 100) return message.channel.send(`${client.emotes.error} | Ciccia ar culo`)
    queue.setVolume(volume)
    message.channel.send(`${client.emotes.success} | Casse settate al \`${volume}\`%`)
  }
}
