// Simple stack implementation using array
function SimpleStack() {

    let stack = [];

    // Push for adding item to the top
    this.push = function(value) {
        stack[stack.length] = value;
    };

    // Pop for removing top item
    this.pop = function() {
        if (stack.length === 0) {
            return null;
        }

        let top = stack[stack.length - 1];
        stack.length = stack.length - 1;
        return top;
    };

    // Peek for view top item
    this.peek = function() {
        if (stack.length === 0) {
            return null;
        }

        return stack[stack.length - 1];
    };

    // Display stack 
    this.print = function() {
        console.log(stack);
    };
}

// Test
let s = new SimpleStack();

s.push(10);
s.push(20);
s.push(30);

s.print();     
console.log(s.pop());  
console.log(s.peek());
s.print();
