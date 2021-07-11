ember-scaffolding
==============================================================================

The goal of the addon is to provide an as close as possible representation of the components provided by Bootstrap.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

This addon requires that you have `ember-cli-sass` and `bootstrap` as dependencies.

```
npm install --save-dev ember-cli-sass bootstrap
```

- Add `app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');` to `ember-cli-build.js`
- Change `app.css` to `app.scss`
- Add `@import "node_modules/bootstrap/scss/bootstrap";` to `app.scss`

You can now install the addon itself.

```
ember install ember-scaffolding
```


Usage
------------------------------------------------------------------------------

This addon supplies the following conveniences: 

* Adds the current route(s) as a CSS class to `<body>`
* Supplies 2 modifiers:
	* `{{dropdown}}`
	* `{{tooltip}}`
* Supplies various helpers:
	* `{{age}}`
	* `{{currency}}`
	* `{{file-size}}`
	* `{{from-now}}`
	* `{{number}}`
	* `{{percentage}}`
	* `{{timestamp}}`
* Installs `ember-cli-moment-shim`, `ember-truth-helpers`, and `ember-composable-helpers`
* Supplies various UI components:
	* `<Ui::Accordion />`
	* `<Ui::Alert />`
	* `<Ui::Breadcrumb />`
	* `<Ui::Button />`
	* `<Ui::Card />`
	* `<Ui::Dropdown />`
	* `<Ui::Heading />`
	* `<Ui::ListGroup />`
	* `<Ui::Modal />`
	* `<Ui::Nav />`
	* `<Ui::Offcanvas />`
	* `<Ui::Pagination />`
	* `<Ui::Progress />`
	* `<Ui::PropertyList />`
	* `<Ui::Radio />`
	* `<Ui::Select />`
	* `<Ui::Spinner />`
	* `<Ui::SpinnerOverlay />`
	* `<Ui::Subheading />`
	* `<Ui::Table />`
	* `<Ui::Toast />`
	* `<Ui::Toolbar />`


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
