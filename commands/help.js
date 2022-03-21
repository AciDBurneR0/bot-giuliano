const Discord = require('discord.js')
const fs = require('fs')

const categories = [];
const fields = [];

let author = {
  name: "Professor Giuliano Romano",
  url: "https://upload.wikimedia.org/wikipedia/it/6/67/Prof_giuliano_romano.jpg",
  iconURL: null

}

module.exports = {
  name: 'aiutame',
  aliases: ['damme na mano', 'help'],

  run: async (client, message) => {

    const filesCommands = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    //Recupero le categorie dai file
    filesCommands.map(fileCommand => {
      let file = require(`../commands/${fileCommand}`);
      if (typeof file.category !== "undefined" && !categories.includes(file.category)) {
        categories.push(file.category);
      }
    })

    //Creo un field per ogni categoria
    categories.forEach(category => {
      commands = new Discord.Collection()
      let field = new Object();
      filesCommands.map(fileCommand => {
        let cmd = require(`../commands/${fileCommand}`)
        console.log(`Loaded ${fileCommand}`)
        if(cmd.category===category){
        commands.set(cmd.name, cmd)
        }
      })
      field.name = category.toUpperCase();
      field.value = commands.map(command => `\`${command.name}\``).join(', ')
      console.log(field);
      fields.push(field);

    })



    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
          .setTitle('Te serve na mano? Eccote li comandi')
          //.setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(', '))
          .setColor('RED')
          .setImage("https://upload.wikimedia.org/wikipedia/it/6/67/Prof_giuliano_romano.jpg")
          .setAuthor(author)
          .addFields(fields)
      ]
    })
  }
}
