module.exports = {
  name: 'ripeti',
  aliases: ['loop', 'ancora'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Nun ce sta 'cazzo che te ripeto?`)
    let mode = null
    switch (args[0]) {
      case 'off':
        mode = 0
        break
      case 'song':
        mode = 1
        break
      case 'queue':
        mode = 2
        break
    }
    mode = queue.setRepeatMode(mode)
    mode = mode ? (mode === 2 ? 'Ripeti queue' : 'Ripeti canzone') : 'Off'
    message.channel.send(`${client.emotes.repeat} | Sto a mette er loop a \`${mode}\``)
  }
}
