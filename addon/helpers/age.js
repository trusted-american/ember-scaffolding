import { helper } from '@ember/component/helper';

export default helper(function age([date]) {
	let today = new Date();
	let age = today.getFullYear() - date.getFullYear();
	let m = today.getMonth() - date.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
		age--;
	}
	return age;
});
