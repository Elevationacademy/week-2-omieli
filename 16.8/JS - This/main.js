
/*****************************Spot Check 1*******************/
// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   }
  
//   person.introduce() 
/************************************************************/

/*****************************EXERCISE 1*********************/

// const person = {
//     hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       hungry = false;
//       alert('Im no longer hungry!')
//     }
//   }
// }

// person.feed() 
/************************************************************/

/*****************************EXERCISE 2*********************/
// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + this.liters + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  /******************************************************************************/

  /*****************************EXERCISE 3*********************/
//   const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     fuel: 0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());
  /******************************************************************************/


  /*****************************EXERCISE 4****************************/
//   const tipJar = {
//     coinCount: 20,

//     tip: function () {
//       this.coinCount += 1;
//     },

//     stealCoins: function(stoled)  {
//         this.coinCount -= stoled
//     }
//   };
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

/***************************************************************************/ 

/*****************************EXERCISE 5****************************/
// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);
  

/*****************************EXERCISE 6****************************/
const coffeeShop = {
    beans: 40,
    money: 1000,
  
    drinkRequirements: {
      latte = {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 3},
      doubleShot: {beanRequirement: 15, price: 7},
      frenchPress: {beanRequirement: 12,  price: 6}
    },
    buyBeans: function(numBeans){
        return this.money -= (numBeans*this.drinkRequirements.drinkType[beanRequirement])
    },
  
    makeDrink: function (drinkType) {

      if(!(this.drinkRequirements.hasOwnProperty(drinkType))){
        console.log("Sorry, we don't make " + drinkType)
        return
    }
      if(this.drinkRequirements.drinkType[beanRequirement]<=this.beans){
      this.beans -= this.drinkRequirements.drinkType[beanRequirement]
      console.log(drinkType + " Ready!")
    return
    }
console.log("Sorry, we're all out of beans")
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  