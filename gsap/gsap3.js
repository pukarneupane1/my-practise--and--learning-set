// gsap.to("#box",{
//     x:800,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor : "red"
// })


// gsap.from("#page1 #box",{
// scale: 0,
// duration: 1,
// rotate: 360,
// })
// gsap.from("#page2 #box",{
// scale: 0,
// duration: 1,
// rotate: 360,
// scrollTrigger:{
//     trigger: "#page2 #box",
//     scroller : "body",
//     markers : true,
//     start : "top 60%",
//     end : "top 30%" , 
//     scrub : 2 ,/*it sets our elemnent between to scroller start and scroller end , we can give this value to 1 to 5 or true or false , 5 wiill be so smooth */
//     pin: true

// }
// })
// gsap.from("#page3 #box",{
// scale: 0,
// duration: 1,
// rotate: 360,
// })

gsap.to("#page2 h1",{
    transform: "translate(-190%,0)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin:true
    }
})