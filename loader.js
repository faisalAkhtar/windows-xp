let x = 1;
let int = setInterval( ()=> {
    if(x==document.querySelector(".loader").offsetWidth) x = 0
    x += 1
    document.querySelectorAll(".loader span")[0].style.marginLeft = x + "px"
}, 10);
