var arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
];

function getObj(arr) {
    var obj = {};
    
    arr.forEach( item => {
        obj[item.name] = item.value;
    });
    console.log(obj);
    return obj;
}
getObj(arr);