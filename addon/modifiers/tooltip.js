import { modifier } from 'ember-modifier';
/* global bootstrap */

export default modifier(function tooltip(element, [title, placement = 'top']) {
	element.setAttribute('data-toggle', 'tooltip');
	element.setAttribute('data-placement', placement);
	element.setAttribute('title', title);

	new bootstrap.Tooltip(element);

	return () => {
		element.removeAttribute('data-toggle');
		element.removeAttribute('data-placement');
		element.removeAttribute('title');
	};
});
