import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

/**
 * ARGS
 * label?: boolean
 * color?: string
 * icon?: string
 * disabled?: boolean
 * onClick: Function
 */

export default class UiDropdownItemComponent extends Component {
	constructor() {
		super(...arguments);
		// assert('<Ui::Dropdown::Item />: Must pass a label string', typeOf(this.args.label) === 'string');
		assert('<Ui::Dropdown::Item />: Must pass an onClick function', typeOf(this.args.onClick) === 'function');
	}
}
