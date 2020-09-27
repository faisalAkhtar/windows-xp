let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true,year:'numeric',month:'long',day:'numeric' }).format(new Date()) )

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN',{ hour:'numeric',minute:'numeric',hour12:true,year:'numeric',month:'long',day:'numeric' }).format(new Date()) )
}, 60000);
