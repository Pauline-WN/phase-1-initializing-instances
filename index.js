// Write your code here
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    #dessert;
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }
  
  let breakfast1 = new Breakfast("Pancakes", "Coffee");
  let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  let dinner1 = new Dinner("Garden Salad", "Chicken Soup", "Steak", "Chocolate Cake");
  
  console.log(breakfast1);
  console.log(lunch1);
  console.log(dinner1);
  