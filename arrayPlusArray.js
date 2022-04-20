const arr1 = [1, 2, 4, 5];
const arr2 = [3, 6, 7, 9, 6];
console.log(arrayPlusArray(arr1, arr2));

function arrayPlusArray(arr1, arr2){
    const newArray = [...arr1, ...arr2];
    let sum = 0;
    for(const item of newArray){
        sum = sum + item;
    }
    return sum;
}