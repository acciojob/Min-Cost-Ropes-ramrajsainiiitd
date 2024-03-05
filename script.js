let MinCost = 0;
function mincost(arr)
{ 
//write your code here
// return the min cost
// base condition
if(arr.length==1){
return MinCost;
}
else{
	let CostArray = [];
	SortedArray = arr.sort((a,b)=>a-b); // Increasing order
	CostArray[0] = SortedArray[0]+SortedArray[1]; // 5 ,9 
	MinCost+=CostArray[0];
	for(i=1;i<SortedArray.length-1;i++){
    CostArray[i] = SortedArray[i+1]; // 5,4,6, 9,6
	}
	return mincost(CostArray);
}
}
console.log(mincost(arr));
  
}
module.exports=mincost;
