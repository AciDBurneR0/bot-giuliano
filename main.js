const { Client, Intents, MessageAttachment } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
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
  console.log("Bot LIVE");
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
  }else if(message.author.username === "TheMeger10"){
    message.channel.send({files: [fabrizio]})
  }
});

client.login("OTU0MTI5NjIyNDcwMTMxNzEy.YjOodA.p76ftt_eO2u3fDmHCFA51q6jt7M");