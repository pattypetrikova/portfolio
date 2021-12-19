/*=============== SCROOL REVEAL ===============*/

const scroll = ScrollReveal( {
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 200,

})

scroll.reveal(".home__text, .about__text", {origin:"left"} )
scroll.reveal(".home__picture, .about__image", {origin:"right"} )
scroll.reveal(".skill__item-wrap01", {delay:400} )
scroll.reveal(".skill__item-wrap02", {delay:550} )
scroll.reveal(".skill__item-wrap03", {delay:700} )
scroll.reveal(".skill__item-wrap04", {delay:850} )
scroll.reveal(".skill__item-wrap05", {delay:1000} )
scroll.reveal(".skill__item-wrap06", {delay:1150} )
scroll.reveal(".portfolio__grid, header, .contact__text" )

