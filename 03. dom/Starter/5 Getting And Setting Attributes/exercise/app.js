// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const aone = document.querySelector(".a-one");
console.log(aone.getAttribute("href"));

const atwo = document.querySelector(".a-two");
console.log((atwo.href = "https://www.udemy.com"));
