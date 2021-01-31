 function perfect_square_sum (number) {
    var sum=0;
    for(var i=0;i<number;i++){
      if(Math.sqrt(i) % 1 === 0){
          sum += i;


      }
      
    
  }

  let creatingMap = new Map();
return creatingMap.set('perfect_square_sum', sum);


}


module.exports = perfect_square_sum;
