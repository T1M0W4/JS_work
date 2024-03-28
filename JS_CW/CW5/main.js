// class Bank {
//     constructor(babki){
//         this.babki = babki
//     }
//     Sum(){
//         console.log((this.babki * 0.2) + this.babki)
//     }
// }

// let chelik = new Bank(250)
// chelik.Sum()

//---------------

// class Building {
//     constructor(height, width, length, floor, under){
//         this.height = height
//         this.width = width 
//         this.length = length
//         this.floor = floor
//         this.under = under
//     }
//     Under(){
//         if(this.under === true){
//             console.log( this.height * this.length * this.width  * (this.floor + 1))
//         }
//         else{
//             console.log(this.height * this.length * this.width  * this.floor)
//         }
//     }
//     Apartment(){
//         console.log(this.height * this.length * this.width)
//     }
//     info(){
//         console.log(this.height, this.width, this.length, this.floor, this.under)
//     }
// }

// let bi = new Building(4, 10, 10, 7, false)
// bi.Under()
// bi.Apartment()
// bi.info()

//-------------------

// Родительский класс
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Метод родительского класса
    speak() {
      console.log(`${this.name} издает звук.`);
    }
  }
  
  // Дочерний класс, наследующий от Animal
  class Dog extends Animal {
    constructor(name, breed) {
      // Вызов конструктора родительского класса
      super(name);
      this.breed = breed;
    }
  
    // Переопределение метода родительского класса
    speak() {
      console.log(`${this.name} издает лай.`);
    }
  
    // Новый метод только для класса Dog
    fetch() {
      console.log(`${this.name} принес мяч.`);
    }
  }
  
  // Дочерний класс, наследующий от Dog
  class GuideDog extends Dog {
    constructor(name, breed, isTrained) {
      // Вызов конструктора родительского класса
      super(name, breed);
      this.isTrained = isTrained;
    }
  
    // Переопределение метода родительского класса
    speak() {
      console.log(`${this.name} издает лай, но с глухой интонацией.`);
    }
  
    // Новый метод только для класса GuideDog
    guide() {
      if (this.isTrained) {
        console.log(`${this.name} ведет своего хозяина.`);
      } else {
        console.log(`${this.name} еще не обучен.`);
      }
    }
  }
  
  // Создание экземпляра дочернего класса GuideDog
  const guideDog = new GuideDog('Рекс', 'Лабрадор', true);
  guideDog.speak(); // Вывод: Рекс издает лай, но с глухой интонацией.
  guideDog.fetch(); // Вывод: Рекс принес мяч.
  guideDog.guide(); // Вывод: Рекс ведет своего хозяина.