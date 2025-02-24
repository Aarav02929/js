// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

const h1 = document.createElement("h1");
h1.textContent = "Hello World";
console.log(h1.textContent);
const body = document.body;
body.appendChild(h1);
body.appendChild(h1);

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "I'm and li tag";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");

ul.insertBefore(newLi, firstLi);

const firstPara = document.querySelector("p");
const i = document.createElement("i");
i.textContent = "I'm an italic tag";
i.style.color = "red";
firstPara.insertAdjacentElement("beforebegin", i);
