function remove(array){
    let map1=new Map();
    for(var i=0;i<array.length;i++){
        map1.set(i,[...new Set(array[i])]);
    }
    return map1;

}
module.exports=remove;
