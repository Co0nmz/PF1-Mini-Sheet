import { MiniSheet } from './module/sheet.mjs';

Hooks.once('init', () => {
	Actors.registerSheet('PF1', MiniSheet, { label: 'MiniSheet', types: 'character', makeDefault: false });
	
	console.log("PF1 Mini Sheet | loaded");
});
