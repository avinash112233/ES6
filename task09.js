function task09(pre_map, arr) {
  function isArmstrong(num) {
    if (num < 0) return false;
    
    const numToStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numToStr.length; i++) {
      sum += Math.pow(parseInt(numToStr[i]), numToStr.length);
    }

    return num === sum;
  }

  arr.forEach(item => {
    if (pre_map.has(item)) {
      pre_map.delete(item);
    } else {
      pre_map.set(item, isArmstrong(item));
    }
  });
  
  return pre_map;
}
module.exports=task09;
