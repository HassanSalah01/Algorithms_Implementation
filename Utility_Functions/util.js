const randArr=(iter)=>{
    let arr = [];
    for (let i = 0; i < iter; i++) {
        arr.push(Math.floor(Math.random()*150))
    }
    return arr;
}

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




module.exports={randArr,sortTest}