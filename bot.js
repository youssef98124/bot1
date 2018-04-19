const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('تعريب يوسف');
});

client.on('message', message => {
  if (message.content === 'تعال روم') {
      if (message.author.id !== '388463178377330688') return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('متصل'))
    .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);
