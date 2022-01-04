const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const config = require('./config.json');

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(config.token);