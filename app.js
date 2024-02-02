// Uyga vazifa bajarildi:

// 1-topshiriq
//  1-korinish

// const name = [Abror,Laziz,Hasan,Samandar];
// [a,,,,b] = name;
// console.log(a, b);

// 2-korinish
// [a, b, c, d] = name;
// let data = [];
// data.push(b);
// data.push(a);
// data.push(c);
// data.push(d);
// console.log(data);

// 3-korinish
// let data = [];
// [a, b, c, d] = name;
// a*=3;
// d*=2;
// c*=4;
// b*=5
// data.push(b);
// data.push(c);
// console.log(data);



// 2-Topshiriq

// const movie1 = {
//     title:"The Matrix",
//     director:"The Wachowskis",
//     year:1999,
// };

// const movie2 = {
//     genre:"Science fiction",
//     cast:["Keanu Reeves", "Laurence Fishburne", "Carri-Anne Moss"],
// };


// let {title, director, year} = movie1;
// let {genre, cast} = movie2;

// let movie = {};
// movie.title = title;
// movie.director = director;
// movie.year = year;
// movie.genre = genre;
// movie.cast = cast;

// console.log(movie);

// 2-korinish
// let movie = {
//     title: 'The Matrix',
//     director: 'The Wachowskis',
//     year: 1999,
//     genre: 'Science fiction',
//     cast: [ 'Keanu Reeves', 'Laurence Fishburne', 'Carri-Anne Moss' ]
//   };



//   let {title, director, year, genre, cast} = movie;
//   let movie1 = {
//     title:movie.title,
//     director:movie.director,
//     year:movie.year,
//   };
//   let movie2 = {
//     genre:movie.genre,
//     cast:movie.cast,
//   };

//   console.log(movie1);
//   console.log(movie2);

// 3-korinish
// function Destructring(arg1, arg2) {
// let {title, director, year} = arg1;
// let {genre, cast} = arg2;

// let movie = {};
// movie.title = title;
// movie.director = director;
// movie.year = year;
// movie.genre = genre;
// movie.cast = cast;

// return movie;
// };
// console.log(Destructring(movie1, movie2));



// 3-Topshiriq

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
    
//     sayHello(){
//       console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  

// const person = new Person("John Doe", 25);
// person.sayHello(); 



// 4-Topshiriq Map va Set 
// Mapga misol:

// let country = new Map();
// country.set("Uzbekiston", "Poytaxti: Toshkent");
// country.set("Rossiya", "Poytaxti: Moskva");
// country.set("AQSh", "Poytaxti: Washington");

// console.log(country.get("Uzbekiston")); 

// Setga misol:

// let colors = new Set();
// colors.add("Red");
// colors.add("Blue");
// colors.add("Green");

// console.log(colors.has("Red")); 
// console.log(colors.size);



// 5-topshiriq 
// 1-getComputedStyle
// let button = document.querySelector("#button");
// console.log(window.getComputedStyle(button));

// 2-DocumentFragment
// const div = document.createElement('div');
// div.appendChild(document.createTextNode('Hello'));
// div.appendChild(document.createElement('span'));
// document.body.appendChild(div);
// console.log(div.childNodes); 



// 6-topshiriq
// 1-localStorage
// localStorageda malumot:
// saqlash:localStorage.setItem('key', 'value');
// ochirish:localStorage.removeItem('key');
// olish:var value = localStorage.getItem('key');

// 2-cookie
// cookieda malumot:
// saqlash:document.cookie = "key=value";
// ochirish:document.cookie = "key=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// olish:var value = document.cookie;

// 3-sessionStorage
// sessionStorage malumot:
// saqlash:sessionStorage.setItem('key', 'value');
// olish:var value = sessionStorage.getItem('key');
// ochirish:sessionStorage.removeItem('key');


// 4-indexedDBga saqlashni bilmayman iternetdan korib organib olaman. 