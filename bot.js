const Discord = require("discord.js");
const iR25RR = new Discord.Client();

iR25RR.on('ready', () => {
    iR25RR.user.setGame('i Love iR26RR','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iR25RR Online')
    console.log('---------------')
  });

iR25RR.login(process.env.BOT_TOKEN);
const Spaiky = new Discord.Client();

Spaiky.on('ready', () => {
   Spaiky.user.setGame('i Love iR25RR','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iR26RR Online')
    console.log('---------------')
  });

Spaiky.login(process.env.BOT_TOKE);
const iTaly = new Discord.Client();

iTaly.on('ready', () => {
   iTaly.user.setGame('أرتبطت لين تربطت','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('iTaly Online')
    console.log('---------------')
  });

iTaly.login(process.env.BOT_TOK);
