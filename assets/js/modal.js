const modal = [
  {
    id: "1",
    question: "Is Javascript an interpreted or compiled language?",
    options: [
      {
        name: "Interpreted",
        isCorrect: true,
      },
      {
        name: "Compiled",
      },
      {
        name: "Both",
      },
      {
        name: "Neither",
      },
    ],
  },
  {
    id: "2",
    question:
      "Which Javascript data type is the variable in the example below? Example:\n<pre>var x = 3.14;<pre>",
    options: [
      {
        name: "Interpreted",
        isCorrect: true,
      },
      {
        name: "Compiled",
      },
      {
        name: "Both",
      },
      {
        name: "Neither",
      },
    ],
  },
  {
    id: "3",
    question:
      "Which symbol does Javascript use to concatenate strings?",
    options: [
      {
        name: "-",
        isCorrect: true,
      },
      {
        name: "*",
      },
      {
        name: "+",
      },
      {
        name: "&",
      },
    ],
  },
  {
    id: "4",
    question:
      "Which of these would you use to compare var a and var b for absolutely matching values?",
    options: [
      {
        name: "===",
        isCorrect: true,
      },
      {
        name: "==",
      },
      {
        name: "=",
      },
      {
        name: "!=",
      },
    ],
  },
  {
    id: "5",
    question:
      "Statements that make the JavaScript interpreter execute or skip other statements depending on the value of an expression.",
    options: [
      {
        name: "Loops",
      },
      {
        name: "Jumps",
      },
      {
        name: "Conditionals",
        isCorrect: true,
      },
      {
        name: "Functions",
      },
    ],
  },
  {
    id: "6",
    question:
      "Which of these keywords doesn’t belong in JavaScript reserved words according to ECMAScript 5/6 standard?",
    options: [
      {
        name: "False",
      },
      {
        name: "Typeof",
      },
      {
        name: "With",
      },
      {
        name: "Int",
        isCorrect: true,
      },
    ],
  },
  {
    id: "7",
    question:
      "In JavaScript, what is an ordered collection of values?",
    options: [
      {
        name: "Float",
      },
      {
        name: "Double",
      },
      {
        name: "Index",
      },
      {
        name: "Array",
        isCorrect: true,
      },
    ],
  },
  {
    id: "8",
    question:
      "In JavaScript, what is a set of objects that inherit properties from the same prototype object?",
    options: [
      {
        name: "Class",
        isCorrect: true,
      },
      {
        name: "Prototype object",
      },
      {
        name: "Instance",
      },
      {
        name: "Factory",
      },
    ],
  },
  {
    id: "9",
    question:
      "What is a technique for initializing the elements of an array from or based on the elements of another array or iterable object?",
    options: [
      {
        name: "Array dissemination",
      },
      {
        name: "Array description",
      },
      {
        name: "Array comprehension",
        isCorrect: true,
      },
      {
        name: "Array initialization",
      },
    ],
  },
  {
    id: "10",
    question:
      "In JavaScript, what is a composite value that allows you to store and retrieve those values by name?",
    options: [
      {
        name: "Variable",
      },
      {
        name: "Object",
        isCorrect: true,
      },
      {
        name: "Function",
      },
      {
        name: "Property",
      },
    ],
  },
  {
    id: "11",
    question:
      "JavaScript functions can be invoked in four ways, which of the following is not the right way to invoke a function?",
    options: [
      {
        name: "As functions",
      },
      {
        name: "As methods",
      },
      {
        name: "As expressions",
        isCorrect: true,
      },
      {
        name: "As constructors",
      },
    ],
  },
  {
    id: "12",
    question:
      "In JavaScript, what are those that bend the path back upon itself to repeat portions of code?",
    options: [
      {
        name: "While",
      },
      {
        name: "Loops",
        isCorrect: true,
      },
      {
        name: "For loops",
      },
      {
        name: "For each",
      },
    ],
  },
  {
    id: "13",
    question:
      "What is the statement within a function that specifies the value of invocations of that function?",
    options: [
      {
        name: "Throw",
      },
      {
        name: "Continue",
      },
      {
        name: "Increment",
      },
      {
        name: "Return",
        isCorrect: true,
      },
    ],
  },
  {
    id: "14",
    question:
      "The try block is followed by a ____ clause, which is a block of statements that are invoked when an exception occurs anywhere within the try block.",
    options: [
      {
        name: "Trap",
      },
      {
        name: "Catch",
        isCorrect: true,
      },
      {
        name: "Capture",
      },
      {
        name: "Try",
      },
    ],
  },
  {
    id: "15",
    question:
      "Which one in the following is the right way to create an object in JavaScript?",
    options: [
      {
        name: "var empty =  [ ];",
      },
      {
        name: "var book = { “title:“author”: “name”: “David” };",
      },
      {
        name: "var book = { “main title”: “JavaScript”, author: { name: “David” } };",
        isCorrect: true,
      },
      {
        name: "var book = { “main title”, author: { name: “David” } };",
      },
    ],
  },
  {
    id: "16",
    question:
      "The values passed in to a javascript function are called:",
    options: [
      {
        name: "Parameters",
        isCorrect: true,
      },
      {
        name: "Values",
      },
      {
        name: "Extensions",
      },
      {
        name: "Traits",
      },
    ],
  },
  {
    id: "17",
    question:
      "A variable that is available throughout the code and has no scope is called a:",
    options: [
      {
        name: "Parameter",
      },
      {
        name: "Constant",
      },
      {
        name: "Global",
        isCorrect: true,
      },
      {
        name: "Namespace",
      },
    ],
  },
  {
    id: "18",
    question:
      "A reserved keyword that protects functions and variables from conflicting if another function or variable is declared with the same name is called a:",
    options: [
      {
        name: "Global",
      },
      {
        name: "Namespace",
        isCorrect: true,
      },
      {
        name: "Class",
      },
      {
        name: "Method",
      },
    ],
  },
  {
    id: "19",
    question:
      "A javascript string’s length can be counted with this library method:",
    options: [
      {
        name: "index()",
      },
      {
        name: "subStr()",
      },
      {
        name: "size()",
      },
      {
        name: "length()",
        isCorrect: true,
      },
    ],
  },
  {
    id: "20",
    question:
      "A keyword used to refer to an object from where it is called:",
    options: [
      {
        name: "$",
      },
      {
        name: "this",
        isCorrect: true,
      },
      {
        name: "obj",
      },
      {
        name: "var",
      },
    ],
  },
  {
    id: "21",
    question:
      "A variable or object that has no value will return as:",
    options: [
      {
        name: "empty",
      },
      {
        name: "null",
        isCorrect: true,
      },
      {
        name: "void",
      },
      {
        name: "blank",
      },
    ],
  },
  {
    id: "22",
    question:
      "A javascript statement that tests for matching cases is called a:",
    options: [
      {
        name: "boolean",
      },
      {
        name: "if/else statement",
      },
      {
        name: "switch statement",
        isCorrect: true,
      },
      {
        name: "case statement",
      },
    ],
  },
  {
    id: "23",
    question:
      "Which of the following is a valid array creation statement?",
    options: [
      {
        name: "var arr = [];",
      },
      {
        name: "var arr = [4,2,5,9,1];",
      },
      {
        name: "var arr = new Array(6,2,5,3,7,8,2);",
      },
      {
        name: "All of the above.",
        isCorrect: true,
      },
    ],
  },
  {
    id: "24",
    question:
      "Which of the following is a valid object creation statement?",
    options: [
      {
        name: "var obj = {}",
      },
      {
        name: "var obj = {fname:”John”,lname:”Doe”,dob:”01/01/1990”}",
      },
      {
        name: "A and B",
        isCorrect: true,
      },
      {
        name: "None of the above.",
      },
    ],
  },
  {
    id: "25",
    question:
      "What is the syntax for ‘not equal’ in Javascript?",
    options: [
      {
        name: "!=",
        isCorrect: true,
      },
      {
        name: "!==",
      },
      {
        name: "!===",
      },
      {
        name: "!",
      },
    ],
  },
  {
    id: "26",
    question:
      "Which statement will return true if the value of var x is false?",
    options: [
      {
        name: "if(!x){ return true}",
        isCorrect: true,
      },
      {
        name: "if(x!=”false”){ return true}",
      },
      {
        name: "if(x is not true){ return true}",
      },
      {
        name: "None of the above",
      },
    ],
  },
  {
    id: "27",
    question:
      "Which syntax is correct for an increment operation in Javascript?",
    options: [
      {
        name: "+",
      },
      {
        name: "**",
      },
      {
        name: "&&",
      },
      {
        name: "++",
        isCorrect: true,
      },
    ],
  }, 
  {
    id: "28",
    question:
      "Which string operation will return “Re” from the string “Do Re Me Fa So La Ti Do” (the value of the variable named str below)?",
    options: [
      {
        name: "var re = str.substr(2);",
      },
      {
        name: "var re = str.slice(4,5);",
      },
      {
        name: "var re = str.indexOf(“Re”);",
      },
      {
        name: "var re = str.substr(3,4);",
        isCorrect: true,
      },
    ],
  },
  {
    id: "29",
    question:
      "What is the syntax for a single line comment in Javascript?",
    options: [
      {
        name: "<!-- comment -->",
      },
      {
        name: "// comment",
      },
      {
        name: "-- comment",
        isCorrect: true,
      },
      {
        name: "/* comment */",
      },
    ],
  },
  {
    id: "30",
    question:
      "What is the syntax for a multi line comment block in Javascript?",
    options: [
      {
        name: "<!-- comment block -->",
      },
      {
        name: "// comment block",
      },
      {
        name: "-- comment block",
      },
      {
        name: "/* comment block */",
        isCorrect: true,
      },
    ],
  },
];
