describe("Fizzbuzz", function() {
  var fizzBuzz;

  beforeEach (function() {
    fizzBuzz = new Fizzbuzz();
  })


  describe("Knows if a number is divisible ", function() {
    it("by 3", function(){
      expect(fizzBuzz.isDivByThree(3)).toBe(true);
    });

    it("by 5", function(){
      expect(fizzBuzz.isDivByFive(5)).toBe(true);
    });

    it("by 15", function(){
      expect(fizzBuzz.isDivByFifteen(15)).toBe(true);
    });
  });

  describe("Knows if a number is not divisible", function(){
    it('by 3', function(){
      expect(fizzBuzz.isDivByThree(7)).toBe(false);
    });
    it("by 5", function(){
      expect(fizzBuzz.isDivByFive(7)).toBe(false);
    });
    it('by 15', function(){
      expect(fizzBuzz.isDivByFifteen(7)).toBe(false)
    });
  });

  describe("When playing, the game says", function(){
    it("'Fizz', when a number is divisible by 3", function(){
      expect(fizzBuzz.says(3)).toEqual('Fizz');
    });
    it("'Buzz', when a number is divisible by 5", function(){
      expect(fizzBuzz.says(5)).toEqual('Buzz')
    });
    it("'FizzBuzz', when a number is divisible by 15", function(){
      expect(fizzBuzz.says(15)).toEqual('FizzBuzz')
    });
    it("Returns the number otherwise", function(){
      expect(fizzBuzz.says(1)).toEqual(1)
    });
  });
});
