function reverseWords (inputString) {
	var arr = [], revArr = [];
	arr = inputString.split(' ');
	for(var i = arr.length - 1; i >= 0; i--) {
		revArr.push(arr[i]);
	}
	return revArr.join(' ');
}

console.log(reverseWords("the sky is blue"));