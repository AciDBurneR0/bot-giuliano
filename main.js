const { Client, Intents, MessageAttachment } = require("discord.js");
const { createAudioResource } = require('@discordjs/voice');
const Discord = require('discord.js');
const { DisTube } = require('distube');
const { createAudioPlayer } = require('@discordjs/voice');
const resource = createAudioResource('/sounds/soundBusted.mp3');
const player = createAudioPlayer();
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES
  ],
});
//Costanti per il music bot
const fs = require('fs')
const config = require('./config.json')
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')
//
client.config = require('./config.json')
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
  ],
  youtubeDL: false
})
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

client.emotes = config.emoji


fs.readdir('./commands/', (err, files) => {
  if (err) return console.log('Could not find any commands!')
  const jsFiles = files.filter(f => f.split('.').pop() === 'js')
  if (jsFiles.length <= 0) return console.log('Could not find any commands!')
  jsFiles.forEach(file => {
    const cmd = require(`./commands/${file}`)
    console.log(`Loaded ${file}`)
    client.commands.set(cmd.name, cmd)
    if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
  })
})

client.on('ready', () => {
  console.log(`${client.user.tag} is ready to play music.`)
})

client.on('messageCreate', async message => {
  if(/* message.author.username != "ElectriiX" &&  */message.author.username != "TheMeger10"){
  if (message.author.bot || !message.guild) return
  const prefix = config.prefix
  if (!message.content.startsWith(prefix)) return
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
  
  if (!cmd) return
  if (cmd.inVoiceChannel && !message.member.voice.channel) {
    return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
  }
  try {
    cmd.run(client, message, args)
  } catch (e) {
    console.error(e)
    message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
  }
}
})
/*  | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
    | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\`
  }\`  */
const status = queue =>
  `Volume: \`${queue.volume}%\``
client.distube
  .on('playSong', (queue, song) =>
    queue.textChannel.send(
      `${client.emotes.play} | Te sto a sona \`${song.name}\` - \`${song.formattedDuration}\`\nCanzone gentilmente offerta da quel frocio de: ${
        song.user
      }\n${status(queue)}`
    )
  )
  .on('addSong', (queue, song) =>
    queue.textChannel.send(
      `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send(
      `${client.emotes.success} | Added \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) to queue\n${status(queue)}`
    )
  )
  .on('error', (channel, e) => {
    channel.send(`${client.emotes.error} | Porca la madonna hai sbragato tutto: ${e.toString().slice(0, 1974)}`)
    console.error(e)
  })
  .on('empty', channel => channel.send('Nun ce sta più nessuno, andatevela a pija nculo...'))
  .on('searchNoResult', (message, query) =>
    message.channel.send(`${client.emotes.error} | Ma che cazzo è, nun c'ha senso quello che hai scritto \`${query}\`!`)
  )
  .on('finish', queue => queue.textChannel.send('Ho finito, mo fa er serio e lasciame na mancia!'))


  /* LOGICHE PER SOUNDBOARD */

  /* client.on('messageCreate', async message => {
    function isCommand(message){
      return !!message.content.toLowerCase().startsWith(message);
    };

    if(isCommand('soundboard')){
      const channel = message.member.voice.channel
  
      const player = voiceDiscord.createAudioPlayer('/sounds/soundBusted.mp3');
      const resource = voiceDiscord.createAudioResource();
  
      const connection = voiceDiscord.joinVoiceChannel({
        channelId: channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.adapterCreator,
      });
  
      player.play();
      connection.subscribe(player)
    }
  }) */


  


  /* LOGICHE PER SOUNDBOARD */
//DAJEEE


//Sopra logiche per music bot

const prefix = "!";

const micheleDragonetti = "https://discord.com/channels/317372493620969474/773875188658995222/914600779887824926";

const tette = new MessageAttachment("https://i.imgur.com/boBU6CD.jpeg");

const magname = new MessageAttachment("https://i.imgur.com/6borFvZ.gif");

const fabrizio = new MessageAttachment("https://static.wixstatic.com/media/b7a07a_1877b81e5f3f4b63a612e39e221a7fed~mv2.jpg");
const sound1 = "https://www.101soundboards.com/sounds/51222-gotcha";
const reponseToManuel = [
  "Te devi sta zitto",
  "Hai rotto er cazzo",
  "Num me devi parla",
  "Ao sto a dormi",
  "Ma vedi de annaffanculo",
  "Mongoloide",
  "Cojone",
  "Li mortacci",
  "Viè cqua, a fijo de ‘na mignotta",
  "Ma va’ mmorì ammazzato",
  "Si’ te pijo t’arovino, te corco",
  "Devi solo che abbozza",
  "In culo te c’entra, ma in testa no",
  "Er duro vallo a fa’ ar cesso",
  "Stai fori coll’accuso",
  "Stamme a ‘n parmo dar culo",
  "Nun sta a fa’ er bavetta",
  "Ciccia ar culo",
  "Buzzicone",
  "Je pesa er culo",
  "C’hai le pezze ar culo",
  "Te rivorto come ‘n carzino",
  "C’hai ‘na fiatella che abbronza",
  "A ‘nfame",
];

client.once("ready", () => {
  console.log("Bot LIVE");
});

client.on("messageCreate", (message) => {
  let userRequest = message.content;
  let botResponse = message.channel;

  console.log(userRequest);

  if (userRequest === `${config.prefix} daje?`) {
    botResponse.send("eh si daje!");
  } else if (userRequest === `${config.prefix} annamo a scopa?`) {
    botResponse.send("Per forza annamo a scopa, culo pronto?");
  } else if (userRequest.startsWith(`${config.prefix} ndo cazzo sto`)) {
    botResponse.send(`Dovresti sta ner server ${message.guild.name}`);
  } else if (userRequest.includes("chi sono")) {
    botResponse.send(
      `Tu dovresti essere quello stronzo rotto n'culo de ${message.author.username}`
    );
    /* setTimeout(() => {
      botResponse.send('E non me lo chiedere mai più');
    }, 5000); */
  } else if (message.author.username === "ElectriiX") {
    const randomMessage =
      reponseToManuel[Math.floor(Math.random() * reponseToManuel.length)];
    botResponse.send(randomMessage);
  } else if (
    message.author.username === "Bahamut14" &&
    userRequest.includes("fessa")
  ) {
    console.log("inside if");
    message.channel.send({ files: [tette] });
  }else if(userRequest === 'magname er cazzo'){
    message.channel.send({ files: [magname] });
  }else if(userRequest === 'Magname er cazzo'){
    message.channel.send({ files: [magname] });
  }else if(message.author.username === "TheMeger10" && (userRequest.includes("fessa") || userRequest.includes("famiglia") || userRequest.includes("Famiglia") || userRequest.includes("Fessa"))){
    message.channel.send({files: [fabrizio]})
  }else if(userRequest === 'sound'){
    player.play(resource)
  }
  
  
  /* else if(userRequest === 'michele dragonetti'){
    message.channel.send({file: [micheleDragonetti]})
  } */
});

client.login("OTU0MTI5NjIyNDcwMTMxNzEy.YjOodA.p76ftt_eO2u3fDmHCFA51q6jt7M");