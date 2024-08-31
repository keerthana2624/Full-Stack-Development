// 1. A VECTOR TYPE
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
// that it saves to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a
// new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of
// the point (x, y) from the origin (0, 0).
// Sample Inputs and Outputs
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5




class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }

    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  console.log(new Vec(4, 5).plus(new Vec(1, 7)));
  // → Vec { x: 5, y: 12 }
  
  console.log(new Vec(6, 8).minus(new Vec(3, 2)));
  // → Vec { x: 3, y: 6 }
  
  console.log(new Vec(7, 24).length);
  // → 25



//   2. GROUPS
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a
// set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which
// values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its
// constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member),
// delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating
// whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the
// same.
// Give the class a static from method that takes an iterable object as its argument and creates a group that
// contains all the values produced by iterating over it.
// class Group {
// // Your code here.
// }
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      const index = this.members.indexOf(value);
      if (index !== -1) {
        this.members.splice(index, 1);
      }
    }
  
    has(value) {
      return this.members.indexOf(value) !== -1;
    }
  
    static from(iterable) {
      let group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([30, 40]);
  console.log(group.has(30)); // → true
  console.log(group.has(50)); // → false
  group.add(30);
  group.delete(30);
  console.log(group.has(30)); // → false
  

