module.exports = {
  name: 'cantame',
  category: 'musica',
  aliases: ['canta', 'sona', 'fischia'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(' ')
    if (!string) return message.channel.send(`${client.emotes.error} | Me devi da di che te devo sona!`)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
  }
}
