const task01 =(arr1,arr2,key)=>{
    var output = new Map();
    for(var i=0;i<arr1.length;i++){
        output.set(arr1[i],arr2[i]);

    }
    if(output.has(key)){
        var value =output.get(key);
        output.delete(key);
        return{
            value:value,
            size:output.size,
            keys:[...output.keys()],
            map:output
        };
    }
    else{
        var result ="";
        for(var j=0;j<arr1.length;j++){
            result+=arr1[j]+":"+arr2[j]+"\n";
        }
        return result.slice(0,result.length-1);
    }
}
module.exports = task01;
