import Component from '@glimmer/component';
import { action } from '@ember/object';
/* global bootstrap */

export default class UiModalComponent extends Component {

	/* 
	 * ARGS
	 * 
	 * title?: string?
	 * size?: 'sm'|'lg'|'xl'
	 * onClose: Function
	 * 
	 */

	modal;

	@action didInsert(el) {
		this.modal = new bootstrap.Modal(el);
		this.modal.show();

		el.addEventListener('shown.bs.modal', () => {
			let autofocus = el.querySelector('[autofocus]');
			if (autofocus) {
				autofocus.focus();
			}
		});

		el.addEventListener('hidden.bs.modal', () => {
			this.args.onClose();
		});
	}

	willDestroy() {
		this.modal.hide();
		// this.modal.dispose();
	}
}
