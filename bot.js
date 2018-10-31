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

client.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const client00 = new Discord.Client();
//broadcast

client00.on('message', message => {
    var prefix = '$'; // هنا تقدر تغير البرفكس
var command = message.content.split(" ")[0];
if(command == prefix + 'bc') { // الكوماند !bc
    var args = message.content.split(' ').slice(1).join(' ');
    if(message.author.bot) return;
    if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
    
    let bcSure = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL)
    
    message.channel.send(bcSure).then(msg => {
        msg.react('✅').then(() => msg.react('❎'));
        message.delete();
        
        
        let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
        let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
        
        let sendBC = msg.createReactionCollector(yesEmoji);
        let dontSendBC = msg.createReactionCollector(noEmoji);
        
        sendBC.on('collect', r => {
            message.guild.members.forEach(member => {
                member.send(args.replace(`[user]`, member)).catch();
                if(message.attachments.first()){
                    member.sendFile(message.attachments.first().url).catch();
                }
            })
            message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
            msg.delete();
        })
        dontSendBC.on('collect', r => {
            msg.delete();
            message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
        });
    })
}
});

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

client00.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const client0000 = new Discord.Client();
//عدد الاعضاء

client0000.on('message', message => {
    var prefix = '$';
    if (message.content.startsWith(prefix + "rezfix-all")) {
let embed = new Discord.RichEmbed()
.addField(' عدد الاعضاء ',` [${client.users.size}] `)
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

client0000.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const pfo = new Discord.Client();

pfo.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '493237177170395155'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

pfo.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const mama = new Discord.Client();
mama.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '$';
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
    var subChannel = message.guild.channels.find(c => c.name === 'seller-request');
   
    if(command == prefix + 'join-seller') {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '▸ Saller Candidate ');
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `seller-accpeted`');
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('?').then(() => msgS.react('?'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم seller-accpeted').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('?').then(() => msgS.react('?'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '?'  && user.id === '449498327655120896'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '?' && user.id === '449498327655120896'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك اداري بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'seller-accepted').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'seller-unacceptable').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

mama.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const pfrr = new Discord.Client();

pfrr.on('message', ra3d => {
    var prefix = "#";
                            let args = ra3d.content.split(" ").slice(1).join(" ")
    if(ra3d.content.startsWith('#cc')) {
        if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
                 if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
                  ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                      setInterval(function(){})
                        let count = 0;
                        let ecount = 0;
              for(let x = 1; x < `${parseInt(args)+1}`; x++){
                ra3d.guild.createRole({name:x,
                  color: 'RANDOM'})
                  }
                }
           });

client.on('ready', () => {
console.log("i'm Ready");
client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});
        
pfrr.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const count = new Discord.Client();

count.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='$count')
var IzRo = new Discord.RichEmbed()
.setFooter(message.author.username, message.author.avatarURL)
.addField(':bust_in_silhouette: عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});

client.on('ready', () => {
console.log("i'm Ready");
client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
});

count.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const Invites = new Discord.Client();

Invites.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "$";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
    });
    
Invites.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const Suggestions = new Discord.Client();

Suggestions.on('message', message => {
    var prefix = '$';
	var command = message.content.toLowerCase().split(" ")[0];
    if(command == prefix + 'ss') {
		if(message.author.bot) return;
		if(message.channel.type === 'dm') return;
		var member = message.author.id;
		var channel = message.guild.channels.find('name', 'suggestions');
		if(!channel) return;
		var sug = message.content.split(' ').slice(1).join(' ');
        if(!sug) return message.channel.send(`**➥ Useage:** ${prefix}ss <Suggestions>`).then(msg => msg.delete(5000));
		message.delete();
		
		var sugDone = new Discord.RichEmbed()
		.setTitle(`**تم ارسال اقتراحك**`)
		.setColor('GRAY')
		.setThumbnail(client.user.avatarURL)
		.setDescription(`**\n➥ اقتراحك هو**\n\n${sug}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		var sugSure = new Discord.RichEmbed()
		.setThumbnail(client.user.avatarURL)
		.setTitle(`**هل انت متأكد من انك تريد ارسال اقتراحك ؟ معك دقيقة قبل الالغاء**`)
		.setDescription(`**\n➥ اقتراحك هو**\n\n${sug}\n\n:white_check_mark: للارسال\n\n:negative_squared_cross_mark: للالغاء`)
		.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
		.setTimestamp()
		.setColor('GRAY')
		message.channel.send(sugSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
	message.channel.send(sugDone).then(msg => msg.delete(6000));
	msg.delete();
	var newsug = new Discord.RichEmbed()
	.setTitle(`** Suggestions » أقتراحات **`)
	.setDescription(`\n**『 الاقتراح هو 』**\n\n${sug}`)
	.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
	.setTimestamp()
	.setThumbnail(client.user.avatarURL)
	.setColor('GRAY')
	channel.send(newsug).then(message => {
		message.react('👍').then(() => message.react('👎'))
	})
})
No.on("collect", r => {
	message.reply('**:x: تم الغاء اقتراحك**').then(message => {message.delete(4000)})
	msg.delete();
})
   })
	}
});

client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
    });

Suggestions.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
const Rab6 = new Discord.Client();

Rab6.on('message', message => {
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 5,
         maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم الارسال على الخاص | 🔗")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("This link will stay with you 1 hours 🔗")
      message.author.sendEmbed(Embed11)
    }
}); 

  client.on('ready', () => {
    console.log("i'm Ready");
    client.user.setActivity('https://RezfixHost.com', { type: 'WATCHING' });
    });

Rab6.login('NTA3MjcwODcwMjU2MDU4NDA1.DruQ7g.T07N2srEgCt2uVCoPxT_vhS27W8');
