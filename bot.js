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
const HeyIm = new Discord.Client();

HeyIm.on('ready', () => {
   HeyIm.user.setGame('Rezfix','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('HeyIm Online')
    console.log('---------------')
  });

HeyIm.login(process.env.BOT_TOK);
const AbuA = new Discord.Client();

AbuA.on('ready', () => {
   AbuA.user.setGame('Rezfix','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('AbuA Online')
    console.log('---------------')
  });

AbuA.login(process.env.BOT_TOK);
