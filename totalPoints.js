function pointsCal(arr){
    let totalPoints = 0;
    for(let i = 0; i < arr.length; i++){
        const subArr = arr[i];
        const points = subArr.split(:);
        const t1 = points[0];
        const t2 = points[1];
        if(t1 > t2){
            totalPoints = totalPoints + 3;
        }
        else if(t1 === t2){
            totalPoints = totalPoints + 1;
        }
    }
    return totalPoints;
}