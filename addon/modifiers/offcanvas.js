import { modifier } from 'ember-modifier';

export default modifier(function offcanvas(element) {
	element.setAttribute('data-bs-toggle', 'offcanvas');
	element.setAttribute('data-bs-target', '#offcanvas');

	return () => {
		element.removeAttribute('data-bs-toggle');
		element.removeAttribute('data-bs-target');
	};
});
