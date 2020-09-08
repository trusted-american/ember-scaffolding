import { modifier } from 'ember-modifier';

export default modifier(function dropdown(element) {
	element.classList.add('dropdown-toggle');
	element.setAttribute('data-toggle', 'dropdown');

	return () => {
		element.classList.remove('data-toggle');
		element.removeAttribute('data-toggle');
	};
});
