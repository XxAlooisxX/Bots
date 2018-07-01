const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDYzMDI2NzY3MDA3OTczMzg2.Dhqayw.g5QLShaxOgflpeEQmDpqhqy6w6A)
