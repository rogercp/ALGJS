


const selection_sort =(arr)=>{

    for(let i = 0; i<arr.length;i++){
      
        let currentSmallest = i;

        for(let j = i + 1; j<arr.length; j++){

            if(arr[currentSmallest]>arr[j]){

                currentSmallest = j;
            }
        }

      if(i !== currentSmallest){
        temp = arr[i];
        arr[i] = arr[currentSmallest];
        arr[currentSmallest] = temp;
      }
      
    }

  return arr;
}


console.log(selection_sort([4,3,5,2]))
