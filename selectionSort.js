

var my_arr = [23,4,56,3,5]


const selection_sort =(arr)=>{


    for(let i = 0; i<arr.length;i++){

        let currentIndex = i;
        let currentSmallest = currentIndex;

        for(let j = currentIndex; j< arr.length; j++){

            nextIndex = j ;

            if(arr[nextIndex] < arr[curentSmallest]){

                curentSmallest = nextIndex;
            }

        }


        temp = arr[currentIndex];

        arr[currentIndex] = arr[currentSmallest];

        arr[currentSmallest] = temp;

    }

}






console.log(selection_sort(my_arr))
