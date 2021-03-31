import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';
import { action } from '@ember/object';

/**
 * ARGS
 * options: object[]
 * selected?: object
 * onChange: Function
 */

export default class UiSelectComponent extends Component {
	constructor() {
		super(...arguments);
		assert('<Ui::Select />: Must pass an options array', typeOf(this.args.options) === 'array');
		assert('<Ui::Select />: Must pass a selected object', typeOf(this.args.selected) === 'function');
		assert('<Ui::Select />: Must pass an onChange function', typeOf(this.args.onChange) === 'function');
	}

	@action change({ target }) {
		this.args.onChange(target.value);
	}
}
