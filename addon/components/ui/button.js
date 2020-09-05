import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiButtonComponent extends Component {

	/* 
	 * ARGS
	 * 
	 * submit?: boolean
	 * isBlock?: boolean
	 * size?: 'sm'|'lg'
	 * outline?: boolean
	 * color?: string = 'secondary'
	 * disabled: boolean?
	 * loading: boolean?
	 * onClick: Function?
	 * 
	 */

	@action dummy() {
		// used when @onClick function isn't passed (for submit-type buttons)
	}
}
