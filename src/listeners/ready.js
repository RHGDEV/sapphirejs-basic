/* eslint-disable no-useless-escape, no-unused-vars */
const { Events, Listener } = require('@sapphire/framework');

module.exports = class CoreEvent extends Listener {
	constructor(context) {
		super(context, { event: Events.Ready, once: true });
	}

	async run() {
		let { client } = this.container;
		console.log(String.raw`┌─────────────────────────────────────────────────┐
│                                                 │
│   __  __│                 │         │           │
│      │   -_)   ' \   _ \  │   _' │   _│   -_)   │
│     _│ \___│ _│_│_│ .__/ _│ \__,_│ \__│ \___│   │
│                    _│                           │
│                                    By: RHGDev   │
├─────────────────────────────────────────────────┤
├─ Client   › ${client.user.tag}
├─ ClientID › ${client.user.id}
└─────────────────────────────────────────────────┘
`);
	}
};