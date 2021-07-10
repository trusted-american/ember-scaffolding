import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class UiBaseComponent extends Component {
	get id() {
		return guidFor(this);
	}
}
