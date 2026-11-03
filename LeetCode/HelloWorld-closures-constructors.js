/**Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World". */

/**
 * return {Function}
 */
let args
const createHelloWorld = function() {
    
    return function(...args) {
        return 'Hello World';
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

//A closure is a feature in JavaScript where an inner function remembers and has access to variables from its outer scope, even after the outer function has finished executing.
/**
>>>HOW IT WORKS<<<

• Closures: The createHelloWorld function creates an outer scope and returns an inner anonymous function.
• Handling Arguments: The ...args syntax uses the rest parameter. This allows the inner function to accept any number of inputs (or none at all) without throwing errors, ensuring it behaves correctly no matter how it is invoked.
• Consistent Return: The inner function ignores those inputs entirely and always outputs the exact string "Hello World". */