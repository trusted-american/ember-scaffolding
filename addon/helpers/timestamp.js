import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import moment from 'moment';

export default helper(function timestamp([date, format]) {
	if (!date) return null;

	let mom = typeOf(date) === 'number' ? moment.unix(date) : moment(date);

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
		return mom.format('MMM D, h:mm A');
	}
});
