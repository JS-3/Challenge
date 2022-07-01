const findSum = function(array) {
  let sum = 0
   for (let i = 0; i < array.length; i++) {
      sum  += array [i];
    };
    return sum;
};

const findFrequency = function(array) {
      var arrayMap = array.reduce(function(obj, val) {
        obj[val] = ++obj[val] || 1;
        return obj;
      },{});
      
      var least = Object.keys(arrayMap)[0];
      var most = Object.keys(arrayMap)[0];

      for (key in arrayMap) {
       
       least = arrayMap[least] > arrayMap[key] ? key : least;
    
      } for (key in arrayMap) {
       
        most = arrayMap[most] < arrayMap[key] ? key : most;
      
        }
      return {most: most, least: least};     
};

const isPalindrome = function(str) {
      return str == str.split('').reverse().join('');
};

const largestPair = function(array) {
      var product = 0;
    for (var i = 0; i < array.length - 1; i++) {
        product = Math.max(product, array[i] * array[i + 1]);
  }
  return product;
};

const removeParenth = function(str) {
    var str1= str.replaceAll('(','').replaceAll(')',''); 
    return str1;
};

const scoreScrabble = function(str) {
 var scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
    var score = 0;
    str = str.toUpperCase();
    for (var i=0; i<str.length; i++) {
      var n = str.charCodeAt(i) - 65;
      if (n<0 || n>25) continue;
      score += scores[n];
    }
    return score;
};
