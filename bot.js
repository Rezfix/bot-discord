const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

//Top invite

client.on('message',message =>{
    var prefix = "$";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://media.discordapp.net/attachments/477570106755383307/479229377037598720/22713057_151850495552450_709700562_o.jpg?width=201&height=201")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

  client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

client.login('NTA0MzQ4NjE3NjY3MTE3MDU2.DrDu6g.-_6DSHOv_S0dXwsRb4tBxuRJibw');
