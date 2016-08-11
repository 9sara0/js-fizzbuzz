describe('Fizzbuzz',function(){

  var game;

  beforeEach(function(){
    game = new Fizzbuzz;
  });

  describe('it knows when a number is divisible by',function(){
    it('3',function(){
      expect(game.isDivisibleByThree(3)).toBe(true);
    });
  });
});
