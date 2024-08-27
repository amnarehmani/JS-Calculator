let input = document.getElementById('result'); 
let buttons = document.querySelectorAll('button'); 

let str = "";
let arr = Array.from(buttons);
arr.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if (event.target.innerHTML == "=") {
            str = eval(str); 0
            input.value = str;
        }
        else if (event.target.innerHTML == "AC") {
            str = "";
            input.value = str;
        }
        else if (event.target.innerHTML == "DEL") {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        else {
            str += event.target.innerHTML;
            input.value = str;
        }
    });
});