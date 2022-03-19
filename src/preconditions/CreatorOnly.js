const { Precondition, container: { client } } = require('@sapphire/framework'),
	{ MessageEmbed } = require('discord.js');

module.exports = class CorePrecondition extends Precondition {
	constructor(context) {
		super(context);
		this.embed = new MessageEmbed().setDescription('Only the bot creators can run this command.');
	}

	/**
     * @param {import("discord.js").CommandInteraction} interaction
     */
	async chatInputRun(interaction) {
		if (client.isCreator(interaction.user)) return this.ok(); // Return a ok response if the user is a creator
		return this.error({ context: { embed: this.embed }}); // Sends the embed back in the denied response
	}

	/**
     * @param {import("discord.js").ContextMenuInteraction} interaction
     */
	async contextMenuRun(interaction) {
		if (client.isCreator(interaction.user)) return this.ok(); // Return a ok response if the user is a creator
		return this.error({ context: { embed: this.embed }}); // Sends the embed back in the denied response
	}

	/**
     * @param {import("discord.js").Message} message
     */
	async messageRun(message) {
		if (client.isCreator(message.author)) return this.ok(); // Return a ok response if the user is a creator
		return this.error({ context: { embed: this.embed }}); // Sends the embed back in the denied response
	}
};