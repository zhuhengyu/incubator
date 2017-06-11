const sortStrategy = {
	bubbleSort(arr) {
		console.log('bubble sorting');
		arr.sort();
	},
	quickSort(arr) {
		console.log('quick sorting');
		arr.sort();
	}
};

const sort = (strategy, arr) => {
	const newArr = arr.slice(0);
	sortStrategy[strategy](newArr);
	return newArr;
};


const arr = [2, 3, 1, 4];
console.log(sort('bubbleSort', arr));
console.log(sort('quickSort', arr));
