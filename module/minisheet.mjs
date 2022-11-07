export class MiniSheet extends ActorSheet {
	get template() {
		return `modules/pf1-mini-sheet/template/minisheet.hbs`;
	}
	
	static get defaultOptions() {
		const _default = super.defaultOptions;
		return {
			..._default,
			classes: ['sheet', 'actor'],
			width: 'auto',
			height: 'auto',
			resizable: false,
		};
	}
}