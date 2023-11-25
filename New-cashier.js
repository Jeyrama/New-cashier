/*
Some new cashiers started to work at your restaurant.
They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:
  "milkshakepizzatofufriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
Their preference is to get the orders as a nice clean string with spaces and capitals like so:
  "Burger Fries Tofu Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.
The menu items are fairly simple, there is no overlap in the names of the items:
  1. Burger
  2. Fries
  3. Tofu
  4. Pizza
  5. Sandwich
  6. Onionrings
  7. Milkshake
  8. Coke
*/


// Solution

const menu = ["Burger", "Fries", "Tofu", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];

const getOrder = (input) => {
  const order = [];

  menu.forEach(food => {
    const f = food.toLowerCase();
    for (let i = 0; (i = input.indexOf(f, i)) >= 0; i += f.length)
      order.push(food);
  });

  return order.join(' ');
}