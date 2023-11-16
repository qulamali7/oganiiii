
const btn = document.querySelector(".accordion-title");
const text = document.querySelector(".text");

btn.addEventListener("click",function () {
    text.classList.toggle("active")  
})

// btn.forEach((element, i) => {
//     element.addEventListener("click", function () {
//       text[i].classList.toggle("active");
//     });
//   });