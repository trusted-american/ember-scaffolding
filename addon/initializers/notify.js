export function initialize(application) {
	application.inject('route', 'notify', 'service:notify');
	application.inject('controller', 'notify', 'service:notify');
}

export default {
  initialize
};
