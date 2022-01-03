/*=============== MENU JS ===============*/

const menu = document.querySelector(".nav__menu")
const toggle = document.querySelector(".nav__toggle")
const close = document.querySelector(".nav__close")


if(toggle) {
    toggle.addEventListener("click", ()=> {
        menu.classList.add("show-menu")
    })
}

if(close) {
    close.addEventListener("click", ()=> {
        menu.classList.remove("show-menu")
    })
}


const link = document.querySelectorAll(".nav__link");

function linkAction () {
    const menu = document.querySelector(".nav__menu")
    menu.classList.remove("show-menu")

}

link.forEach(n => n.addEventListener("click", linkAction));

/*=============== SCROOL REVEAL ===============*/

const scroll = ScrollReveal( {
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 0,

})

// after open/refresh page
scroll.reveal(".home__text, .about__text", {origin:"left"} )
scroll.reveal(".home__picture, .about__image", {origin:"right"} )
scroll.reveal(".skill__item-wrap01", {delay:150} )
scroll.reveal(".skill__item-wrap02", {delay:200} )
scroll.reveal(".skill__item-wrap03", {delay:250} )
scroll.reveal(".skill__item-wrap04", {delay:300} )
scroll.reveal(".skill__item-wrap05", {delay:350} )
scroll.reveal(".skill__item-wrap06", {delay:400} )
scroll.reveal(".portfolio__grid, header, .contact__text" )

// after breakpoint - page resize
const heroTextBox = document.querySelector(".home__text");

window.addEventListener('resize', function(event) {
    heroTextBox.removeAttribute("style");
    scroll.reveal(".home__text", {origin:"left"} )
});

/*=============== MODAL ===============*/

const modal = document.querySelector(".modal")
const previews = document.querySelectorAll(".preview")
const modalImg = modal.querySelector("img")
//const original = document.querySelector(".portfolio__img");

console.log(modal, previews)

previews.forEach((preview) => {
   preview.addEventListener('click', () => {
    modal.classList.add('open');

    const originalSrc = preview.getAttribute("data-original");
    console.log(originalSrc);
    modalImg.src = originalSrc;
   });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
})


