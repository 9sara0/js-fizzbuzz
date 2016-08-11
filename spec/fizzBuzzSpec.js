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
      expect(game.isDivisibleByFiftenn(15)).toBe(true);
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
      expect(game.isDivisibleByFiftenn(7)).toBe(false);
    });
  });
});
