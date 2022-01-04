module.exports = (client, Discord, messageCreate) => {
    const config = require('../../config.json');
    if(messageCreate.member.user.tag !== 'config.shawnid' 
    && messageCreate.member.user.tag !== 'config.peterid'
    && messageCreate.member.user.tag !== 'config.jonid') return;
    const args = messageCreate.content;

    const cmd = 'shawnspoke';
    const command = client.commands.get(cmd);
    if(command) command.execute(client, messageCreate, args, Discord);
}