import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import moment from 'moment';

export default helper(function timestamp([date, format], { number, year }) {
	if (!date) return null;

	if (year) {
		return new Date(date).getFullYear();
	}

	let mom = typeOf(date) === 'number' ? moment.unix(date) : moment(date);

	if (number) {
		return mom.format('MM/DD/YYYY');
	}

	if (format === 'date') {
		return mom.format('MMM D, Y');
		// if (moment().isSame(mom, 'year')) {
		// 	return mom.format('MMM D');
		// } else {
		// 	return mom.format('MMM D, Y');
		// }
	} else if (format === 'time') {
		return mom.format('h:mm A');
	} else {
		return mom.format('MMM D, Y [at] h:mm A');
	}
});
