const BASIC_PIZZA_PRICE = 10;
const CHEESE_TOPPING_PRICE = 2;
const PEPPERONI_TOPPING_PRICE = 3;
const HOT_SAUCE_TOPPING_PRICE = 1;

// createPizza function
const createPizza = (toppings) => toppings.reduce((acc, topping) => {
  let toppingPrice = 0;
  switch (topping) {
    case "cheese":
      toppingPrice = CHEESE_TOPPING_PRICE;
      break;
    case "pepperoni":
      toppingPrice = PEPPERONI_TOPPING_PRICE;
      break;
    case "hot_sauce":
      toppingPrice = HOT_SAUCE_TOPPING_PRICE;
      break;
    default:
      // Basic pizza with no toppings
      break;
  }
  return acc + toppingPrice;
}, BASIC_PIZZA_PRICE);


// const basicPizza =
// const pizzaWithCheese =
// const pizzaWithPepperoni = createPizza(["pepperoni", "]);
const pizzaWithBoth = createPizza(["cheese", "pepperoni"]);

console.log("Basic pizza price:", basicPizza); // Output: 10
console.log("Pizza with cheese price:", pizzaWithCheese); // Output: 12
console.log("Pizza with pepperoni price:", pizzaWithPepperoni); // Output: 13
console.log("Pizza with cheese and pepperoni price:", pizzaWithBoth); // Output: 15
