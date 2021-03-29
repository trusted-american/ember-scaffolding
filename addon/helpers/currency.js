import { helper } from '@ember/component/helper';

export default helper(function currency([amount, cents = false, accountingStyle = false]) {
	if (!amount && amount !== 0) {
		return null;
	}
	if (cents) amount /= 100;

	if (accountingStyle) {
		let absValue = Math.abs(amount);
		let returnString = Number(absValue).toLocaleString('en-US', {
			currency: 'USD',
			minimumFractionDigits: 2,
		});
		return '$' + ( amount < 0 ? '(' + returnString + ')' : returnString );
	}

	return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
});
