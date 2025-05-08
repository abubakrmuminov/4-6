import { squareNumber, stringLength, fillWith42, replaceWith100, sortNames, countGuests, mergeAndSort, capitalizeFirst, getStringLength, mergeAndSortDescending } from './tasks.js';
// 1-mashq \\
console.log(squareNumber(5));      
console.log(squareNumber("bes"));  
// 2-mashq \\
console.log(stringLength("salom"));      
console.log(stringLength(null));    
// 3-mashq \\
console.log(fillWith42([1, 2, 3]));  
console.log(fillWith42([]));       
// 4-mashq \\
console.log(replaceWith100([10, 20, 30, 40]));
console.log(replaceWith100([1, 2]));   
// 5-mashq \\
console.log(sortNames(["Zafar", "Ibrohim", "Abubakr"])); 
console.log(sortNames([]));                   
// 6-mashq \\
console.log(countGuests("Abubakr", "Zafar", "Shohrux"));  
console.log(countGuests("Abubakr"));                   
// 7-mashq \\
console.log(mergeAndSort([3, 1], [2, 4]));       
console.log(mergeAndSort([], [])); 
// 8-mashq \\
console.log(getStringLength("hello"));      
console.log(getStringLength(undefined));      