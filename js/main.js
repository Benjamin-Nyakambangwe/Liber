//DOM Elememts
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//Show Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
   //hour = hour % 12 || 12;

    //Output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// addzero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('./morningg.jpg')";
        greeting.textContent = 'Hello There, ';
    }else if(hour < 18) {
        //AfterNoon
        document.body.style.backgroundImage = "url('./afternoonn.jpg')";
        greeting.textContent = 'Hello There, ';
    }else {
        //Evening
        document.body.style.backgroundImage = "url('./eveningg.jpg')";
        greeting.textContent = 'Hello There, ';
    }
}

//Get Name
function getName(){
    if(localStorage.getItem('name') == null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set name
function setName(e) {
    if(e.type == 'keypress'){
        // make sure enter is presed
        if(e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}
//Get focus
function getFocus(){
    if(localStorage.getItem('focus') == null) {
        focus.textContent = '[Enter Focus]';
    }else {
        name.textContent = localStorage.getItem('focus');
    }
}

//Set Focus
function setFocus(e) {
    if(e.type == 'keypress'){
        // make sure enter is presed
        if(e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
