let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true,year:'numeric',month:'long',day:'numeric' }).format(new Date()) )

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true,year:'numeric',month:'long',day:'numeric' }).format(new Date()) )
}, 60000);

document.querySelector(".desktop").onclick = function() {
    document.querySelectorAll(".icon").forEach( (e)=>{
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach( (icon)=>{
    icon.onclick = function() {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach( (e)=>{
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
        // alert(this.lastElementChild.innerHTML)
    }

    /*icon.ondblclick = function() {
        alert(this.lastElementChild.innerHTML)
    }*/
})

document.querySelector(".max").onclick = function() {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function() {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function() {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function() {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}

document.querySelector(".note-pad").ondblclick = function() {
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
}