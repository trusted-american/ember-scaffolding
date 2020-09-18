export function initialize(application) {
	application.inject('controller', 'notify', 'service:notify');
}

export default {
  initialize
};
