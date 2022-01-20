console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))

const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent)
h1.textContent = "헬로우 여러분 ~!"
