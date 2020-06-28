var arr = [33, 103, 3, 726, 200, 984, 198, 764, 9];



function  bubbleSort(arr){

var swapped = true;
	while (swapped){
		swapped = false;
		for(var i=0 ; i<arr.length-1; i++){

			if(arr[i]>arr[i+1]){
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}

	}

}



bubbleSort(arr);
console.log(arr);


