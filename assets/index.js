window.onload = function() {
    let iframe

    iframe = document.createElement("iframe");
    iframe.id = "loading"
    iframe.src = "loading.html"
    iframe.title = "Loading"
    iframe.style.display = "none"
    document.querySelector("body").prepend(iframe);

    iframe.onload = function () {
        iframe.style.display = "block"
    }

    setTimeout(() => {
        iframe = document.createElement("iframe");
        iframe.id = "welcome"
        iframe.src = "welcome.html"
        iframe.title = "Welcome"
        document.querySelector("body").prepend(iframe);

        iframe.onload = function () {
            document.querySelector("#loading").remove()
        }

        setTimeout(() => {
            iframe = document.createElement("iframe");
            iframe.id = "desktop"
            iframe.src = "desktop.html"
            iframe.title = "Desktop"
            document.querySelector("body").prepend(iframe);
    
            iframe.onload = function () {
                document.querySelector("#welcome").remove()

                var meta = document.createElement('meta');
                meta.name = "viewport";
                meta.content = "width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=no";
                document.head.appendChild(meta);
            }
        }, 2000);
    }, 5000);
};
