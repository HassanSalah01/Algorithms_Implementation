const insertion_sort=(arr)=>{
    for(let i = 1 ; i < arr.length ; i++){
        temp = arr[i]
        for(let j = i-1 ; j>=0;j--){
            if(temp<=arr[j]){
                arr[j+1]=arr[j]
                arr[j]=temp
                console.log("arr",i,arr)
            }
        }
    }
    console.log(arr)
}
