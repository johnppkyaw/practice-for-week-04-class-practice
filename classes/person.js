// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw Error('introducePeople only takes an array as an argument.');
    }

    let allAreInstances = true;
    people.forEach(person => {
      if (!(person instanceof Person)) {
        allAreInstances = false;
      }
    })
    if (allAreInstances === false) {
      throw Error('All items in array must be Person class instances.');
    }
        //Another way to throw the error if all are not instances
    // let onlyInstances = people.filter(person => person instanceof Person);
    // if (onlyInstances.length !== people.length) {
    //   throw Error('All items in array must be Person class instances.');
    // }

    people.forEach(person => {
      person.introduce();
    });
  }
}
//Test
// let person1 = new Person('hel', 'lo', 12);
// let person2 = null;
// Person.introducePeople([person1]);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
