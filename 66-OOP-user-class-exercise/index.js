
//  * Exercise

//  * 1. create {User} class which receives {name},
//  * {age}, {hunger}.

class User {
  constructor(name, age, hunger){
    this.name = name;
    this.age = age;
    // this.hunger = hunger
    this.deadUser(hunger);
  };
//  * 2. {User} should has {name}, {age} and {hunger} getters.
  deaduser(){
    if (this.hunger <=0){
      return user;
    }
  }
  getName(){
    return this.name;
  }

  getAge(){
    return this.age;
  };

  getHunger(){
    return this.hunger;
  }
  //  * 3. Add getter {foodConsumed} which returns {foodEaten}
  getFoodEaten(){
    if(!this.foodEaten){
      return [];
    }
    return this.foodEaten
  }
    //  * 5. {hunger} should have setter.
  //  * Make sure you can't set {hunger} more than 100.
  setHunger(meter){
    if(meter >= 100){
      meter =100 ;
    }
    this.hunger = meter;
  }
  //  * 4. {hungerStatus} should return a string:
  //  * base on hunger level {hunger} should return a string:
  //  * 0 - 20: "Famished"
  //  * 21 - 40: "Starving"
  //  * 41 - 60: "Hungry"
  //  * 61 - 80: "Content"
  //  * 81 - 100: "Full"


  hungerStatus(){
    switch(true){
      case this.hunger >= 0 && this.hunger <= 20:
        return 'Famished';
        break;
      case this.hunger >= 21 && this.hunger <= 40:
        return 'Starving';
        break;
      case this.hunger >= 41 && this.hunger <= 60:
        return 'Hungry';
        break;
      case this.hunger >= 61 && this.hunger <= 80:
        return 'Content';
        break;
      case this.hunger >= 81 && this.hunger <= 100:
        return 'Full';
    }
  }  
  //  * 6. Add a method {eatFood}, which takes an object as an argument
  //  * (ex. {name:string; value: number;}) and add {value} to {hunger},
  //  * and food {name} store to {foodEaten}.
  //  * Make sure you can't set {hunger} more than 100.
  eatFood(food){
    if(this.foodEaten){
      this.foodEaten.push(food.name);
    } else {
      this.foodEaten = [food.name];
    }
    if((this.hunger + food.value) <= 100){
      this.hunger += food.value;
    } else {
      this.hunger = 100;
    }

  }

  starveABit(howMuchBy){
    
      this.hunger-=howMuchBy;
    if(this.hunger <= 0){
      return "You are dead";
    }

  }
  deadUser(hunger){
    this.hunger = hunger;
    if(this.hunger <= 0){
      return "User is dead";
    }
  }
  //  * 7. Add setter {starveABit} which takes an argument(number),
  //  * and deduct from {hunger}.
  //  * If after deduction, hunger <= 0 return "You are dead".
  
  //  * 8. If user is dead, make sure that on any method call you are getting
  //  * "User is dead"
  
  
}