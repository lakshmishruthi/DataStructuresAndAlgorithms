function isPalindrome (inputNumber) {
	if(inputNumber === getReversedNumber(inputNumber)) {
		return true;
	} else {
		return false;
	}
}

function getReversedNumber (number) {
	var reversedNumber = 0;
	var remainder;
	while (number != 0) {
		remainder = number % 10;
		reversedNumber = (reversedNumber * 10) + remainder;
		number = parseInt(number / 10);
	}

	return reversedNumber;
}

console.log(isPalindrome(121));