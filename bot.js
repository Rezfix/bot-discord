const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('Sleeping... نايم','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log(' You Is Online')
    console.log('---------------')
  });

client.login(process.env.BOT_TOKEN);
