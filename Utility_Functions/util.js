
// return an Array With Random Numbers and his length is (iter)
const randArr=(iter)=>{
    let arr = [];
    for (let i = 0; i < iter; i++) {
        arr.push(Math.floor(Math.random()*150))
    }
    return arr;
}

// return true is arr1 is Equal To arr2
const sortTest=(arr1 , arr2)=>{
    let check = false;
    if(arr1.length === arr2.length){
        for(let i = 0 ; i < arr1.length;i++){
            if(arr1[i]!=arr2[i]){
                return check
            }
        }
    }else{
        return check;
    }
    check = true;
    return check;
}

// Swap two element of an array With Each-Other
const swap = (arr,firstIndex,secondIndex)=>{
    let temp = arr[firstIndex] ;
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}




module.exports={randArr,sortTest,swap}