const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('By NightMarE Enjoy');
});

client.on('message', message => {
  if (message.content === '!join') {
      if (message.author.id !== '388463178377330688') return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);
