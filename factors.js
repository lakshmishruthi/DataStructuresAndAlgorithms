function getFactors (number) {
	var factorsArr = [];
	var i = 2;

	while (i <= number) {
		if ((number % i) === 0) {
			factorsArr.push(i);
		}
		i++;
	}
	return factorsArr;
}

console.log(getFactors(100));