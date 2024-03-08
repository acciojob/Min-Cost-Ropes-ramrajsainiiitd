function mincost(arr) {

	// start
	if (arr.length==1) {
		return arr[0];
	}
	if (arr.length>1) {
let MinCostPrice = 0;
function mincost1(arr){ 
//write your code here
// return the min cost
// base condition
if(arr.length==1){
return MinCostPrice;
}
else{
	let CostArray = [];
	SortedArray = arr.sort((a,b)=>a-b); // Increasing order
	CostArray[0] = SortedArray[0]+SortedArray[1]; // 5 ,9 15
	MinCostPrice+=CostArray[0]; // 14+15=29
	for(i=1;i<SortedArray.length-1;i++){
    CostArray[i] = SortedArray[i+1]; // 5,4,6, 9,6
	}
	return mincost1(CostArray);
}
}
console.log(mincost1(arr));
  
}
}
module.exports=mincost;
