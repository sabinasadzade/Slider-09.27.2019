"use strict";

let image= {
name:document.querySelectorAll('.lower li')
}
console.log(image)
// let images = document.querySelectorAll('.lower li');
for (let image of images.name) {

    //set width for each li
    image.style.width = 100 / images.name.length + "%";

    image.addEventListener("click", function(){
        document.querySelector('.lower li.active').classList.remove("active");
        this.classList.add("active");

        document.querySelector('.upper img').src = 
        this.firstElementChild.src;
    });
}

document.querySelector('.rightIcon').addEventListener("click", function(){
    clearInterval(slideInterval);
    slideRight();
    
    setTimeout(function(){
        slideInterval = setInterval(function(){
            slideRight();
        }, 2000)
    }, 5000);
})

document.querySelector('.leftIcon').addEventListener("click", function(){
    clearInterval(slideInterval);
    slideLeft();

    setTimeout(function(){
        slideInterval = setInterval(function(){
            slideRight();
        }, 2000)
    }, 5000);
})

function slideRight(){
    let next = document.querySelector('.lower li.active').nextElementSibling;

    if(next == null){
        next = images[0];
    }

    document.querySelector('.lower li.active').classList.remove("active");

    next.classList.add('active');

    document.querySelector('.upper img').src = 
    next.firstElementChild.src;
}

function slideLeft(){
    let prev = document.querySelector('.lower li.active').previousElementSibling;

    if(prev == null){
        prev = images[images.length - 1];
    }

    document.querySelector('.lower li.active').classList.remove("active");

    prev.classList.add('active');

    document.querySelector('.upper img').src = 
    prev.firstElementChild.src;
}

document.addEventListener("keyup", function(e){
    if(e.keyCode == 39){
        slideRight();
    }
    else if(e.keyCode == 37){
        slideLeft();
    }
})

let slideInterval = setInterval(function(){
    slideRight();
}, 2000)