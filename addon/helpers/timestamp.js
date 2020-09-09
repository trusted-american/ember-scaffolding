import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function timestamp([date, format]) {
	if (!date) return null;

	let mom = moment(date);

	if (format === 'date') {
		if (moment().isSame(mom, 'year')) {
			return mom.format('MMM D');
		} else {
			return mom.format('MMM D, Y');
		}
	} else if (format === 'time') {
		return mom.format('h:mm A');
	} else {
		return mom.format('MMM D, h:mm A');
	}
});
