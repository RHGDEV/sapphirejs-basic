const { Events, Listener } = require('@sapphire/framework'),
	{ MessageEmbed } = require('discord.js');

module.exports = class CoreEvent extends Listener {
	constructor(context) {
		super(context, { event: Events.UnknownChatInputCommand });
	}

	async run({ interaction, context }) {
		let embed = new MessageEmbed().setDescription(`Command ${context.commandName} not found.`);
		if (interaction.replied) interaction.editreply({ embeds: [ embed ] });
		else interaction.reply({ embeds: [ embed ], ephemeral: true });
	}
};