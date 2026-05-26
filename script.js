// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1500);

});


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Typing Effect

const text = [
    "AI & DATA SCIENCE STUDENT",
    "PYTHON DEVELOPER",
    "MACHINE LEARNING ENTHUSIAST",
    "NLP LEARNER"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1200);

    } else {

        setTimeout(type, 100);

    }

})();


// Reveal Animation

window.addEventListener("scroll", reveal);

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

}


// Custom Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// Scroll Progress Bar

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});