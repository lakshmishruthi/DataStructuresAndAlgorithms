function isPrime (number) {
	var sqrtNum = Math.sqrt(number);
	for (var i = 2; i <= sqrtNum; i++) {
		if (number % i === 0)
			return false;
	}
	return (number !== 1);
}

console.log(isPrime(50));