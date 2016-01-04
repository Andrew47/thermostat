describe("fizzBuzz", function() {
  var game;

  beforeEach(function() {
    game = new fizzBuzz();
  });

  it("should return fizz when a multiple of 3", function() {
    expect(game.play(3)).toBe("Fizz");
  });

  it("should return buzz when a multiple of 5", function() {
    expect(game.play(5)).toBe("Buzz");
  });

  it("should return Fizzbuzz when divisible by 15", function() {
    expect(game.play(15)).toBe("Fizzbuzz");
  });

  it("returns number when not divisible by 3, 5 or 15", function() {
    expect(game.play(7)).toBe(7);
  });
});
