const body = document.body;
const Colors = ["#D3A962", "#ffb457", "#9999fb", "#cffff1", "#ff96bd"];
const SubCont = document.getElementsByClassName('ColorSwitch');
const TextCont = document.getElementsByClassName('TextSwitch');

const main = body.querySelector('main');
const board = main.querySelectorAll('.dashboard')
const notes = main.querySelectorAll('.notes')
const proj = main.querySelectorAll('.projects')
const contact = main.querySelectorAll('.contact')
const pict = main.querySelectorAll('.pictures')

const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu_item");
const menuBorder = menu.querySelector(".menu_border");
let activeItem = menu.querySelector(".active");
const scroll = document.querySelector(':root');

html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
html.clientHeight, html.scrollHeight, html.offsetHeight );

const element = document.getElementsByClassName("video");
const projback = document.getElementById("main_box projects");


function clickItem(item ,index) {
    menu.style.removeProperty("--timeOut");
    for (var i = 0; i < element.length; i++) {
        element[i].setAttribute("hidden", "hidden");
    }
    
    projback.style.filter = "brightness(100%)";

    if (activeItem == item) return;
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    
    item.classList.add("active");
    activeItem = item;

    const display = main.querySelectorAll('.display')
    display.forEach(box => box.classList.remove('display'))
    
    if (index == 0) {
        board.forEach(el => el.classList.add('display'))
    }
    if (index == 1) {
        notes.forEach(el => el.classList.add('display'))
    }
    if (index == 2) {
        proj.forEach(el => el.classList.add('display'))
    }
    if (index == 3) {
        contact.forEach(el => el.classList.add('display'))
    }
    if (index == 4) {
        pict.forEach(el => el.classList.add('display'))
        /*SubCont[index].style.height = "350%";*/
    }
    for (var i = 0; i < SubCont.length; i++) {
        SubCont[i].style.backgroundColor = Colors[index];
        if (index == 4){
            SubCont[i].style.height = "450%";
        }
        else if (index == 1){
            SubCont[i].style.height = "220%";
        }
        else {
            SubCont[i].style.height = "150%";
        }
    }
    for (var i = 0; i < TextCont.length; i++) {
        TextCont[i].style.color = Colors[index];
    }
    for (var i = 0; i < scrollbars.length; i++){
        scrollbars[i].style.backgroundColor = Colors[index];
    }
    scroll.style.setProperty('--scrollColor',Colors[index]);
    
    offsetMenuBorder(activeItem, menuBorder);
}

function clickbutton(projnum){
    //window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    if (element[projnum].hidden) {
        for (var i = 0; i < element.length; i++) {
            element[i].setAttribute("hidden", "hidden");
        }
        projback.style.filter = "brightness(100%)";
        element[projnum].removeAttribute("hidden");
        projback.style.filter = "brightness(50%)";
    }
    else{
        element[projnum].setAttribute("hidden", "hidden");
        projback.style.filter = "brightness(100%)";
    }
    
}

function offsetMenuBorder(item, menuBorder) {
    const offsetActiveItem = item.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

// // Get the root element
// var r = document.querySelector(':root');

// // Create a function for getting a variable value
// function myFunction_get() {
//   // Get the styles (properties and values) for the root
//   var rs = getComputedStyle(r);
//   // Alert the value of the --blue variable
//   alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
// }

// // Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }