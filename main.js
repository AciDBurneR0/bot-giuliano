const { Client, Intents, MessageAttachment } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});

const prefix = "!";

const micheleDragonetti =
  "https://discord.com/channels/317372493620969474/773875188658995222/914600779887824926";

const tette = new MessageAttachment("https://i.imgur.com/boBU6CD.jpeg");

const magname = new MessageAttachment("https://i.imgur.com/6borFvZ.gif");

const fabrizio = new MessageAttachment("https://static.wixstatic.com/media/b7a07a_1877b81e5f3f4b63a612e39e221a7fed~mv2.jpg");

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
  console.log("Bot ONLINE");
});

client.on("messageCreate", (message) => {
  let userRequest = message.content;
  let botResponse = message.channel;

  console.log(userRequest);

  if (userRequest === `${prefix}daje?`) {
    botResponse.send("eh si daje!");
  } else if (userRequest === `${prefix}annamo a scopa?`) {
    botResponse.send("Per forza annamo a scopa, culo pronto?");
  } else if (userRequest.startsWith(`${prefix}server`)) {
    botResponse.send(`Il nome del server dovrebbe esse ${message.guild.name}`);
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
  }
});

//MUSIC BOT

const { DisTube } = require("distube")
//Plugin facoltativi
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")

const distube = new DisTube(client, {
    youtubeDL: false,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
    leaveOnEmpty: true,
    leaveOnStop: true
})

client.on("messageCreate", message => {
    if (message.content.startsWith("ao sona")) {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        let args = message.content.split(/\s+/)
        let query = args.slice(1).join(" ")

        if (!query) {
            return message.channel.send("Inserisci la canzone che vuoi ascoltare")
        }

        distube.play(voiceChannelBot || voiceChannel, query, {
            member: message.member,
            textChannel: message.channel,
            message: message
        })
    }

    if (message.content == "ao stoppa") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.pause(message)
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa")
        }

        message.channel.send("Song paused")
    }

    if (message.content == "ao daje") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.resume(message)
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione o canzone già in riproduzione")
        }

        message.channel.send("Song resumed")
    }
})

distube.on("addSong", (queue, song) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Song added")
        .addField("Song", song.name)

    queue.textChannel.send({ embeds: [embed] })
})

distube.on("playSong", (queue, song) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Playing song...")
        .addField("Song", song.name)
        .addField("Requested by", song.user.toString())

    queue.textChannel.send({ embeds: [embed] })
})

distube.on("searchNoResult", (message, query) => {
    message.channel.send("Canzone non trovata")
})

client.login("OTU0MTI5NjIyNDcwMTMxNzEy.YjOodA.p76ftt_eO2u3fDmHCFA51q6jt7M");