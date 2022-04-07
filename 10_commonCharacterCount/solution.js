function commonCharacterCount(s1, s2) {
    var count = 0;
    for(var i = 0; i < s1.length; i++) {
        var j = s2.indexOf(s1[i]);
        if(j>=0){
            count++;
            s2 = s2.replace(s1[i],'');
        }
    }
    return count;
}


function solution(s1, s2) {
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');    
    let result = 0;
    for (let i = s1Arr.length-1; i >=0 ; i--) {
        for (let j = s2Arr.length-1; j >=0 ; j--){
            if (s1Arr[i] === s2Arr[j]){
            s1Arr.splice(i,1);    
            s2Arr.splice(j,1);  
            result++  
            }
        }
    }
    return result;
    
}
