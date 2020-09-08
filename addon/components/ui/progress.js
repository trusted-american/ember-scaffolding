import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

/* 
 * ARGS
 * 
 * value: number
 * 
 */

export default class UiProgressComponent extends Component {
	get id() {
		return guidFor(this);
	}
}
