// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log((a.href = "www.youtube.com"));

const input = document.querySelector("input");

// input.value = "Hello";

console.log(input.value);
console.log(input.type);
// console.log((input.value = "bye"));
console.log((input.placeholder = "Enter your name"));
console.log(input.getAttribute("type"));
console.log(input.setAttribute("Placeholder", "Password"));
