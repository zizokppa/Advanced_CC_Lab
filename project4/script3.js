document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    let index = 0;

    function fadeInNextImage() {
        if (index < images.length) {
            images[index].classList.remove("hidden");
            images[index].style.opacity = 1;
            index++;
            setTimeout(fadeInNextImage, 1000); // Adjust the delay (in milliseconds) between each image
        }
    }

    fadeInNextImage();
});

document.addEventListener("DOMContentLoaded", function() {
    const externalLinkImg = document.getElementById("externalLinkImg");

    externalLinkImg.addEventListener("click", function() {
        window.location.href = "page1.html"; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const page2LinkImg = document.getElementById("page2LinkImg");

    page2LinkImg.addEventListener("click", function() {
        window.location.href = "page2.html"; 
    });
});
