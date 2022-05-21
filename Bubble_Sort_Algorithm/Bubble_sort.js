const swap = (arr,firstIndex,secondIndex)=>{
    let temp = arr[firstIndex] ;
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
const bubble_sort=(arr)=>{
    for (let i = 0 ; i <arr.length-1;i++){
        for(let j = arr.length-1; j>i;j--){
            if(arr[j] < arr[j-1]){
                swap(arr,j,j-1)
            }
        }
    }
    return arr;
}












