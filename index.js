const Discord = require('discord.js');
const client = new Discord.Client({ 
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES
  ] 
});
const prefix = '!'; // change this to your preferred prefix

client.login('MTA5MzA2NTkyMDg2OTU4MDkzMA.Gqr0Dt.IfG6ceA4iTKExD4nVYlui-B_zXGcpNMVURW3Vs'); // replace this with your bot token

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // add your bot commands here

  if (command === 'ping') {
    message.reply('Pong!');
  }
  
});
