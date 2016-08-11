var Fizzbuzz = function(){};

Fizzbuzz.prototype.isDivisibleByThree = function(number){
  return number%3 === 0;
};

Fizzbuzz.prototype.isDivisibleByFive = function(number){
  return number%5 === 0;
};

Fizzbuzz.prototype.isDivisibleByFiftenn = function(number){
  return number%15 === 0;
};
