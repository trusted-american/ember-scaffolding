import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

/**
 * ARGS
 * value: number
 * color?: string
 * labeled?: boolean
 * striped?: boolean
 * animated?: boolean
 */

export default class UiProgressBarComponent extends Component {
	constructor() {
		super(...arguments);
		assert('<Ui::Progress::Bar />: Must pass a value number', typeOf(this.args.value) === 'number');
	}
}
