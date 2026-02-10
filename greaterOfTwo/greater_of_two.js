function greaterOfTwo(x,y)
{

  // Returns the larger value between x and y using comparison and arithmetic operations
  // Uses boolean comparison converted to 1 (true) or 0 (false) to select the greater value
  return(x > y) * x + (x <= y) *y;
}

console.log(greaterOfTwo(5,3));
console.log(greaterOfTwo(2,7));