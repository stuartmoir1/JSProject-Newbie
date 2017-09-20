use main

db.data.drop();

db.data.insert([
  {
    "name": "abstraction",
    "description": "Using abstraction, a programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency.",
    "keywords": ["programmer", "object", "efficiency"],
    "testDescription": ["Using abstraction, a ", " hides all but the relevant data about an ", " in order to reduce complexity and increase ", "."],
    "image": "",
    "tags": ["object", "object-oriented propgramming", "variable"],
    "add_info": "Abstraction is one of the four fundamental OOP concepts. The other three are inheritance, polymorphism, and encapsulation.  Abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level. The programmer works with an idealized interface (usually well defined) and can add additional levels of functionality that would otherwise be too complex to handle.",
    "webpages": [
      {"What is abstraction": "http://whatis.techtarget.com/definition/abstraction"},
      {"Abstraction in StackOverflow": "https://stackoverflow.com/questions/7028242/what-is-abstraction"},
      {"Wikipedia (abstraction)": "https://en.wikipedia.org/wiki/Abstraction_(software_engineering)"}
    ],
    "videos": [
      {"Video discussing abstraction": "https://www.youtube.com/watch?v=6V1sr0XV_Ng"},
      {"Abstraction is a core idea": "https://www.youtube.com/watch?v=HJ6rX5qBPIc"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=L1-zCdrx8Lk",
     "audio": "./client/build/audio/abstraction.mp3"
  },

  {
    "name": "array",
    "description": "An array is a data structure that contains a group of elements, which are typically all of the same data type",
    "keywords": ["elements", "data"],
    "testDescription": ["An array is a data structure that contains a group of ", ", which are typically all of the same ", " type"],
    "tags": ["variable", "string", "integer"],
    "add_info": "An array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored so that the position of each element can be computed from its index tuple by a mathematical formula.",
    "webpages": [
      {"What is an array": "https://techterms.com/definition/array"},
      {"Array in StackOverflow (Java)": "https://stackoverflow.com/documentation/java/99/arrays#t=201709192017060243788"},
      {"Wikipedia (array)": "https://en.wikipedia.org/wiki/Array_data_structure"}
    ],
    "videos": [
      {"Explaining Java array": "https://www.youtube.com/watch?v=7VWPiKoia8o"},
      {"Explaining Ruby array": "https://www.youtube.com/watch?v=REDH9OzdQ_I"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=Zj_UC7c1nh4",
     "audio": "./client/build/audio/array.mp3"
  },

  {
    "name": "casting",
    "description": "Casting takes an object of one particular type and turns it into another object type.",
    "keywords": ["object", "object"],
    "testDescription": ["Casting takes an ", " of one particular type and turns it into another ", " type."],
    "tags": ["object", "Java"],
    "add_info": "Casting is a way of changing an entity of one data type into another. An example would be the conversion of an integer value into a floating point value or its textual representation as a string, and vice versa.  It can also be used with changing an object to another object allowing you to call methods on the converted object type.",
    "webpages": [
      {"What is casting": "http://www.studytonight.com/java/type-casting-in-java"},
      {"Wikipedia (type casting)": "https://en.wikipedia.org/wiki/Type_conversion#C-like_languages"}
    ],
    "videos": [
      {"Video what is casting": "https://www.youtube.com/watch?v=00oyrMoKpKc"},
      {"Variables, ints, doubles casting": "https://www.youtube.com/watch?v=BPEaPjHtTxE"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=G0q78w5dmcE",
     "audio": "./client/build/audio/casting.mp3"
  },

  {
    "name": "class",
    "description": "A class serves as a template for creating, or instantiating, specific objects within a program.",
    "keywords": [ "objects"],
    "testDescription": ["A class serves as a template for creating, or instantiating, specific ", " within a program."],
    "image": "",
    "tags": ["object-oriented programming", "object", "properties", "method", "object"],
    "add_info": "In many languages, the class name is used as the name for the class (the template itself), the name for the default constructor of the class (a subroutine that creates objects), and as the type of objects generated by instantiating the class; these distinct concepts are easily conflated. When an object is created by a constructor of the class, the resulting object is called an instance of the class, and the member variables specific to the object are called instance variables, to contrast with the class variables shared across the class.",
    "webpages": [
      {"What is a class": "http://guyhaas.com/bfoit/itp/JavaClass.html"},
      {"Wikipedia (class)": "https://en.wikipedia.org/wiki/Class_(computer_programming)"}
    ],
    "videos": [
      {"OO classes and objects": "https://www.youtube.com/watch?v=POrU7vcKB_k"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=BZ8r7pC9bHY",
    "audio": "./client/build/audio/class.mp3"
  },

  {
    "name": "encapsulation",
    "description": "Encapsulation in Java is a mechanism of wrapping the variables and the methods together as a single unit.",
    "keywords": ["variables", "methods"],
    "testDescription": ["Encapsulation in Java is a mechanism of wrapping the ", " and the ", " together as a single unit."],
    "tags": ["inheritance", "polymorphism", "abstraction", "Java"],
    "add_info": "Encapsulation is one of the four fundamental OOP concepts. The other three are inheritance, polymorphism, and abstraction. In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class.",
    "webpages": [
      {"What is encapsulation Java": "https://beginnersbook.com/2013/05/encapsulation-in-java/"},
      {"Encapsulation in StackOverflow": "https://stackoverflow.com/questions/4772956/encapsulation-concept"},
      {"Wikipedia (encapsulation)": "https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)"}
    ],
    "videos": [
      {"Video tutorial encapsulation": "https://www.youtube.com/watch?v=JQ8CuedDchw"},
      {"Video explaining encapsulation": "https://www.youtube.com/watch?v=tt_astMjep0"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=szYzBC89CPE",
     "audio": "./client/build/audio/encapsulation.mp3"
  },

  {
    "name": "hash",
    "description": "A Hash is a dictionary-like collection of unique keys and their values.",
    "keywords": ["keys", "values"],
    "testDescription": ["A Hash is a dictionary-like collection of unique ", " and their ", "."],
    "tags": ["Ruby", "variable"],
    "add_info": "A Hash is a collection of key-value pairs like this: 'employee' => 'salary'. It is similar to an Array, except that indexing is done via arbitrary keys of any object type, not an integer index.  The order in which you traverse a hash by either key or value may seem arbitrary and will generally not be in the insertion order. If you attempt to access a hash with a key that does not exist, the method will return nil.",
    "webpages": [
      {"What is a hash": "http://rubylearning.com/satishtalim/ruby_hashes.html"},
      {"Hash syntax in StackOverflow": "https://stackoverflow.com/questions/4563766/hash-syntax-in-ruby"}
    ],
    "videos": [
      {"Video writing hashes": "https://www.youtube.com/watch?v=3tSPTv27QcY"},
      {"Ruby data structures - hashes": "https://www.youtube.com/watch?v=QOytrJL4c2c"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=SYMM9qNOXg8",
     "audio": "./client/build/audio/hash"
  },

  {
    "name": "inheritance",
    "description": "In object-oriented programming, inheritance enables new objects to take on the properties of existing objects.",
    "keywords": ["object-oriented", "objects", "properties"],
    "testDescription": ["In ", " programming, inheritance enables new ", " to take on the ", " of existing objects."],
    "tags": ["object-oriented programming", "object", "properties", "encapsulation", "polymorphism", "abstraction"],
    "add_info": "Inheritance is one of the four fundamental OOP concepts. The other three are encapsulation, polymorphism, and abstraction. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class. The terms parent class and child class are also acceptable terms to use respectively. A child inherits visible properties and methods from its parent while adding additional properties and methods of its own.",
    "webpages": [
      {"What is inheritance": "http://whatis.techtarget.com/definition/inheritance"},
      {"Difference between inheritance and polymorphism": "https://stackoverflow.com/questions/6308178/what-is-the-main-difference-between-inheritance-and-polymorphism"},
      {"Wikipedia (inheritance)": "https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)"}
    ],
    "videos": [
      {"Video what is inheritance": "https://www.youtube.com/watch?v=aFZ-0bbSLi8&t=111s"},
      {"Tutorial for beginners": "https://www.youtube.com/watch?v=lz1Cx6GzOuc"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=0PPKccntohM",
     "audio": "./client/build/audio/inheritance.mp3"
  },

  {
    "name": "interface",
    "description": "An interface is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.",
    "keywords": ["methods", "class", "abstract"],
    "testDescription": ["An interface is a collection of abstract ", ". A ", " implements an interface, thereby inheriting the ", " methods of the interface."],
    "tags": ["method", "class", "Java"],
    "add_info": "An interface can be thought of as a blueprint of a class. Interfaces cannot be instantiated, but rather are implemented. A class that implements an interface must implement all of the methods described in the interface, or be an abstract class.",
    "webpages": [
      {"What is an interface": "https://www.javatpoint.com/interface-in-java"},
      {"Interface in StackOverflow": "https://stackoverflow.com/questions/1321122/what-is-an-interface-in-java"},
      {"Wikipedia (interface)": "https://en.wikipedia.org/wiki/Interface_(Java)"}
    ],
    "videos": [
      {"Video explaining interface": "https://www.youtube.com/watch?v=Yaa3QroWe7Q"},
      {"Tutorial for beginners": "https://www.youtube.com/watch?v=HxmP7ZVUeGU"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=NnZQ-C0x4hs",
     "audio": "./client/build/audio/interface.mp3"
  },

  {
    "name": "method",
    "description": "An action that an object is able to perform.",
    "keywords": ["action", "object"],
    "testDescription": ["An ", " that an ", "is able to perform."],
    "tags": ["function", "class", "object"],
    "add_info": "A method defines the behaviour of the objects that are created from the class. Consider the example of an object of the type 'person,' created using the person class. Methods associated with this class could consist of things like walking and driving. Methods are sometimes confused with functions, but they are distinct.",
    "webpages": [
      {"Wikipedia (Method)": "https://en.wikipedia.org/wiki/Method_(computer_programming)"},
      {"Codecademy (Method)": "https://www.codecademy.com/courses/learn-ruby/lessons/methods-blocks-sorting/exercises/why-methods?action=lesson_resume"}
    ],
    "videos": [
      {"YouTube video:": "https://www.youtube.com/watch?v=_rsKeFaGx48"}
    ],
    "embed_video": "https://www.youtube.com/embed/1OZrWqVncsU",
    "audio": "./client/build/audio/method.mp3"
  },

  {
    "name": "object",
    "description": "A self-contained component that contains properties and methods needed to make a certain type of data useful.",
    "keywords": ["properties", "methods"],
    "testDescription": ["A self-contained component that contains ", " and ", " needed to make a certain type of data useful."],
    "tags": ["object-oriented programming", "class"],
    "add_info": "Software objects are conceptually similar to real-world objects: An object’s properties are what it knows and its methods are what it can do. they too consist of state and related behavior. An object stores its state in fields (variables in some programming languages) and exposes its behavior through methods (functions in some programming languages). Methods operate on an object's internal state and serve as the primary mechanism for object-to-object communication. Hiding internal state and requiring all interaction to be performed through an object's methods is known as data encapsulation — a fundamental principle of object-oriented programming.",
    "webpages": [
      {"Wikipedia (Object)": "https://en.wikipedia.org/wiki/Object_(computer_science)"},
      {"Oracle (Object)": "http://docs.oracle.com/javase/tutorial/java/concepts/object.html"},
      {"Codecademy (Object)": "https://www.codecademy.com/courses/learn-ruby/lessons/object-oriented-programming-i/exercises/why-classes?action=lesson_resume"}
    ],
    "videos": [
      {"YouTube video": "https://www.youtube.com/watch?v=1OZrWqVncsU"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=1OZrWqVncsU",
    "audio": "./client/build/audio/object.mp3"
  },

  {
    "name": "overloading",
    "description": "Overloading is the ability to define more than one method with the same name in a class.",
    "keywords": ["method", "class"],
    "testDescription": ["Overloading is the ability to define more than one ", " with the same name in a ", "."],
    "tags": ["method", "class", "overriding"],
    "add_info": "Function overloading or method overloading is the ability to create multiple methods of the same name with different implementations. Calls to an overloaded function will run a specific implementation of that function appropriate to the context of the call, allowing one function call to perform different tasks depending on context.",
    "webpages": [
      {"Example of overloading": "https://www.tutorialspoint.com/javaexamples/method_overloading.htm"},
      {"Constructor overloading in StackOverflow": "https://stackoverflow.com/questions/1182153/constructor-overloading-in-java-best-practice"},
      {"Wikipedia (function overloading)": "https://en.wikipedia.org/wiki/Function_overloading"}
    ],
    "videos": [
      {"Video tutorial overloading": "https://www.youtube.com/watch?v=pBe4hLdrMHA"},
      {"Difference between overloading and overriding": "https://www.youtube.com/watch?v=4HJUX_BQgGI"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=hGRSyIvoIT4",
     "audio": "./client/build/audio/overload.mp3"
  },

  {
    "name": "overriding",
    "description": "Overriding enables a child class to provide different implementation for a method that is already defined and/or implemented in its parent class or one of its parent classes.",
    "keywords": ["child", "method", "parent", "parent"],
    "testDescription": ["Overriding enables a ", " class to provide different implementation for a ", " that is already defined and/or implemented in its ", " class or one of its ", " classes."],
    "tags": ["class", "method", "overloading"],
    "add_info": "Overriding allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses or parent classes. The implementation in the subclass overrides (replaces) the implementation in the superclass by providing a method that has same name, same parameters or signature, and same return type as the method in the parent class.",
    "webpages": [
      {"What is overriding": "https://www.tutorialspoint.com/java/java_overriding.htm"},
      {"Overriding in StackOverflow": "https://stackoverflow.com/questions/8813599/overriding-in-java"},
      {"Wikipedia (method overloading)": "https://en.wikipedia.org/wiki/Method_overriding"}
    ],
    "videos": [
      {"Video tutorial overriding": "https://www.youtube.com/watch?v=rVSlCg2ttZ0"},
      {"Difference between overloading and overriding": "https://www.youtube.com/watch?v=4HJUX_BQgGI"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=ouI9Qarbbik",
     "audio": "./client/build/audio/override.mp3"
  },

  {
    "name": "polymorphism",
    "description": "In object-orientated programming, the ability of an object to take on many forms."
    "keywords": ["object", "object-orientated programming"],
    "testDescription": ["object"],
    "tags": ["object", "object-orientated programming"],
    "add_info": "Polymorphism is one of the four fundamental OOP concepts. The other three are encapsulation, inheritance, and abstraction. Ts the characteristic of being able to assign a different meaning or usage to something in different contexts - specifically, to allow an entity such as a variable, a function, or an object to have more than one form. There are several different kinds of polymorphism, including ad hoc polymorphism, parametric polymorphism and subtyping.",
    "webpages": [
      {"Wikipedia": "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)"},
      {"Polymorphism in Java": "https://beginnersbook.com/2013/03/polymorphism-in-java/"},
      {"What is Polymorphism in Java?": "http://www.developer.com/java/data/what-is-polymorphism-in-java.html"}
    ],
    "videos": [
      {"Java Porgramming Tutorial - Java": "https://www.youtube.com/watch?v=0xw06loTm1k"},
      {"Introduction to Polymorphism": "https://vimeo.com/60187931"}
    ],
     "embed_video": "https://www.youtube.com/embed/0xw06loTm1k",
     "audio": "./client/build/audio/polymorphism.mp3"
  },
  
  {
    "name": "properties",
    "description": "Variables declared within a class.",
    "keywords": ["Variables", "class"],
    "testDescription": ["", "declared within a ", "."],
    "tags": ["object-oriented programming", "class"],
    "add_info": "A property, in object-oriented programming languages, is a special sort of class member, intermediate in functionality between a field (or data member) and a method. The syntax for reading and writing of properties is like for fields, but property reads and writes are (usually) translated to 'getter' and 'setter' method calls. The field-like syntax is easier to read and write than lots of method calls, yet the interposition of method calls 'under the hood' allows for data validation, active updating (eg of GUI elements), or implementation of what may be called 'read-only fields'.",
    "webpages": [
      {"What is a Property": "http://study.com/academy/lesson/what-is-an-attribute-in-computer-programming-definition-examples.html"},
      {"Property in StackOverflow": "https://stackoverflow.com/questions/4246883/what-is-method-property-and-function"},
      {"Wikipedia (Property)": "https://en.wikipedia.org/wiki/Property_(programming)"}
    ],
    "videos": [
      {"Video discussing Properties": "https://www.youtube.com/watch?v=grcPxVOnZpY"},
      {"Functional Properties": "https://www.youtube.com/watch?v=qzzFHpn69UQ"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=GAlH10AY7YI",
    "audio": "./client/build/audio/property.mp3"
  },

  {
    "name": "variable",
    "description": "A variable is a named piece of computer memory, containing some information inside.",
    "keywords": ["variable", "memory", "information"],
    "testDescription": ["A",  "is a named piece of computer ", ", containing some ", " inside."],
    "tags": ["object-oriented programming", "array", "integer"],
    "add_info": "A variable is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value. The variable name is the usual way to reference the stored value; this separation of name and content allows the name to be used independently of the exact information it represents. The identifier in computer source code can be bound to a value during run time, and the value of the variable may thus change during the course of program execution.",
    "webpages": [
      {"What is a variable": "https://launchschool.com/books/ruby/read/variables"},
      {"Variable in StackOverflow": "https://stackoverflow.com/questions/1137158/what-is-a-variable"},
      {"Wikipedia (variable)": "https://en.wikipedia.org/wiki/Variable_(computer_science)"}
    ],
    "videos": [
      {"Video discussing variables": "https://www.youtube.com/watch?v=aeoGGabJhAQ"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=t4ND-_kTxcI",
    "audio": "./client/build/audio/variable.mp3"
  }

  

  // {
  //   "name": "",
  //   "description": "",
  //   "keywords": ["", ""],
  //   "testDescription": [" ", "", ""],
  //   "tags": ["", "", ""],
  //   "add_info": "",
  //   "webpages": [
  //     {"What is a variable": ""},
  //     {"Variable in StackOverflow": ""},
  //     {"Wikipedia (variable)": ""}
  //   ],
  //   "videos": [
  //     {"Video discussing variables": ""},
  //     {"Programming fundamentals - variables": ""}
  //   ],
  //    "embed_video": "",
  //    "audio": "./client/build/audio/"
  // }

]);
