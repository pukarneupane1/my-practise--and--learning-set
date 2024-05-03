var initialPath = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var cointainer = document.querySelector("#cointainer");

cointainer.addEventListener("mousemove", function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100 `;


    gsap.to("svg path",{
        attr: {
            d:initialPath
        },
        duration: 0.3,
ease: "power3.Out",

    })
})
cointainer.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr: {
            d:finalPath
        },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",

    })
})