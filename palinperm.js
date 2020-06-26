


  const  has_palindrome_permutation =(the_string)=>{

  	let unpaired_character = new Set()

  	for (let i = 0 ; i< the_string.length ;i++){

  		if(unpaired_character.has(the_string[i])){

  			unpaired_character.delete(the_string[i])
  		}
  		else{

  			unpaired_character.add(the_string[i])
  		}
  	}

  	return unpaired_character.size <= 1

  }


 

console.log(has_palindrome_permutation("ivicc"))
