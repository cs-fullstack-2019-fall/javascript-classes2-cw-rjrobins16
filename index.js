//Exercise 1
//Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
// Create three different methods to change each attribute.
// Outside of the class create two different Movie objects, assign values to each object, and print them to the console.
//
//

class Movie{
    constructor(movieName,rating,yearReleased){
        this.movieName=movieName;
        this.rating=rating;
        this.yearReleased=yearReleased;
    }

    changeName(movieName){
        this.movieName=movieName;
    }

    changeRating(rating){
        this.rating=rating;
    }

    changeYear(year){
        this.yearReleased=year;
    }

}

let myMovie = new Movie('Cinderella','G','1998');

let badMovie = new Movie('Stepdad','R','2005');


myMovie.changeRating("PG");
console.log(myMovie);


badMovie.changeName('40 Year Old Virgin');
badMovie.changeYear('2001');
console.log(badMovie);



//KEN SAID IGNORE QUESTION 2

// ### Exercise 2
//Create a class Product that represents a product sold online. A product has a price, quantity and name.

  //  The class should have:
   // 1. A constructor to hold the values.
//2. A method ```printProduct()``` that prints a product in the following form: ```Banana, price 1.1, amount 13```

class Product {
    constructor(price,quantity,name){
        this.price=price;
        this.quantity=quantity;
        this.name=name;
    }
    printProduct(){
        console.log(this.name,this.price,this.quantity);
    }

}

let Nana = new Product("1.1","13","Banana");
Nana.printProduct();