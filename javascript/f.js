   let operation = prompt("Enter operation (+, -, *, /):");
        let num1 = Number(prompt("Enter first number:"));
        let num2 = Number(prompt("Enter second number:"));

        let result;
        if (operation === "+") {
            result = num1 + num2;
        } else if (operation === "-") {
            result = num1 - num2;
        } else if (operation === "*") {
            result = num1 * num2;
        } else if (operation === "/") {
            result = num1 / num2;
        } else {
            console.log("Invalid operation!");
        }

        console.log("Result:", result);

        
        document.getElementById("show").innerHTML =
        `Operation: ${operation} <br>  first number: ${num1} <br> second number: ${num2}`;
        let mark= Number(prompt("Enter your mark:"));;
        let resultt;
        if(mark<50){
            resultt="fail";
        }
       else if(mark>=50 && mark<60){
            resultt="D"
        }
         else if(mark>=60 && mark<70){
            resultt="C"
        }
         else if(mark>=70 && mark<80){
            resultt="B"
        }
         else if(mark>=80 && mark<90){
            resultt="A"
        }
   else  if(mark>=90 && mark<=100){
            resultt="A+"
        }
        else
        {
            resultt="invail mark"
        }
        console.log(resultt);
        
        
        let r = prompt("Enter the radius:");

r = Number(r);

let circumference = 2 * Math.PI * r;

alert("The circumference is: " + circumference);
 let x = prompt("Enter value for x:");
        let y = prompt("Enter value for y:");
        x = Number(x);
        y = Number(y);

        let message;

        if (x > y) {
            message = "Hello World";
        } else {
            message = "Goodbye";
        }

        alert(message);

        console.log(message);

        document.getElementById("result").innerHTML = message;
        /*
        // ===========================
// 1️⃣ For, While, Do…While Loops
// ===========================

console.log("---- For Loop ----");
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

console.log("---- While Loop ----");
let j = 0;
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;
}

console.log("---- Do...While Loop ----");
let k = 0;
do {
    console.log("Do...While loop iteration: " + k);
    k++;
} while (k < 5);

// ===========================
// 2️⃣ Functions
// ===========================

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Abdullah"));

// Function with two numbers
function sum(a, b) {
    return a + b;
}
console.log("Sum: " + sum(5, 10));

// ===========================
// 3️⃣ Arrays
// ===========================

let fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits array:", fruits);

console.log("Array length:", fruits.length);
console.log("Array toString():", fruits.toString());

fruits.pop();
console.log("After pop():", fruits);

fruits.push("Mango");
console.log("After push():", fruits);

fruits.shift();
console.log("After shift():", fruits);

fruits.unshift("Strawberry");
console.log("After unshift():", fruits);

console.log("Array join():", fruits.join(" - "));

delete fruits[1];
console.log("After delete:", fruits);

let moreFruits = ["Kiwi","Pineapple"];
console.log("Array concat():", fruits.concat(moreFruits));

let multiArr = [1,[2,3],[4,5]];
console.log("Array flat():", multiArr.flat());

fruits.splice(1,1,"Blueberry");
console.log("Array splice():", fruits);

console.log("Array slice():", fruits.slice(0,2));

console.log("Array indexOf():", fruits.indexOf("Mango"));
console.log("Array includes():", fruits.includes("Mango"));

let numbers = [1,2,3,4,5];
console.log("Array find():", numbers.find(n => n>3));

let unsorted = [3,1,4,2];
console.log("Array sort():", unsorted.sort());
console.log("Array reverse():", unsorted.reverse());

// ===========================
// 4️⃣ Objects
// ===========================

let person = {
    name: "Abdullah",
    age: 22,
    city: "Amman"
};

console.log("Person object:", person);
console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));

// ===========================
// 5️⃣ String Methods
// ===========================

let text = "  Hello World  ";
console.log("Original text:", `"${text}"`);

console.log("trim():", `"${text.trim()}"`);
console.log("trimStart():", `"${text.trimStart()}"`);
console.log("trimEnd():", `"${text.trimEnd()}"`);

console.log("padStart():", "5".padStart(3,"0"));
console.log("padEnd():", "5".padEnd(3,"0"));

console.log("charAt(1):", text.charAt(1));
console.log("charCodeAt(1):", text.charCodeAt(1));

console.log("split():", "a,b,c".split(","));
console.log("length:", text.length);

console.log("slice():", text.slice(2,7));
console.log("substring():", text.substring(2,7));
console.log("substr():", text.substr(2,5));

console.log("replace():", "Hi Hi".replace("Hi","Hello"));
console.log("replaceAll():", "Hi Hi".replaceAll("Hi","Hello"));

console.log("toUpperCase():", text.toUpperCase());
console.log("toLowerCase():", text.toLowerCase());

console.log("concat():", "Hello".concat(" ","World"));
console.log("indexOf():", text.indexOf("World"));
console.log("lastIndexOf():", text.lastIndexOf("l"));

console.log("search():", text.search("World"));
console.log("match():", "Hello".match(/l/g));
console.log("matchAll():", [... "Hello".matchAll(/l/g)]);

console.log("includes():", text.includes("Hello"));
console.log("startsWith():", text.startsWith("  He"));
console.log("endsWith():", text.endsWith("ld  "));

        */