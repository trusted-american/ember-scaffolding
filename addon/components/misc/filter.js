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
 *   type?: 'date';
 *   options: { value: string, label: string }[];
 * }
 */

export default class MiscFilterComponent extends Component {
	@tracked options;

	constructor() {
		super(...arguments);
		assert('<Misc::Filter />: Must pass a predicates array', typeOf(this.args.predicates) === 'array');
		assert('<Misc::Filter />: Must pass an onChange function', typeOf(this.args.onChange) === 'function');

		this.args.predicates.forEach((predicate) => {
			if (predicate.type === 'date' && (predicate.value)) {
				if (predicate.value.gte && predicate.value.lte) {
					set(predicate, 'mode', 'between');
					set(predicate, 'valueA', predicate.value.gte);
					set(predicate, 'valueB', predicate.value.lte);
				} else if (predicate.value.gt) {
					set(predicate, 'mode', 'isAfter');
					set(predicate, 'valueA', predicate.value.gt);
				} else if (predicate.value.gte) {
					set(predicate, 'mode', 'isAfterOrOn');
					set(predicate, 'valueA', predicate.value.gte);
				} else if (predicate.value.lt) {
					set(predicate, 'mode', 'isBefore');
					set(predicate, 'valueA', predicate.value.lt);
				} else if (predicate.value.lte) {
					set(predicate, 'mode', 'isBeforeOrOn');
					set(predicate, 'valueA', predicate.value.lte);
				} else {
					set(predicate, 'mode', 'inTheLast');
				}
			}
		});
	}

	get predicates() {
		return this.args.predicates;
	}

	@filter('args.predicates.@each.value', function (predicate) {
		return !!predicate.value && !Array.isArray(predicate.value);
	}) selections;

	@action toggle(predicate, event) {
		event.stopPropagation();

		if (event.target.checked) {
			set(predicate, 'value', predicate.type === 'date' ? true : predicate.options.firstObject.value);
		} else {
			set(predicate, 'value', predicate.type === 'date' ? [] : null);
		}
	}

	@action select(predicate, { target }) {
		set(predicate, 'value', target.value);
	}

	@action clear() {
		this.predicates.setEach('value', null);
		this.predicates.filter(({ type }) => type === 'date').setEach('value', []);
		this.args.onChange(this.predicates);
	}

	@action done(event) {
		event.preventDefault();

		let form = event.target;
		if (!form.checkValidity()) {
			form.classList.add('was-validated');
			return;
		}
		form.classList.remove('was-validated');

		let predicates = this.predicates.map((predicate) => {
			if (predicate.type === 'date' && (predicate.value && !Array.isArray(predicate.value))) {
				let value = {
					gte: null,
					gt: null,
					lt: null,
					lte: null,
				};

				if (predicate.mode === 'inTheLast') {
					value.gte = moment().subtract(predicate.valueA, predicate.valueB === 'months' ? 'months' : 'days');
					value.lte = new Date();
				} else if (predicate.mode === 'equals') {
					value.gte = predicate.valueA;
					value.lte = moment(predicate.valueA).endOf('day').toDate();
				} else if (predicate.mode === 'between') {
					value.gte = predicate.valueA;
					value.lte = predicate.valueB;
				} else if (predicate.mode === 'isAfter') {
					value.gt = predicate.valueA;
				} else if (predicate.mode === 'isAfterOrOn') {
					value.gte = predicate.valueA;
				} else if (predicate.mode === 'isBefore') {
					value.lt = predicate.valueA;
				} else if (predicate.mode === 'isBeforeOrOn') {
					value.lte = predicate.valueA;
				}
				set(predicate, 'value', value);
			}
			return predicate;
		});

		this.args.onChange(predicates);
	}
}
