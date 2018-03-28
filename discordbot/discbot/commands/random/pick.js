const commando = require('discord.js-commando');
const discord = require('discord.js');

var bot = new discord.Client();

class PickCommand extends commando.Command{
	constructor(client){
		super(client,{
			name: 'pick',
			group : 'random',
			memberName: 'pick',
			description: 'makes two teams for picks'
		});
	}

	async run(message, args){
		var array = args.split(" ");

		if (array.length !=10){
			message.channel.send("Not enough players!");
		}
		else{
			var currIndex = array.length;
			var temporaryValue = 0;
			var randomIndex = 0;

			while (currIndex !== 0){
				randomIndex = Math.floor(Math.random()*currIndex);
				currIndex -=1;

				temporaryValue = array[currIndex];
				array[currIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			message.channel.send("Team1 : " +array[0]+"  "+array[1]+"  "+array[2]+"  "+array[3]+"  "+array[4]+"\n\n"+
										"Team2 : " +array[5]+"  "+array[6]+"  "+array[7]+"  "+array[8]+"  "+array[9]);
		}

	}

}


module.exports = PickCommand;