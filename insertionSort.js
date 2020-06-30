var arr = [33, 103, 3, 726, 200, 984, 198, 764, 9];


const insertionSort =(arr)=>{


	for (let i = 0; i< arr.length;i++){

		var currentVal = arr[i];

		var j = i-1

		while(j >=0 && currentVal < arr[j]){

			// keep looping and traversing down until you exit this loop

			arr[j + 1] = arr[j]

			 j --

		} 

		// where you place the current value

		arr[j + 1] = currentVal

	}

}


insertionSort(arr);

console.log(arr)