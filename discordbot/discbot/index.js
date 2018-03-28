const commando = require('discord.js-commando');
const shrugbot = new commando.Client();

// faceit command
// random choice between arguments


shrugbot.registry.registerGroup('random','Random');
shrugbot.registry.registerCommandsIn(__dirname + "/commands");

shrugbot.login('NDI3NTQ2NDg4MTI2NTcwNDk3.DZmIVQ.v-l8IRdPNJYdZQds4Duy9VCcpTc');