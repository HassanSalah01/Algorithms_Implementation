const selectionSort=(Arr)=>{
    let ind = 0;
    for (let i = 0; i < Arr.length-1; i++) {
        let min = Arr[i];
        for(let j = i ; j < Arr.length;j++){
            if(Arr[j] <= min){
                min= Arr[j];
                ind = j;
            }
        }
        Arr[ind] = Arr[i]
        Arr[i] = min
    }
    return Arr
}





