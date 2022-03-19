

//   ┌─────────────────────────────────────────────────┐
//   │                                                 │
//   │   __  __│                 │         │           │
//   │      │   -_)   ` \   _ \  │   _` │   _│   -_)   │
//   │     _│ \___│ _│_│_│ .__/ _│ \__,_│ \__│ \___│   │
//   │                    _│                           │
//   │                                    By: RHGDev   │
//   └─────────────────────────────────────────────────┘


require('dotenv').config();

const { SapphireClient } = require('@sapphire/framework'),
	{ Intents: { FLAGS } } = require('discord.js');

module.exports = new class Client extends SapphireClient {
	constructor() {
		super({
			intents: [
				FLAGS.GUILDS
			],
			shards: 'auto'
		});

		this.creators = ['123456788910111213']; // Array of UserIDS to pass on the CreatorOnly Precondition

		/**
		 * @param {import("discord.js").User} user
		 */
		this.isCreator = (user) =>  {
			user = this.users.resolve(user);
			if(!user) throw new RangeError('Unable to resolve user.');
			return this.creators.includes(user.id);
		};

		this.login(process.env.TOKEN).catch(console.error);
	}
};
