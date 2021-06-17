import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

/**
 * ARGS
 * show?: boolean
 */

export default class UiAccordionItemComponent extends Component {
	get id() {
		return guidFor(this);
	}
}
