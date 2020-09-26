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
        iframe.id = "desktop"
        iframe.src = "desktop.html"
        iframe.title = "Desktop"
        document.querySelector("body").prepend(iframe);

        iframe.onload = function () {
            document.querySelector("#loading").remove()
        }
    }, 5000);
};
