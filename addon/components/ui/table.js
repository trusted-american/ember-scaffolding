import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

/**
 * ARGS
 * data?: object[]
 * onLoad?: Function
 * pagination?: boolean
 * pageSize?: number
 * pageNumber?: number
 * sortable?: boolean
 */

export default class UiTableComponent extends Component {
	constructor() {
		super(...arguments);
		assert('<Ui::Table />: Must pass a data array or an onLoad function', typeOf(this.args.data) === 'array' || typeOf(this.args.data) === 'instance' || typeOf(this.args.onLoad) === 'function');
	}
}
