describe('Fizzbuzz',function(){

  var game;

  beforeEach(function(){
    game = new Fizzbuzz;
  });

  describe('Knows when a number is divisible by',function(){
    it('3',function(){
      expect(game.isDivisibleByThree(3)).toBe(true);
    });
    it('5',function(){
      expect(game.isDivisibleByFive(5)).toBe(true);
    });
    it('15',function(){
      expect(game.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('Knows when a number is not divisible by', function(){
    it('3', function(){
      expect(game.isDivisibleByThree(7)).toBe(false);
    });
    it('5',function(){
      expect(game.isDivisibleByFive(7)).toBe(false);
    });
    it('15',function(){
      expect(game.isDivisibleByFifteen(7)).toBe(false);
    });
  });

  describe('While playign thre game, it says', function(){
    it('FizzBuzz when a number is divisible by 15', function(){
      expect(game.says(15)).toEqual('FizzBuzz');
    });
    it('Buzz, when a number is divisible by 5', function() {
      expect(game.says(5)).toEqual('Buzz');
    });
    it('Fizz, when a number is divisible by 3', function() {
      expect(game.says(3)).toEqual('Fizz');
    });
  });
});
