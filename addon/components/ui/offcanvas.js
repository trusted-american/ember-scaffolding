import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
/* global bootstrap */

/**
 * ARGS
 * placement?: 'start'|'end'|'bottom'
 * onClose?: Function
 */

export default class UiOffcanvasComponent extends Component {
	offcanvas;

	@action didInsert(element) {
		this.offcanvas = new bootstrap.Offcanvas(element, {
			
		});
		this.offcanvas.show();

		if (this.args.onClose) {
			element.addEventListener('hidden.bs.offcanvas', () => {
				this.args.onClose();
			});
		}
	}

	willDestroy() {
		this.offcanvas.hide();
	}

	get id() {
		return guidFor(this);
	}
}
