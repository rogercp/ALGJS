

var myList = ['h','i','s','t','o','r','y'];

const reverse = (list_of_chars)=>{
	

	left_index = 0;

	right_index = list_of_chars.length-1;


	while (left_index < right_index){


		temp = list_of_chars[right_index];


		list_of_chars[right_index] = list_of_chars[left_index];

		list_of_chars[left_index] = temp;

		left_index++;

		right_index--;


	}


}

reverse(myList)

console.log(myList)


