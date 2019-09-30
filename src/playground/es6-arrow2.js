const add = (a, b) => a + b;
console.log(add(1, 10, 888));

const user = {
  name: "Patti",
  cities: ["Chrzanow", "Katowice", "Krakow"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " was in " + city + "!");
  }
};
console.log(user.printPlacesLived());

const multipy = {
  numbers: [1, 3, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multipy.multiply());
