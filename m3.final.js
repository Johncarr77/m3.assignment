document.addEventListener("DOMContentLoaded", function() {
    const name = "Dev Jc";
    const youtuber = 'NBA Highlights';

    function toUpper(text) {
        const upperCased = text.toUpperCase();
        console.log(upperCased);
    }

    toUpper(name);
    toUpper(youtuber);

    // Console log example
    function greet(name) {
        return "Hello, " + name + "!";
    }

    const greeting = greet("John");
    console.log(greeting); // Output: Hello, John!

    // addNumbers Example
    function addNumbers(a, b) {
        return a + b;
    }

    const sum = addNumbers(5, 3);
    console.log("Sum:", sum); // Output: Sum: 8

    // Get a reference to the button element by its ID
    const button = document.getElementById("myButton");

    // Function to handle the button click event
    function showAlert() {
        alert("Button clicked!");
    }

    // Add a click event listener to the button
    button.addEventListener("click", showAlert);

    // Define an object called person with properties
    const person1 = {
        firstName: "John",
        lastName: "Doe",
        birthYear: 1998,
        // Define a method to calculate age with parameters
        calculateAge: function(currentYear) {
            const age = currentYear - this.birthYear;
            return age;
        },
        // Define a method to greet with a parameter and return a greeting
        greet: function(greeting) {
            return greeting + ", " + this.firstName + " " + this.lastName + "!";
        }
    };

    // Define currentYear within the event listener's scope
    const currentYear = new Date().getFullYear();

    // Call the calculateAge method with a parameter and store the result
    const age1 = person1.calculateAge(currentYear);

    // Call the greet method with a parameter and store the result
    const greetingMessage1 = person1.greet("Hello");
    console.log(greetingMessage1); // Output: Hello, John Doe!

    console.log(person1.firstName + " is " + age1 + " years old.");

    // Define another object with multiple properties
    const person2 = {
        firstName: "Alice",
        lastName: "Smith",
        age: 25,
        email: "alice@example.com",
        isStudent: true
    };

    // Access and use the properties of person2
    console.log("First Name: " + person2.firstName);
    console.log("Last Name: " + person2.lastName);
    console.log("Age: " + person2.age);
    console.log("Email: " + person2.email);
    console.log("Is Student: " + person2.isStudent);
});
