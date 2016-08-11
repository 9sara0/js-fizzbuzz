describe('Fizzbuzz',function(){

  var game;

  beforeEach(function(){
    game = new Fizzbuzz;
  });

  describe('Knows when a number is divisible by',function(){
    it('3',function(){
      expect(game.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('Knows when a number is not divisible by', function(){
    it('3', function(){
      expect(game.isDivisibleByThree(7)).toBe(false);
    });
  });
});
