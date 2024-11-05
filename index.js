// Write your code here

// Breakfast class
// constructor with two parameters: food and drink
// store these properties in the  instances 

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

// class lunch
// have constructor with three parameters : salad , soup and drink
// stores these properties in an instance..

class Lunch {
    constructor( salad, soup, drink ){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}


// dinner
// have a constructor with 4 params : salad, dessert, soup, entree
// dessert is a private property and declared using the # prefix

class Dinner {
    #dessert;
    constructor (salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

// Testing 
// Creating instances for each class
let breakfast = new Breakfast("pancakes", "coffee");
let lunch = new Lunch("caesar salad", "goat-head soup", "iced tea");
let dinner = new Dinner("garden salad", "chicken soup", "misheveve", "chocolate cake");

// Outputting instances
console.log(breakfast); 
console.log(lunch);     
console.log(dinner);   
