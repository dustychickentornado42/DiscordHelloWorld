const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '?'


client.once('ready', ()=> {
    console.log('King Julien is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'helloworld'){
        message.channel.send('Hello World!');
    }
});


client.login('OTQ2OTQ2NDMxNzc0NzYwOTkw.YhmGlg.4-GqdiNffIh16n30YDxL-Ake-4s');