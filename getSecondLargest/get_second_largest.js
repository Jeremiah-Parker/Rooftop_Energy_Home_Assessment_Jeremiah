function getSecondLargestNumber(arr)
{
 
    //Use Sorting for getting the second largest number
    // Sort array in descending order
    arr.sort(function(a,b) {
       return b - a;
    });

   // Remove duplicates while finding second unique largest
    let first = arr[0];
    

    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
         return  arr[i];
        }
    }

    return "No second largest number";
}


console.log(getSecondLargestNumber([3,1,4,1,5,9,7]));