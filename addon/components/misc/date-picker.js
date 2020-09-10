import Component from '@glimmer/component';
import { action } from '@ember/object';

/* 
 * ARGS
 * 
 * id: string
 * value?: Date
 * min?: Date
 * max?: Date
 * time?: boolean
 * noCalendar?: boolean
 * placeholder?: string
 * required?: boolean
 * onChange: Function
 * 
 */

export default class MiscDatePickerComponent extends Component {
	didInsert(element) {
		element.addEventListener('focus', () => {
			document.querySelectorAll('.flatpickr-calendar').forEach(fpElement => {
				fpElement.addEventListener('click', event => {
					event.stopPropagation();
				});
			})
		});
	}

	get dateFormat() {
		let { time, noCalendar } = this.args;
		if (time && noCalendar) {
			return 'h:i K';
		} else if (time) {
			return 'M j, Y h:i K';
		} else {
			return 'n/j/Y';
		}
	}

	@action change([ date ]) {
		this.args.onChange(date);
	}
}
