import UiBaseComponent from './base';

/**
 * ARGS
 * flush?: boolean
 * alwaysOpen?: boolean
 */

export default class UiAccordionComponent extends UiBaseComponent {
	get alwaysOpen() {
		return this.args.alwaysOpen;
	}
}
