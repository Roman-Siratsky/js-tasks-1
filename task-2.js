// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
// returns[false,1,1,2,1,3,"a",0,0]
const newArray1 = [];
const newArray2 = [];

function moveZeros(array) {
    array.forEach(element => {
        if (element !== 0) {
            newArray1.push(element);
        } else if(element === 0){
            newArray2.push(element);
        }
        
    });
    newArray1.push(...newArray2);
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])

