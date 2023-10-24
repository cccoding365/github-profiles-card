export const formatDateTime = (_date, format = 'YYYY/MM/DD') => {
	const date = new Date(_date);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hour = String(date.getHours()).padStart(2, '0');
	const minute = String(date.getMinutes()).padStart(2, '0');
	const second = String(date.getSeconds()).padStart(2, '0');

	return format.replace('YYYY', year)
		.replace('MM', month)
		.replace('DD', day)
		.replace('HH', hour)
		.replace('mm', minute)
		.replace('ss', second);
};

export const getDaysGap = (date1, date2 = Date.now()) => {
	const oneDay = 24 * 60 * 60 * 1000;

	const d1 = new Date(date1);
	const d2 = new Date(date2);

	return Math.abs(Math.round((d2 - d1) / oneDay));
}; 