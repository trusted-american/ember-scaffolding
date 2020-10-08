import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function fromNow([date]) {
	if (!date) return null;
	return moment(date).fromNow();
});
