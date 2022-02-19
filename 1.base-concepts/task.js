"use strict"
function solveEquation(a, b, c) {  
  let arr = [];
  const d = Math.pow(b, 2) - (4 * a * c);
  if (a != 0) { 
    if (d > 0) {
      arr.push(((-b + Math.sqrt(d) ) / (2 * a)), ((-b - Math.sqrt(d) ) / (2 * a)));
    } else if (d === 0) {
      arr.push(-b / (2 * a) );
    } 
  }  
  return arr; 
}


