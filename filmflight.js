

const can_two_movies_fill_flight =(movie_lengths, flight_length)=>{



let movie_lengths_seen = new Set();

// add() has() clear()

	for (let i =0 ; i < movie_lengths.length; i++){

		console.log(movie_lengths[i])

		matching_second_length = flight_length - i;

		if(movie_lengths_seen.has(matching_second_length)){

			return true;

		}
		movie_lengths_seen.add(movie_lengths[i])

	}
	return false


}


console.log(can_two_movies_fill_flight([10,23,456,100,23423,130,34,20,465],30));