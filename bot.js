
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+' ; 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('جعل ما ينقط غيرك يا قلبي');
  }
});

/////////////////////////////كود مسح//////////////////////



 client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("clr"))
 {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© khalid | خالد ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


  //////////////////////مسح//////////////////


 client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("مسح"))
 {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© khalid | خالد ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


  
  ////////////////////////مسح////////////////////
  
 client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("clear"))
 {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© khalid | خالد  ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
//////////////////////////////////يسوي روم ويقولك كم واحد بالسيرفر////////////////////////////
 
client.on('message',async msg => {//Alpha Codes
//Alpha Codes//Alpha Codes//Alpha Codes//Alpha Codes//Alpha Codes
  var prefix = "!";//Alpha Codes
//Alpha Codes
  if(msg.content.startsWith(prefix + "user")) {//Alpha Codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()//Alpha Codes
      time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
 },1000);
  });//Alpha Codes
  }
 
});

/////////////////////كود يعلمك ان فية شخص اضاف بوتك//////////////////////////

client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});


///////////////////يرسل رسالة من البوت لاعضاء السيرفر/////////////////////


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bca')){
 if (message.author.id !== '428097407973064705') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

//////////////////يعرض السيرافرات الي فيها بوتك/////////////////

       client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`خالد الرشيدي`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

////////////////كود يعرض البنق////////////////////

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});
	  

////////////////////////////الترحيب مع ذكر رقم العضو//////////////////////////////////////


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  @here||@here
  ════════════════════ஜ۩۞۩ஜ═════════════════════ 
　 　 　　　           •●【【 W E L C O M E - T O - SERVER】】●• 
منور السيرفر يا مرحباء مليون

اتمنى ان تستمتع بالسيرفر
 وإن شاء الله مراح نقصر معك 
وبتفاعل راح تحصل على رتب 
وحتى بالفعليات اللي راح نقيمها 

...ووفقك الله...

═════════════════════ஜ۩۞۩ஜ═════════════════════:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



///////////////////////////يعرض معلومات الشخص///////////////////////////////////////

  client.on('message', message => {
    var prefix = "+"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});


/////////////////////////////يفتح ويقفل الشات //////////////////////////////////////
	  
client.on('message', message => {

    if (message.content === "muchat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "opchat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});

	  


/////////////////////////////كود يثبت ملكية البوت//////////////////////////////////////
	  

 client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["428097407973064705"];
if (message.content.startsWith(prefix + 'mebot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**انت لست صاحب البوت**");   
}
}
});
	  
	  

/////////////////////////////يرسل رابط لدعودة البوت بالخاص/////////////////////////////////////

  
	  client.on('message', message => {
  if (true) {
if (message.content === 'po') {
      message.author.send('  https://goo.gl/eNPKRy  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});




///////////////////////////يغير اسم وصورة البوت////////////////////////////////////////
	  

const Devs = ['346167763305496594' , '346167763305496594' , '' , ''];
client.on('message', message => {
var prefix = "+";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'namebot')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغيير الاسم البوت بنجاح ?**");
} else
if (message.content.startsWith(prefix + 'photebot')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ?`);

}
});
client.on('message', message => {
    if (message.content.startsWith("عدد الدعوات")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette:  العدد     [${invites.find(invite => invite.inviter.id === message.author.id)}]    :calling:   عضو لهذا السيرفر    `))
         
    }
});
	  
/////////////////////////////////كود لون متغير/////////////////////////////////
client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP", // اسم الرتبة
      guildid: "442079753273606145", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});


	  
/////////////////////////////////رد تلقائي/////////////////////////////////


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ورحمة الله وبركاته') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              
               

            }
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              
               

            }
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.send('**ولكم اطلق من جاء**');
              
               

            }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'فية فعالية اليوم') {
              message.channel.send('**تأكد من شات الأفنت وهناك تحصل الخبر**');
              
               

            }
});






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '.') {
              message.channel.send('**جعل ما ينقط غيرك**');
              
               

            }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'منور') {
              message.channel.send('**بنووورك**');
              
               

            }
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'بنق') {
              message.channel.send('+ping');
              
               

            }
});

/////////////////////////////////كود حالة البةت/////////////////////////////////



client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['شغل خالد الرشيدي','صلو على  '];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});


///////////////////////////////////كود سحب الاشخاص ////////////////////////////////
	  



  client.on('message', message => {
    var prefix = "+";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

	  


/////////////////////////////////كود ارسال رسالة لصاحب البوت//////////////////////////////////
	  
	  
	  
	
client.on('message' , message => {
var prefix = "+"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "للبوت")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("428097407973064705").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Elmusaui_GK and SpeedMC")
                                                

message.channel.send(embed);


}
    
});



/////////////////////////////////////معلومات السيرفر//////////////////////////////




 
client.on('message', message => {
    if (message.content === "السيرفر") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)            
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });

 


 
////////////////////////////////قفل وفتح الشات//////////////////////////////////

 
 client.on('message', message => {
var prefix = "+";
       if(message.content === prefix + "muchat") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "opchat") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});
 
 
/////////////////////////////////اعلاء دعوات//////////////////////////////////
	  


client.on('message',message =>{
    var prefix = "+";
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
  .setThumbnail("https://goo.gl/cjTQ18")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
	  

  
///////////////////////////////////المساعدة في الخاص///////////////////////////////


client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("help")) {
		 message.channel.send('**تم ارسال الأوامر لك بالخاص مع تمنياتي لك بالتوفيق والنجاح**');
            
	
		 


 message.author.sendMessage(`
 **
.
.

.
╭╮╭━ ╮   ╭╮                                 ╭╮      ╭╮                    ╭╮
┃┃┃╭╯    ┫┃                                 ┫┃      ╰╯                    ┫┃
┫╰╯╯        ┫╰━┳  ╭━━┫     ┫┃      ╭╮      ╭━━╯┃
┫╭╮┃        ┃╭╮┃  ┫╭╮┃     ┫┃      ┫┃      ┃╭━╮┃
┫┃┃╰┫    ┫┃┃┃  ┃╰╯┻╯ ┃╰╮┃╰╮ ┃╰━╯┃
┻╯╰━┻    ┻╯╰┻   ┻━━┻╯┻━╯  ┻━╯┣━━━╯
╔[❖════════════❖]╗
             Prefix = ' + '
╚[❖════════════❖]╝


 ╔[❖════════════❖]╗
┃             أوامر المسؤلين              ┃
 ╚[❖════════════❖]╝

❖  bb               ➾    لإرسال رسالة لأعضاء االسيرفر باللخاص من البوت
❖ clear            ➾    لمسح الشات يمسح حول 100 رسالة موجودة بالشات
❖ clr                ➾    لمسح الشات يمسح حول 100 رسالة موجودة بالشات
❖ muchat       ➾    يقفل الشات اللي انت فية 
❖ opchat        ➾    يفتح الشات اللي انت فية
❖move           ➾    لسحب الاعضاء إلى الروم الصوتي اللي انت متواجد فية 
❖ فقط صاحب البوت يستطيع استعمال الامر   ➾   رسالة البوت
                   ❖قريباً ستكون اوامر اضافية خاصة بالمسؤولين**❖

 
 ╔[❖════════════❖]╗
┃             الأوامر العامه                 ┃
 ╚[❖════════════❖]╝
 
❖  يتم رسال رسالة بالخاص تحتوي على رابط السيرفر لدخول شخص ➾     بدون استخدام (+)                رابط
❖  100يتم رسال رسالة بالخاص تحتوي على رابط السيرفر لدخول 100  شخص ➾      بدون استخدام (+)       رابط
❖  server          (+ )يعرض معلومات عن السيرفر ➾      بدون استخدام      
❖  count              ➾   يعرض عدد أعضاء السيرفر
❖ mb                    ➾    يعرض حالة أعضاء السيرفر
❖ يعرض صور السيرفر     ➾   صورة السيرفر
❖ bans                 ➾    يعرض عدد الاشخاص المبندين
❖ bot                   ➾  يعرض معلومات عن البوت
❖ boot                  ➾  يعرض معلومات عن البوت
❖ discrim           ➾ تحفيزي يعرض المتميزي بالسيرفر
❖ ownerbot       ➾ يثيت ملكية البوت لمن 
❖ contact            ➾ يرسل رسالة لصاحب البوت تحتوي على اسم السيرفر و اسم الشخص
❖ يعرض تاريخ اليوم والساعة   ➾                  تاريخ 
❖ 
╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

(" منور السيرفر ويا مرحباء مليون تراحيب المطر عن مغليك ")


`);

    }
});



///////////////////////////////////كود عرض احصائيات الشات او ////////////////////////////////


client.on('message', message => {//Alpha Codes
    if(!message.channel.guild) return;//Alpha Codes
var prefix = "+";//Alpha Codes
if(message.content.startsWith(prefix + 'channel')) {//Alpha Codes
    let channel = message.channel//Alpha Codes
    var embed = new Discord.RichEmbed()//Alpha Codes
      .setTitle("Channel Info")//Alpha Codes
      .setColor("#9932CC")//Alpha Codes
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)//Alpha Codes
      .addField("Created At", `${channel.createdAt}`)//Alpha Codes
      .addField("Channel Type", `${channel.type}`)//Alpha Codes
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });//Alpha Codes
  }//Alpha Codes
 
    });

//////////////////////////////////كود تصويت /////////////////////////////////


client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});


//////////////////////////////////كود رسالة من البوت للاعضاء بخط وبدون خط//////////////////////////////


client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('`-Broadcast-`')
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setDescription(`Message : ${args}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});

/////////////////////////////////كود يعرض الرتب اللي معك//////////////////////////////////


client.on('message', message=>{
var prefix = "+" // البريفكس حقك هنا 


    let nour;
    if (message.mentions.users.first()) {
      nour = message.mentions.users.first();
    } else {
        nour = message.author;
    }

  var roles;
      if (message.member.roles.size === 1) {
          roles = '`None | لا يوجد`';
      } else {
          roles = message.member.roles.map(roles => `\`${roles.name}\``).join(', ')
      }

  if(message.content === prefix + 'myroles'){
    if(message.author.bot) return;
let myroles = new Discord.RichEmbed()
.setColor('#4CE782')
.setAuthor(nour.tag, nour.avatarURL)
.setThumbnail(nour.avatarURL)
.setTitle('MyRoles | رتبي :')
.setDescription(`**# - Roles | الرتب **: ${roles}`)
.setFooter(message.author.username, message.author.avatarURL)
.setTimestamp() 
message.channel.send(myroles)
  }
})


 
//////////////////////////////يعطيك معلومات عن السيرفر اللي طلع منة بوتك////////////////////////////////////

client.on('guildDelete', guild => {
  client.channels.get("493388063330926592")
const embed = new Discord.RichEmbed()
   .setAuthor(`Nameless Bot left a server ❎`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .setFooter('kh-1 الاساسي' , client.user.avatarURL)
           client.channels.get("493388063330926592").send({embed});
}

);


///////////////////////////////كلمات ممنوعة ////////////////////////////////////
	  
client.on('message', msg => {
  if (msg.content === 'كل زق') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});
	


client.on('message', msg => {
  if (msg.content === 'ياخنيث') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'يا خنيث') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'خنيث') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'يا قحبة') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'ياقحبة') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'قحبة') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'زق') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});	


client.on('message', msg => {
  if (msg.content === 'انت زق') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});
	  
	  
/////////////////////////////////يعرض معلومات الشات/////////////////////////////////

client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "+";
if(message.content.startsWith(prefix + 'chan')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });

/////////////////////////////////////


/////////////////////////////////يسوي روم للوقت والتاريخ//////////////////////////////////

client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var p = "+";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});


/////////////////////////////////////عرض التاريخ/////////////////////////////

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "+";

    if (message.content === prefix + "التاريخ") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
             message.channel.sendEmbed(Date15);
    }
});


/////////////////////////////////رسالة بالشات //////////////////////////////////
	  

var Prefix = "+";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "say2") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 1", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 2", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


/////////////////////////////////تغيير لون ASH//////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 3", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 4", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 5", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 6", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 7", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 8", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 9", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 0", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.0001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


/////////////////////////////////الوان البوت متغيره//////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.00001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  




/////////////////////////////BOT MUSIC//////////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT MUSIC", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.00001 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  




////////////////////////////////////يعرض سكن ماينكرافت ///////////////////////////////

client.on("message", message => {
    var prefix = "+"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم اسكنك **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


///////////////////////////////////////////////////////////////////

client.on('ready', () => {
var x = client.channels.get("502797689474383872");
if (x) x.join();
});



/////////////////////////




client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
