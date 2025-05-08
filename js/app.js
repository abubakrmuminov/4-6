import { squareNumber, stringLength, fillWith42, replaceWith100, sortNames, countGuests, mergeAndSort, capitalizeFirst, getStringLength, mergeAndSortDescending } from './tasks.js';
// 1-mashq \\
console.log(squareNumber(5));      
console.log(squareNumber("bes"));  

console.log(stringLength("salom"));      
console.log(stringLength(null));    

console.log(fillWith42([1, 2, 3]));  
console.log(fillWith42([]));       

console.log(replaceWith100([10, 20, 30, 40]));
console.log(replaceWith100([1, 2]));   

console.log(sortNames(["Zafar", "Ibrohim", "Abubakr"])); 
console.log(sortNames([]));                   

console.log(countGuests("Abubakr", "Zafar", "Shohrux"));  
console.log(countGuests("Abubakr"));                   

console.log(mergeAndSort([3, 1], [2, 4]));       
console.log(mergeAndSort([], []));                

console.log(capitalizeFirst("salom"));  
console.log(capitalizeFirst(123));   

console.log(getStringLength("hello"));      
console.log(getStringLength(undefined));      

console.log(mergeAndSortDescending([50, 30], [40, 60])); 
console.log(mergeAndSortDescending([], []));      