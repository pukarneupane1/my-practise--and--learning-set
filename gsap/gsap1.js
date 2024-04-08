// /* // camelcase
// // gsap.to("#box" , {
// //     x:700,/* value = no "" */
// //     duration:2,
// //     delay:1,
// //     backgroundColor: "blue" ,/* string = "" */
// //     rotate: 360,
// //     scale: 0.5
// // })

// gsap.from("#box",{
//     x:700,
//     duration:2,
//     delay:1,
//     backgroundColor: "crimison" ,
//     rotate: 360,
//     scale: 0.5
// })
// gsap.to("h1",{
//     x:500,
//     color:"yellow",
//     duration: 2,
//     delay:1,
//     stagger:1 ,/* it means that same element will animate by taking 1sec difference */
//     repeat :2, /* if repeat is -1 then it will repeat infinite times  and 2 value will reapeat 3 times because 1 is initial and 2 is added*/
//     yoyo : true, /* it make element to come back like alternate in css */
//     markers: true

// })
// gsap.to("h2",{
//     x:500,
//     color:"purple",
//     duration: 2,
//     delay:2
// })
// gsap.to("h3",{
//     x:500,
//     color:"brown",
//     duration: 2,
//     delay: 3
// })


var tl = gsap.timeline()

tl.to("h1",{
    x:600,
    duration:1
})
tl.to("h2",{
    x:700,
    duration:1
})
tl.to("h3",{
    x:900,
    duration:1
})