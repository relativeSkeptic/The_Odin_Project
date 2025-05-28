import { HashMap } from "./main";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.keys());
console.log(test.values());

console.log('Size: ' + test.getSize());
console.log('Length: ' + test.length());

test.set('moon', 'silver');

console.log(test.keys());
console.log(test.values());

console.log('Size: ' + test.getSize());
console.log('Length: ' + test.length());

test.set('apple', 'green');
test.set('banana', 'pink');
test.set('carrot', 'red');
test.set('dog', 'beige');
test.set('elephant', 'white');
test.set('frog', 'purple');
test.set('grape', 'white');
test.set('hat', 'tan');
test.set('ice cream', 'brown');
test.set('jacket', 'green');
test.set('kite', 'neon');
test.set('lion', 'indigo');

console.log('Size: ' + test.getSize());
console.log('Length: ' + test.length());

console.log("Has Apple?: " + test.has("apple"));
console.log("Remove Apple?: " + test.remove("apple"));
console.log("Has Apple?: " + test.has("apple"));

console.log(test.keys());
console.log(test.values());
console.log(test.entries());