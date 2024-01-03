console.log("✅ Connected")

// motion blur for the side menu https://css-tricks.com/how-to-create-a-realistic-motion-blur-with-css-transitions/

let burger = document.getElementById("burger")
let menu = document.getElementById("sideMenu")
let main = document.getElementById("main")
let body = document.getElementById("body")
// BugHunter =>  Dimitri
burger.addEventListener("click", () => {
    if (menu.getAttribute("data-toggle") == "closed") {
        menu.setAttribute("data-toggle", "open")
        menu.style.right = "0"
        main.classList.toggle("blur")
        menu.classList.toggle("blur")
        
        // body.classList.toggle("no-scroll")
        console.log("opened")

    } else if (menu.getAttribute("data-toggle") =="open") {
        menu.setAttribute("data-toggle", "closed")
        menu.style.right = "-100%"
        main.classList.toggle("blur")
        menu.classList.toggle("blur")
        // body.classList.toggle("no-scroll")
        console.log("closed")

    }
})