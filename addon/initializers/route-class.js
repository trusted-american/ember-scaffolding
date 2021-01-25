import Route from '@ember/routing/route';
import { dasherize } from '@ember/string';

export function initialize(application) {
	Route.reopen({
		activate() {
			document.querySelector(application.rootElement).classList.add(this.toClass());
		},
		deactivate() {
			document.querySelector(application.rootElement).classList.remove(this.toClass());
		},
		toClass() {
			return 'route-' + decamelize(this.routeName.replace(/\./g, '-'));
			// return 'route-' + this.routeName.replace(/\./g, '-').dasherize();
		}
	});
}

export default {
  initialize
};
