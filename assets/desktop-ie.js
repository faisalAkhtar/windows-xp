let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))
}, 60000);

document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
    }
})

document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}

document.querySelector(".faisal-akhtar").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://faisalakhtar.github.io/")
}

document.querySelector(".my-computer").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://github.com/faisalAkhtar/")
}

document.querySelector(".my-network").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://twitter.com/faisallakhtarr/")
}

document.querySelector(".note-pad").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
    document.querySelector(".readme").classList.add("active")
    document.querySelector(".window").classList.remove("minimized")
}

document.querySelector("textarea").value = "<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Hello World!</h1>\n\n<h2>Features:</h2>\n<ul>\n <li>Desktop icons are clickable. Double clicking them takes you to some of my links (github, twitter, portfolio).</li>\n <li>Time in system-tray is your system's time.</li>\n <li>This window is draggable, closable, minimizable and maximizable. Try it.</li>\n <li>The opened tabs in taskbar also take you to my links, same as the icons.</li>\n</ul>\n\n</body>\n<html>"


dragWindow(document.querySelector(".window"));
function dragWindow(elmnt) {
var offset = [0,0];
var isDown = false;

 elmnt.addEventListener('mousedown', function(e) {
                  event.preventDefault();
                  event = event || window.event; // IE-ism

                  // If pageX/Y aren't available and clientX/Y are,
                  // calculate pageX/Y - logic taken from jQuery.
                  // (This is to support old IE)
                  if (event.pageX == null && event.clientX != null) {
                      eventDoc = (event.target && event.target.ownerDocument) || document;
                      doc = eventDoc.documentElement;
                      body = eventDoc.body;
            
                      event.pageX = event.clientX +
                        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                        (doc && doc.clientLeft || body && body.clientLeft || 0);
                      event.pageY = event.clientY +
                        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                        (doc && doc.clientTop  || body && body.clientTop  || 0 );
                  }
          isDown = true;
          offset = [
              elmnt.offsetLeft - e.pageX,
              elmnt.offsetTop - e.pageY
          ];
      }, true);
  
        document.addEventListener('mousemove', function(e) {
                    event.preventDefault();
                    event = event || window.event; // IE-ism

                    // If pageX/Y aren't available and clientX/Y are,
                    // calculate pageX/Y - logic taken from jQuery.
                    // (This is to support old IE)
                    if (event.pageX == null && event.clientX != null) {
                        eventDoc = (event.target && event.target.ownerDocument) || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
              
                        event.pageX = event.clientX +
                          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                          (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = event.clientY +
                          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                          (doc && doc.clientTop  || body && body.clientTop  || 0 );
                    }

            if (isDown) {
                elmnt.style.left = (e.pageX + offset[0]) + 'px';
                elmnt.style.top  = (e.pageY + offset[1]) + 'px';
                event.currentTarget.removeEventListener();
            }
        }, true);

        document.addEventListener('mouseup', function() {
              isDown = false;
        }, true);
}