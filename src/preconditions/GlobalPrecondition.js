const { Precondition } = require('@sapphire/framework');

module.exports = class CorePrecondition extends Precondition {
	constructor(context) {
		super(context, {
			name: 'GlobalPrecondition', // Name of the precondition
			enabled: false,
			position: 1, // Adding a position will append this precondition to every command usuage
		});
	}
	/**
     * @param {import("discord.js").CommandInteraction} interaction
     */
	async chatInputRun(interaction) { return await this.checkPrecondition(interaction); } // Capture chat input

	/**
     * @param {import("discord.js").ContextMenuInteraction} interaction
     */
	async contextMenuRun(interaction) { return await this.checkPrecondition(interaction); } // Capture context input

	async checkPrecondition(interaction) {
		// Add checks here to see if the precondition is met
		//return this.error(); // To deny the request
		return this.ok(); // To accept the request
	}
};