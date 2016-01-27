The Fizzbuzz Challenge
======================
This is a solution to Makers Academy's [FizzBuzz Challenge](https://github.com/makersacademy/course/blob/master/fizzbuzz/fizzbuzz.md).

This solution uses a test-driven approach, with unit tests implemented using [Jasmine](http://jasmine.github.io).

A solution is also available in [Python](https://github.com/Andrew47/fizzbuzz-Python) and [Ruby](https://github.com/Andrew47/Fizzbuzz)

##Installation

The repository should be cloned and the directory changed into:

```
$ git clone git@github.com:Andrew47/Fizzbuzz.git
$ cd fizzbuzz_JS
$ cd FizzBuzz
```

##Usage Instructions

First open SpecRunner.html (`open SpecRunner.html`), then open up the console.

Create an instance of the FizzBuzz class: `var fizzbuzz = new FizzBuzz();`

Call the play method on `fizzbuzz` with a number as an argument, e.g. `fizzbuzz.play(3)`

* If the number is a multiple of three, `fizz` is returned
* If the number is a multiple of five, `buzz` is returned
* If the number is a multiple of three and five, `fizzbuzz` is returned
* Otherwise the given number will be returned
