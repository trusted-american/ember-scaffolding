import Component from '@glimmer/component';
import { action } from '@ember/object';

/* 
 * ARGS
 * 
 * submit?: boolean
 * isBlock?: boolean
 * size?: 'sm'|'lg'
 * outline?: boolean
 * color?: string = 'secondary'
 * disabled?: boolean
 * loading?: boolean
 * onClick?: Function
 * 
 */

export default class UiButtonComponent extends Component {
	@action dummy() {
		// used when @onClick function isn't passed (for submit-type buttons)
	}
}
