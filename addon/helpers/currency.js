import { helper } from '@ember/component/helper';

export default helper(function currency([amount]) {
	amount /= 100;
	return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
});
