const { Command, RegisterBehavior } = require('@sapphire/framework'),
	{ SlashCommandBuilder } = require('@discordjs/builders');

module.exports = class BasicCommand extends Command {
	constructor(context) {
		super(context, {
			name: 'basic', // Command Name
			description: 'Basic starter command', // Command Description
			preconditions: [] // Command Preconditions
		});
	}

	/**
     * @param {import("discord.js").CommandInteraction} interaction
     */
	async chatInputRun(interaction) {
		interaction.reply('hi');
	}

	/**
     * @param {import("discord.js").ContextMenuInteraction} interaction
     */
	async contextMenuRun(interaction) {
		interaction.reply('hi');
	}

	/**
     * @param {import("@sapphire/framework").ApplicationCommandRegistry} registry
     */
	async registerApplicationCommands(registry) {
		const command = new SlashCommandBuilder()
			.setName(this.name)
			.setDescription(this.description);

		// Registers a chat command
		registry.registerChatInputCommand(command, {
			behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
			guildIds: null // array of guild IDs to register the command in. i.e ["guildId"], Leave null to globally register.
		});


		// Registers a context menu command
		registry.registerContextMenuCommand({
			name: this.name,
			type: 'USER' // USER or MESSAGE
		}, {
			behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
			guildIds: null // array of guild IDs to register the command in. Leave null to globally register.
		});
	}
};