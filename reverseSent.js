


var  message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];




const reverse_words =(message)=>{
  

  reverse_characters(message,0,message.length-1);

  let startingIndex = 0 

  for(let i =0 ; i <= message.length ;i++){


    if(message[i] == " " || i == message.length){

      reverse_characters(message , startingIndex , i - 1);

      startingIndex = i + 1

    }

  }

}


 const  reverse_characters = (message, left_index, right_index)=>{

  while (left_index<right_index){

    temp = message[right_index];
    message[right_index] = message[left_index];

    message[left_index] = temp;

    left_index ++;
    right_index --;

  }

}


reverse_words(message)

console.log(message)

  






