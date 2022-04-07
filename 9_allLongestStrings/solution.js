function allLongestStrings(inputArray) {
    return inputArray.filter(s=>s.length===Math.max(...inputArray.map(l=>l.length)));
}

function solution(inputArray) {
    let result = [];
    let arrLength = [];  
    let maxValue = 0;
    for (let i = 0; i < inputArray.length; i++) {        
        arrLength.push(inputArray[i].length);    
    }   
    
    maxValue = findMax(arrLength);
    
    for (let i = 0; i < arrLength.length; i++){
        if (maxValue == arrLength[i]) result.push(inputArray[i]);
    }
    
    return result;
}

function findMax(arr){
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++){    
        if (maxValue < arr[i]) maxValue = arr[i]; 
    }
    return maxValue;
}
