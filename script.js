const buttons = document.querySelectorAll(".button")
// console.log(buttons)
const body = document.querySelector('body');
buttons.forEach( function(button){
console.log(buttons)
button.addEventListener('click',function (e){
console.log(e)
console.log(e.target)
if(e.target.id === "orange"){
    body.style.backgroundColor = e.target.id  // here we can give hardcode value like = orenge , green any color.

    }
    if(e.target.id === "green"){
        body.style.backgroundColor = e.target.id
    }

    if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "pink"){
        body.style.backgroundColor = e.target.id
    }
});
});


 