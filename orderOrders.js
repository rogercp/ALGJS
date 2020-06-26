

var takeOutOrders= [1, 3, 5];
var dineInOrders= [2, 4, 6];
var servedOrders= [1,4, 2, 3, 5, 6];


const inOrder = (takeOutOrders,dineInOrders,servedOrders)=>{

	var takeOutIndex = 0;
	var dineInIndex = 0;
	var servedIndex = 0;
 
	while(servedIndex < servedOrders.length){

		var takoutIsExhuasted = takeOutIndex >= takeOutOrders.length;
		var dineInIsExhausted = dineInIndex >= dineInOrders.length;

		if( !dineInIsExhausted && servedOrders[servedIndex] === dineInOrders[dineInIndex]){
			dineInIndex ++;
			servedIndex ++;
		}
		if(!takoutIsExhuasted && servedOrders[servedIndex] === takeOutOrders[takeOutIndex]){
			takeOutIndex ++;
			servedOrders ++
		}
		else{

			return false;
		}

	
	}
	return true;

}


 console.log(inOrder(takeOutOrders,dineInOrders,servedOrders))
