// alert();

// getElementById
const display = document.getElementById("display");
const t1List = document.getElementsByClassName("t1");
const btnDisplay = document.getElementById("btnDisplay");
const btnList = document.getElementsByClassName("btnColor");

// innerHTML
// innerText
// value
// style
// this

for(let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function() {
        this.style.backgroundColor = this.value;
    })
}

display.addEventListener('click', function() {
    this.style.backgroundColor = "red";
})

btnDisplay.addEventListener('click', function() {
    this.style.backgroundColor = "red";
})

//addEventListener
// two arguments
btnDisplay.addEventListener('click', function() {
    for(let i = 0; i < t1List.length; i++) {
    t1List[i].innerText = i;

}
});


let age = 50;
// const allDomObjects = document.querySelectorAll("*");

display.innerText = t1List.length;



// variable types
// const - final - once assigned cant be reassigned
// let -

// var isACar = false;

// var