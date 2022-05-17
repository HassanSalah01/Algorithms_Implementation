function maxSubArray(arr){
    let newArr =[];
    let before = 0 ;
    for (let i = 0 ; i < arr.length;i++){
        if(i==0){
            newArr.push(arr[0]);
            before = newArr[i];
        }else{
            if((before+arr[i])>arr[i]){
                newArr.push(before+arr[i]);
                before = newArr[i];
            }else{
                newArr.push(arr[i]);
                before = newArr[i];
            }
        }
    }
    return max(newArr)
}



//Getting the max Number of an array
const max=(arr)=>{
    let x = arr[0];
    for(let i of arr){
        if(i > x ){
            x=i
        }
    }
    return x;
}



let x = [1,2,3,-2,5];
console.log(maxSubArray(x));




