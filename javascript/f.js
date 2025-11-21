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

        // Convert to numbers
        x = Number(x);
        y = Number(y);

        let message;

        // IF STATEMENT
        if (x > y) {
            message = "Hello World";
        } else {
            message = "Goodbye";
        }

        // Display result in ALERT
        alert(message);

        // Display result in CONSOLE
        console.log(message);

        // Display result in HTML PAGE
        document.getElementById("result").innerHTML = message;