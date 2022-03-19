const { Events, Listener } = require('@sapphire/framework'),
	{ MessageEmbed } = require('discord.js');

module.exports = class CoreEvent extends Listener {
	constructor(context) {
		super(context, { event: Events.ChatInputCommandDenied });
	}

	async run(error, context) {
		if (error.context.silent) return;
		let embed = error.context.embed || new MessageEmbed().setDescription('Internal Error. Please try again.');
		if (context.interaction.replied) context.interaction.editreply({ embeds: [ embed ] });
		else context.interaction.reply({ embeds: [ embed ], ephemeral: true });
	}
};