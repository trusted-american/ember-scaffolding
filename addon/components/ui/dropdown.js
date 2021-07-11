import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * ARGS
 * align?: 'right'
 * linger?: boolean
 */

export default class UiDropdownComponent extends Component {
	// @action didInsert(element) {
	// 	if (this.args.linger) {
	// 		element.addEventListener('click', event => {
	// 			let { classList } = event.target;
	// 			if (!classList.contains('dropdown-item') || classList.contains('linger')) {
	// 				event.stopPropagation();
	// 			}
	// 		});
	// 	}
	// }
}
