# ES6 Features Session
*Umapathi K*


### ES6 Overview

ES6 is also known as ECMAScript 2015

  

### 1.ES6 Feature - Array.prototype.includes()

Array.prototype.includes() is a method in JavaScript that allows you to determine whether an array contains a specific element. It returns true if the array contains the element, and false otherwise.

Here's a more general explanation of how we might use Array.prototype.includes():

Checking for Element Existence:  
  

    const numbers = [1, 2, 3, 4, 5];
    
    console.log(numbers.includes(3)); // true
    
    console.log(numbers.includes(6)); // false

  

1.  You can use this method to check whether a specific element is present in the array.  
      
    

Conditional Logic:  
  

    const fruits = ['apple', 'cherry', 'orange'];
    
    if (fruits.includes('orange')) {
    
    console.log('orange is in the array.');
    
    } else {
    
    console.log('orange is not in the array.');
    
    }

  

2.  Searching Within Arrays:  
  
const fruits = ['apple', 'cherry', 'orange'];

  

const searchTerm = 'apple';

const matchingItems = fruits.filter(item => item.includes(searchTerm));

console.log('Matching items:', matchingItems);

  

You can use includes() in combination with other array methods like filter() to find and work with elements that meet specific criteria.

----------

  

### 2. ES6 Feature - Exponential Operator

Before ES6, exponentiation often involved using Math.pow() or writing custom functions or loops.

For example:

javascriptCopy code

    // Using Math.pow()
    
    const base = 2;
    
    const exponent = 3;
    
    const result = Math.pow(base, exponent);
    
    console.log(result); // Output: 8

  

// Using a loop

    function power(base, exponent) {
    
    let result = 1;
    
    for (let i = 0; i < exponent; i++) {
    
    result *= base;
    
    }

    return result;
        
        }
    
    const result2 = power(2, 3);
    
    console.log(result2); // Output: 8

  
  

Code example:  
  

    console.log(2 ** 2); // 4
    
    console.log(2 ** 3); // 8

  

----------

### 3.ES6 Feature - Map

Sure, let's compare examples before and after ES6 for both the array's map()-like functionality and the concept of mapping key-value pairs.

### Before ES6 - Array Transformation:

Using a For Loop:

Before ES6, if we wanted to transform elements in an array, we would typically use a for loop.

    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
       doubledNumbers.push(numbers[i] * 2);
    }

    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

  

### After ES6 - Array Transformation:

Using Array's map() Method:

With ES6, the map() method was introduced for arrays, making it easier to transform elements.

    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = numbers.map(num => num * 2);
    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

  

Advantages :

-   Concise and Readable Code: map() allows for more concise and expressive code, enhancing code readability and reducing the amount of boilerplate compared to using a for loop.
    
-   Declarative Approach: map() follows a declarative programming paradigm, focusing on what to do rather than how to do it. It abstracts away the looping logic.
    
-   Immutability: map() does not modify the original array; instead, it returns a new array with the mapped values. This is beneficial for functional programming and avoiding unintended side effects.
    

  
  
  

----------

  
  

### Before ES6 - Mapping Key-Value Pairs:

Using Objects:

Before ES6 introduced the Map object, developers often used plain JavaScript objects to map keys to values.

        const userRoles = {
        
        'Alice': 'Admin',
        
        'Bob': 'User',
        
        'Eve': 'User'
        
        };
    
      
    
    console.log(userRoles['Alice']); // Output: Admin
    
      
    
    console.log('Bob' in userRoles); // Output: true
    
      
    
    console.log('Charlie' in userRoles); // Output: false
    
      
    
    // Getting the number of entries (keys) in the object
    
    console.log(Object.keys(userRoles).length); // Output: 3

  
  

However, using objects for mapping has limitations, such as keys always being converted to strings.

  

### After ES6 - Mapping Key-Value Pairs:

Using Map Object:

ES6 introduced the Map object, which provides a more efficient and reliable way to map keys to values.

    const userRoles = new Map();
    
    userRoles.set('Alice', 'Admin');
    
    userRoles.set('Bob', 'User');
    
    userRoles.set('Eve', 'User');

  

//**Return a value mapped to a specific key**

    console.log(userRoles.get('Alice')); // Output: Admin
    
      
    
    //Return a boolean value showing whether a specified key exists
    
    console.log(userRoles.has('Bob')); // Output: true
    
    console.log(userRoles.has('Charlie')); // Output: false
    
      
    
    //Return the number of entries in the map
    
    console.log(userRoles.size); // Output: 3
    
      
      

Using Map offers advantages like maintaining insertion order and allowing any type of value as a key.

Advantages:

-   Better Performance for Frequent Additions and Removals   
  

### 4. ES6 Feature - Set

The Set data structure in ES6 is a collection of unique values, meaning that each value can only appear once in a set. Here's a comparison of using Set before and after ES6:

### Before ES6:

Before ES6, if we wanted to create a collection of unique values, you would typically use arrays and write custom functions to handle uniqueness.

    // Using arrays to achieve uniqueness without includes() (pre-ES6)
    
    const uniqueValues = [];
    
      
    
    function isValueUnique(value) {
    
    for (let i = 0; i < uniqueValues.length; i++) {
    
    if (uniqueValues[i] === value) {
    
    return false;
    
    }
    
    }
    
    return true;
    
   

         }
        
          
        
        function addUniqueValue(value) {
        
        if (isValueUnique(value)) {
        
        uniqueValues.push(value);
        
        }
        
        }
    
      
    
    addUniqueValue(1);
    
    addUniqueValue(2);
    
    addUniqueValue(1);
    
    addUniqueValue(3);
    
      
    
    console.log(uniqueValues); // Output: [1, 2, 3]
    
      

### After ES6:

With ES6, the Set object was introduced, providing a straightforward way to manage unique values.

    // Using Set to handle unique values
    
    const uniqueValues = new Set();
    
      
    
    uniqueValues.add(1);
    
    uniqueValues.add(2);
    
    uniqueValues.add(1); // Adding duplicate, but it won't be stored
    
    uniqueValues.add(3);
    
      
    
    console.log(uniqueValues); // Output: Set(3) { 1, 2, 3 }
    
      
    
    //to check size of set
    
    console.log(uniqueValues.size) // Output: 3
    
      
      

In this ES6 example, we use the Set object to store unique values. The add() method is used to add elements to the set, and duplicates are automatically ignored, maintaining only unique values.

The Set object offers methods for managing unique values, such as add(), has(), delete(), and more, making it a convenient tool for working with collections of unique elements.

### 5. ES6 Feature - Block-Scoped Let and Const

var, let, and const in ES6 for variable declarations

### Before ES6:

        var y = "global";
        
          
        
        if (true) {
        
        var y = "block-scoped";
        
        console.log(y); // Output: block-scoped
        
        }
    
      
    
    console.log(y); // Output: block-scoped
    
      

  

In this pre-ES6 example, the var declaration is function-scoped, so the redeclaration of y inside the if block affects the variable outside the block.

### ES6 - Block-Scoped Variables (let and const):

        let x = "global";
        
          
        
        if (true) {
        
        let x = "block-scoped";
        
        console.log(x); // Output: block-scoped
        
        }
    
      
    
    console.log(x); // Output: global

  
  

With ES6's let, the variable x is block-scoped, meaning that the redeclaration inside the if block does not affect the variable outside the block.

### ES6 - Block-Scoped Constants (const):

    const z = "global";
    
      
    
    if (z === "global") {
    
    const z = "block-scoped";
    
    console.log(z); // Output: block-scoped
    
    }
    
      
    
    console.log(z); // Output: global

  
  

In the case of const, the variable z is also block-scoped, and it cannot be reassigned, providing a constant value within its scope.

### Guidelines for Usage:

-   Use const by default and let if rebinding is needed.
    
-   Avoid using var in ES6.
    
-   Use let for smaller, more localized scopes.
    

Adopting these approaches helps in writing cleaner, more maintainable code while leveraging the block-scoping advantages introduced by let and const in ES6.

##  ES6 Feature - Arrow Functions

### Before ES6:

In pre-ES6 JavaScript, you would use regular function expressions to achieve the same behavior:

    let greeting = function(name) {
    
    console.log('hello ' + name);
    
    };
    
    greeting('John');

  
  

### ES6 - Arrow Functions:

    let greeting = (name) => {
    
    console.log(`hello ${name}`);
    
    };
    
    greeting('John');

  
  

## Advantages of Arrow Functions:

### Implicit Return

### Before ES6:

  

    function add(a, b) {
    
    return a + b;
    
    };

  

### ES6 - Arrow Function:

    let add = (a, b) => a + b;

  
  
  

### Suitable for Callbacks:

### Before ES6:

    let numbers = [1, 2, 3];
    
    let squared = numbers.map(function(num) {
    
    return num * num;
    
    });

  
  

### ES6 - Arrow Function:

    let numbers = [1, 2, 3];
    
    let squared = numbers.map((num) => num * num);

  
  

### Implicit Parameters:

### Before ES6:

    let singleParam = function(a) {
    
    return a * a;
    
    };

  
  

### ES6 - Arrow Function:

    let singleParam = a => a * a;

  
  

### Better for Anonymous Functions:

### Before ES6:

    setTimeout(function() {
    
    console.log('Timeout completed');
    
    }, 1000);

  
  

### ES6  Arrow Function:

    setTimeout(() => {
    
    console.log('Timeout completed');
    
    }, 1000);

  
  

### ES6 Feature - Classes

### Before ES6 (Prototype-based Inheritance):

    // Constructor function (equivalent to a class)
    
    function Person(name, age) {
    
    this.name = name;
    
    this.age = age;
    
    }

  

    // Prototype method
    
    Person.prototype.greet = function() {
    
    console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old');
    
    };
    
      
    
    // Creating an instance
    
    const sarah = new Person('Sarah', 35);
    
      
    
    // Calling the method
    
    sarah.greet();
    
      
      

### Classes (Syntactic Sugar for Prototypal Inheritance):

    class Person {
    
    constructor(name, age) {
    
    this.name = name;
    
    this.age = age;
    
    }
    
      
    
    greet() {
    
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
    
    }
    
    }
    
      
    
    const sarah = new Person('Sarah', 35);
    
      
    
    sarah.greet();

  



###  ES6 Feature - Template Literals

Code example:  
  

    let name = "Roronoa Zoro";
    
    const greeting = `Hello, my name is ${name}`;
    
    console.log(greeting);

        
    

### Generators

### Before ES6:

In pre-ES6 JavaScript, achieving a generator-like behavior for generating unique IDs could involve using closures and maintaining internal state.

    function createIdGenerator() {
    
    let id = 0;
    
      
    
    return function() {
    
    return id++;
    
    };
    
    }
    
      
    
    const generateId = createIdGenerator();
    
      
    
    console.log(generateId()); // Output: 0
    
    console.log(generateId()); // Output: 1
    
    console.log(generateId()); // Output: 2
    
      
      

In this example, createIdGenerator() returns a closure that maintains the internal state of id and increments it each time generateId() is called.

### ES6 Generator:

Generator is a function that allows you to generate one or more values by exiting and re-entering the execution procedure whilst saving its state (context) across multiple calls. To put it in simpler words, a generator is similar to normal functions, but has the ability to continue execution on demand at the point at which it was previously terminated, simply by saving its previous state.

### Other ES6 Features

-   Brief mention of additional ES6 features like Symbols, Promises, Destructuring,proxies,• Default function arguments i.e. default parameters and default values,• Additional String Methods etc.
    

  
## New Feature I learnt this week

1.  ### GroupBy
    

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy#browser_compatibility)

2.  ### toSorted(), toReversed(), toSpliced()
    
3.  ### <Search> tag, <Dialog/>
    

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search)
  
  ---
  
  Next week session:

Arrow Function

Clousure

Generators

































