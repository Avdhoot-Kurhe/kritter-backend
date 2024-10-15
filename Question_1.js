function normalizeString(inputString) {  
    let cleanedString = inputString.trim();  
    cleanedString = cleanedString.replace(/[^a-zA-Z0-9\s]/g, '');  
    
    cleanedString = cleanedString.replace(/\s+/g, ' ');  
    
    cleanedString = cleanedString.split(' ').map(word =>   
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  
    ).join(' ');  
    
    return cleanedString;  
}  

const inputStr = " Hello! World@ This is a Test!. ";  
const outputStr = normalizeString(inputStr);  
console.log(outputStr);