const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('i Love iR26RR','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iR25RR Online')
    console.log('---------------')
  });

client.login(process.env.BOT_TOKEN);
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('i Love iR25RR','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iR26RR Online')
    console.log('---------------')
  });

client.login(process.env.BOT_TOKE);
