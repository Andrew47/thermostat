describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("Multiples of three", function(){

  it("return fizz when given three", function() {
    expect(fizzBuzz.play(3)).toBe("Fizz");
  });

  it("return fizz when given six", function() {
    expect(fizzBuzz.play(6)).toBe("Fizz");
  });

  });

  describe("Multiples of three", function(){

  it("return buzz when given five", function() {
    expect(fizzBuzz.play(5)).toBe("Buzz");
  });

  it("return buzz when given ten", function() {
    expect(fizzBuzz.play(10)).toBe("Buzz");
  });

  });

  describe("Multiples of fifteen", function(){

  it("return Fizzbuzz given fifteen", function() {
    expect(fizzBuzz.play(15)).toBe("Fizzbuzz");
  });

  it("return Fizzbuzz given thirty", function() {
    expect(fizzBuzz.play(30)).toBe("Fizzbuzz");
  });

  });

  describe("Other numbers", function(){

  it("return 1 when given one", function() {
    expect(fizzBuzz.play(1)).toBe(1);
  });

  it("return 11 when given eleven", function() {
    expect(fizzBuzz.play(7)).toBe(7);
  });

  });


});
