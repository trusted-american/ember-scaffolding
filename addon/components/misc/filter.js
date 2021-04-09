import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { filter } from '@ember/object/computed';

/**
 * ARGS
 * predicates: Predicate[]
 * onChange: Function
 * 
 * interface Predicate {
 *   name: string;
 *   key: string;
 *   value: any;
 *   type?: 'date'|'multi';
 *   options: { value: string, label: string }[];
 * }
 */

export default class MiscFilterComponent extends Component {
	@tracked options;

	constructor() {
		super(...arguments);
		assert('<Misc::Filter />: Must pass a predicates array', typeOf(this.args.predicates) === 'array');
		assert('<Misc::Filter />: Must pass an onChange function', typeOf(this.args.onChange) === 'function');

		this.predicates = this.args.predicates;
	}

	@filter('args.predicates.@each.value', function (predicate) {
		return !!predicate.value || predicate.value === false;
	}) selections;

	@action toggle(predicate, event) {
		event.stopPropagation();

		if (event.target.checked) {
			set(predicate, 'value', predicate.options.firstObject.value);
		} else {
			set(predicate, 'value', null);
		}
	}

	@action select(predicate, { target }) {
		set(predicate, 'value', target.value);
	}

	@action clear() {
		this.predicates.setEach('value', null);
		this.args.onChange(this.predicates);
	}

	@action done(event) {
		event.preventDefault();
		this.args.onChange(this.predicates);
	}
}
