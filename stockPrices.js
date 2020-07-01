stock_prices = [10, 7, 5, 8, 11, 9,45,67,23,7,9,234,567,323,1]

const getBiggestProfits=(arr)=>
	{



		if(arr.length < 2)
		{
			console.log("Getting a profit requires at least 2 prices")
			return -1
		}

		min_price = arr[0]
		max_profit = arr[1] - arr[0]

		for(let i =1; i< arr.length;i++)
		{
			current_price = arr[i]

			potential_profit = current_price -min_price

			max_profit = Math.max(max_profit,potential_profit)
			min_price = Math.min(min_price,current_price)

		}

		return max_profit



	}








console.log(getBiggestProfits(stock_prices))