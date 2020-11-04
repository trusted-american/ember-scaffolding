import { helper } from '@ember/component/helper';

export default helper(function fileSize([bytes]) {
	let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (!bytes) return null;
	let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
});
