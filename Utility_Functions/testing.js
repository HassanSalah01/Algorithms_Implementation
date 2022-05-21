const sortTesting=(unitestlen,arrLen,sortingFun)=>{
    let arr = [];
    for (let i  = 0 ; i < unitestlen ; i++){
        arr.push(randArr(arrLen));
    }
    for (let j  = 0 ; j < unitestlen ; j++){
        let inputArray = [...arr[j]];
        let testArr = [...arr[j]].sort(function(a, b){return a - b})
        let testArr2 =sortingFun(arr[j]);   
        if(sortTest(testArr,testArr2)){
            console.log(`Case ${j+1} `)
            console.log(`Input: [${inputArray}]`)
            console.log(`Expected : [${testArr}]`)
            console.log(`OutPut : [${testArr2}]`)
            console.log(`State :[ Passed ]`)
            console.log("--------------------------")
        }else{
            console.log(`Case ${j+1} `)
            console.log(`Input: [${inputArray}]`)
            console.log(`Expected : [${testArr}]`)
            console.log(`OutPut : [${testArr2}]`)
            console.log(`State :[ Failed ]`)
            console.log("--------------------------")
        }
    }
}
