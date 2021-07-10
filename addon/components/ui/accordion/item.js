import UiBaseComponent from '../base';
import { guidFor } from '@ember/object/internals';

/**
 * ARGS
 * show?: boolean
 */

export default class UiAccordionItemComponent extends UiBaseComponent {
	get id() {
		return guidFor(this);
	}
}
