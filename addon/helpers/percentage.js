import { helper } from '@ember/component/helper';

export default helper(function percentage([number], { decimals }) {
	let value = (number || 0) * 100;
	let numDecimals = decimals || 0;

	// let valueStr = value.toLocaleString(undefined, {
	// 	minimumFractionDigits: numDecimals,
	// 	maximumFractionDigits: numDecimals,
	// });

	// return `${valueStr}%`;

	return `${value.toFixed(value % 1 === 0 ? 0 : numDecimals)}%`;
});
