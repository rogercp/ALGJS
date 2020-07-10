



const slowestKey =(keyTimes)=>
{


	letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	let slowestKey = keyTimes[0][0];

	let slowestTime = keyTimes[0][1];

	for(let i= 1; i<keyTimes.length;i++)
	{

		let currentTime = keyTimes[i][1] - keyTimes[i-1][1];

		if(currentTime > slowestTime)
			{
				slowestTime = currentTime;
				slowestKey = keyTimes[i][0];

			}

	}

	return letters[slowestKey];

}


console.log(slowestKey([[0, 2], [1, 5], [0, 9], [2, 15]]))
