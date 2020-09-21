import { helper } from '@ember/component/helper';

export default helper(function number([num]) {
	if (!num && num !== 0) return null;
	num = Math.round((num + Number.EPSILON) * 100) / 100
	return num.toLocaleString();
});
