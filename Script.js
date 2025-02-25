// Toggle Navigation Menu
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Typed.js Animation for Text
var typed = new Typed(".input", {
    strings: ["Full Stack Developer", "Footballer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
});

// Lottie Animation
document.addEventListener('DOMContentLoaded', function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('animation-container'), 
        renderer: 'svg', 
        loop: true,
        autoplay: true, 
        path: 'Animation.json' 
    });
});

// Viewport Adjustment for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const screenWidth = window.innerWidth;
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
        metaViewport = document.createElement('meta');
        metaViewport.name = "viewport";
        document.head.appendChild(metaViewport);
    }
    if (screenWidth <= 450) { 
        metaViewport.content = "width=device-width, initial-scale=1, maximum-scale=10, minimum-scale=0.5, user-scalable=yes";
    } else {
        metaViewport.content = "width=device-width, initial-scale=1, maximum-scale=10, minimum-scale=1, user-scalable=yes";
    }
    document.body.style.transition = "transform 0.5s ease";  
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";
});
