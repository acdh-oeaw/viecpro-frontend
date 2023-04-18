export default function useGroupArrayOfObjectsByKey(data, key) {
	// TODO: type this
	const temp: object = {};

	data.forEach((el) => {
		if (Object.keys(temp).includes(el[key])) {
			temp[el[key]].push(el);
		} else {
			temp[el[key]] = [el];
		}
	});
	return temp;
}
