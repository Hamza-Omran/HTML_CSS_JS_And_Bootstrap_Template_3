// === Scroll Go Up Button ===
let button = document.getElementById("up");

window.addEventListener("scroll", () => {
    scrollTimeout = setTimeout(() => {
        window.scrollY > window.screen.height? button.classList.add("visible") : button.classList.remove("visible");
    }, 1000); 
});

button.addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
})

// === Progress Animation On Scrolling ===
let els = document.querySelectorAll(".percent");


// === Numbers Increasing On Scroll ===
let stats = document.querySelectorAll(".number");
let counted = false;

function count(el, sign="") {
    let counter = 0;
    let inter = setInterval(() => {
    counter++;
    el.textContent = `${counter}${sign}`;
    if(counter == +el.dataset.to){
        clearInterval(inter);
    }
    }, 2000 / +el.dataset.to); 
}

window.onscroll = function (){
    if(window.scrollY >= document.getElementById("skills").offsetTop){
        els.forEach(el => {
            el.style.width = el.getAttribute("percentage") + "%";
        });
    }

    if((window.scrollY >= document.getElementById("stats").offsetTop - 200) && !counted){
        stats.forEach((el, i) => {
            if(i == 3)
                count(el, "K")
            else
                count(el)
            });
        counted = true;
    }
}


// === Time Counter ===
let days = document.querySelector(".time .days");
let hours = document.querySelector(".time .hours");
let minutes = document.querySelector(".time .minutes");
let seconds = document.querySelector(".time .seconds");

let counter = setInterval(()=>{
    
    let d = +days.innerHTML;
    let h = +hours.innerHTML;
    let m = +minutes.innerHTML;
    let s = +seconds.innerHTML;
    
    s++;

    if(s == 60) {
        s = 0;
        m++;
    }
    if(minutes.innerHTML == 60){
        m = 0;
        h++;
    }
    if(h == 24){
        h = 0;
        d++;
    }

    days.innerHTML = d < 10? `0${d}`: d;
    hours.innerHTML = h < 10? `0${h}`: h;
    minutes.innerHTML = m < 10? `0${m}`: m;
    seconds.innerHTML = s < 10? `0${s}`: s;
}, 1000);