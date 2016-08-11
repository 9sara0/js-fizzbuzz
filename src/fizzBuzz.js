var Fizzbuzz = function (){};

Fizzbuzz.prototype.isDivByThree = function(number) {
  return this._isDivBy(number,3);
};

Fizzbuzz.prototype.isDivByFive  = function(number) {
  return this._isDivBy(number,5);
};

Fizzbuzz.prototype.isDivByFifteen = function(number){
  return this._isDivBy(number,15);
};

Fizzbuzz.prototype._isDivBy = function(number, divisor){
  return number%divisor ===0;
};

Fizzbuzz.prototype.says = function (number) {
  if (this.isDivByFifteen(number)) return 'FizzBuzz';
  if (this.isDivByThree(number))   return 'Fizz';
  if (this.isDivByFive(number))    return 'Buzz';
  return number;
};
