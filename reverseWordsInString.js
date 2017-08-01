function reverseWordsInString (inputString) {
	var pivot = 0, i = 0;
	var outputString = '';

	while ( i <= inputString.length) {
		if (inputString[i] === ' ') {
			for (var j = i - 1; j >= pivot; j--) {
				outputString = outputString + inputString[j];
			}
			outputString = outputString + ' ';
			pivot = i + 1;
		}
		i++;
	}
	for (var k = inputString.length - 1; k >= pivot; k--) {
		outputString = outputString + inputString[k];
	}
	console.log(outputString);
}

var str = "The sky is blue !";

reverseWordsInString(str);

// Using built-in functions
console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));