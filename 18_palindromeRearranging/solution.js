function palindromeRearranging(inputString) {
    var odd = 0;
    var arr = inputString.split('');
    var el;
    var pos;
    while (arr.length) {
        el = arr.pop();
        pos = arr.indexOf(el);
        if (pos <0) {
            odd++;
        } else {
            arr.splice(pos,1);
        }
    }
    
    return odd <2;
}


(260/300 - Sample tests: 10/10 Hidden: 8/10)
function solution(inputString) {
    let arr = inputString.split('');
    let count = 1;
    let num = 0;
    arr.sort();        
    if (arr[0] != arr[1]) num = 1;        
    for (let i =  0; i < arr.length-1; i++) if (arr[i] == arr[i+1] ){
        count++;   
    } else if (arr[i] != arr[i+1] ){        
        (count%2 ==0) ? num += 0 : num += 1;        
        if ( i === arr.length-2 && num > 1) {
            return false;
        } else if (i === arr.length-2 && num <= 1) {
            return true; 
        }
        if (arr[i+1] != arr[i+2] ) return false;               
        count = 1; 
    }    
    return num > 1 ? false : true;    
}



  