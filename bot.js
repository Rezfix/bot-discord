const Discord = require("discord.js");
const iR25RR = new Discord.Client();

iR25RR.on('ready', () => {
    iR25RR.user.setGame('i Love iR26RR','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iR25RR Online')
    console.log('---------------')
  });

iR25RR.login(process.env.BOT_TOKEN);
const iR26RR = new Discord.Client();

iR26RR.on('ready', () => {
    client.user.setGame('i Love iR25RR','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iR26RR Online')
    console.log('---------------')
  });

iR26RR.login(process.env.BOT_TOKE);
