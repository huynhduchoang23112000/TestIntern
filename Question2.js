class Stack {
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

    constructor() {
        this.items = ["huynh", "duc", "hoang"];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) return;
        return this.items.pop();
    }
    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length == 0;
    }

    find(value) {
        return this.items.find(element => element == value);
    }
}
var stack = new Stack();
stack.size();
stack.pop();
stack.isEmpty();
stack.push("linh");
stack.find("linh");
console.log(stack.size());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.find("duc"));
console.log(stack.printStack());