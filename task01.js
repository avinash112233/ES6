

var numberSystem ={
    numberData: {
      primeNumbers:6,
      fibonacci: 13
    },
  
   sum_prime_number:function () {
    var sum =0;
    // var len = (this.numberData.primeNumbers).length;
    // console.log(len);
    for(var i=2; i<=this.numberData.primeNumbers;i++){
        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime){
            sum +=i;
        }
    }
    return sum;
    
  },

 fibonacci_Nth_term:function(){
    var x =0;
    var y =1;
    var sum;
    // var len = (this.numberData.fibonacci).length;
    for(i=0;i<this.numberData.fibonacci;i++){
      sum = x+y;
      x=y;
      y=sum;
  
    }
    return x;
  }

  
}


// console.log(numberSystem.fibonacci());



 
  module.exports = numberSystem;


  
