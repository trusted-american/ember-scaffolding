import { modifier } from 'ember-modifier';

export default modifier(function dropdown(element) {
	element.classList.add('dropdown-toggle');
	element.setAttribute('data-bs-toggle', 'dropdown');

	return () => {
		element.classList.remove('dropdown-toggle');
		element.removeAttribute('data-bs-toggle');
	};
});
