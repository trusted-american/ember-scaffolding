import Route from '@ember/routing/route';

export function initialize(/* application */) {
	Route.reopen({
		activate() {
			document.body.classList.add(this.toClass());
		},
		deactivate() {
			document.body.classList.remove(this.toClass());
		},
		toClass() {
			return 'route-' + this.routeName.replace(/\./g, '-').dasherize();
		}
	});
}

export default {
  initialize
};
