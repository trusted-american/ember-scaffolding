import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { filter } from '@ember/object/computed';

/**
 * ARGS
 * filters: Filter[]
 * onChange: Function
 * 
 * interface Filter {
 *   name: string;
 *   key: string;
 *   value: any;
 *   type?: 'date'|'multi';
 *   options: any[];
 * }
 */

export default class MiscFilterComponent extends Component {
	@tracked options;

	constructor() {
		super(...arguments);
		assert('<Misc::Filter />: Must pass a filters array', typeOf(this.args.filters) === 'array');
		assert('<Misc::Filter />: Must pass an onChange function', typeOf(this.args.onChange) === 'function');

		this.filters = this.args.filters;
	}

	@filter('args.filters.@each.value', function(filter) {
		return !!filter.value;
	}) selections;

	/**
	 * toggle
	 */
	@action toggle(filterIndex, event) {
		event.stopPropagation();

		let filter = this.filters.objectAt(filterIndex);
		if (event.target.checked) {
			set(filter, 'value', filter.options.firstObject);
		} else {
			set(filter, 'value', null);
		}
	}

	/**
	 * select
	 */
	@action select(predicate, { target }) {
		let option = predicate.options.objectAt(target.value);
		set(predicate, 'value', option);
	}

	/**
	 * clear
	 */
	@action clear() {
		this.filters.setEach('value', null);
		this.args.onChange(this.filters);
	}
	
	/**
	 * done
	 */
	@action done(event) {
		event.preventDefault();
		this.args.onChange(this.filters);
	}
}
