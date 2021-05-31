import Component from '@glimmer/component';
import { action } from '@ember/object';
/* global bootstrap */

/**
 * ARGS
 * onClose?: Function
 */

export default class UiToastComponent extends Component {
	toast;

	@action didInsert(element) {
		this.toast = new bootstrap.Toast(element, {
			
		});
		this.toast.show();

		if (this.args.onClose) {
			element.addEventListener('hidden.bs.toast', () => {
				this.args.onClose();
			});
		}
	}

	willDestroy() {
		this.toast.hide();
	}
}
