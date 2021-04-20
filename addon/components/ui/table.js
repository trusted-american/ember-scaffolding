import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

/**
 * ARGS
 * data: object[]
 * pagination?: boolean = true
 * pageSize?: number = 25
 * pageNumber: number
 */

export default class UiTableComponent extends Component {
	constructor() {
		super(...arguments);
		assert('<Ui::Table />: Must pass a pageNumber number', typeOf(this.args.pageNumber) === 'number');
	}
}
