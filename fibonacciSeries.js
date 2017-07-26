function fibonacciSeries (count) {
	var n1 = 1, n2 = 1, n3 = 0, i = 0;

	console.log(n1);
	console.log(n2);

	while (i < count - 2) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		i++;
		console.log(n3);
	}
}

fibonacciSeries(8);
