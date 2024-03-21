function locomotiveGsap() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ?
                locoScroll.scrollTo(value, 0, 0) :
                locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".smooth-scroll").style.transform
          ? "transform"
          : "fixed"*/
    });

}
locomotiveGsap()

function navAnimation() {
    gsap.to(".navleft svg", {
        transform: "translateY(-80px)",
        scrollTrigger: {
            trigger: ".navleft svg",
            scroller: "#main",
            start: "top -25%",
            scrub: 1
        }
    })

    gsap.to(".navright .links", {
        y: -30,
        opacity: 0,
        scrollTrigger: {
            trigger: ".navright .links",
            scroller: "#main",
            start: "top -25%",
            scrub: 1
        }
    })
}

function loadingAnimation() {
    gsap.from(".page1 h1", {
        y: 50,
        opacity: 0,
        delay: .5,
        duration: 1.5,
        stagger: .3
    })
}

function cursorMove() {
    document.addEventListener('mousemove', (dets) => {
        gsap.to("#cursor", {
            top: dets.y,
            left: dets.x
        })
    })

    document.querySelectorAll(".pages").forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(1)'
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(0)'
            })
        })
    })

}


navAnimation()
cursorMove()
loadingAnimation()