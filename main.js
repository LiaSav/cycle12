let n = prompt(
  "Hi, friend! \nEnter a number N, greater than 1. \nThe function returns a string consisting of prime numbers less than N. One is not considered a prime number."
);
if (n) {
  alert("Result: " + cycle(n) + ".");
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = "";
  let prime = [];
  for (let i = 2; i < n; i++) {
    if (!prime[i]) {
      x += i + " ";
      for (let j = i * i; j < n; j += i) {
        prime[j] = true;
      }
    }
  }
  return x;
}
