
// JAI SHREE RAM


function show(data) {
    console.log(data)
}

function select(elem) {
    return document.querySelector(elem)
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })()
}

function Loader() {

    let tl = gsap.timeline()

    window.addEventListener("load", function () {
        tl.to(".loader", {
            opacity: 0,
            ease: Power4,
            duration: 1,
            delay: 1.3
        })
        tl.to(".loader", {
            display: "none",
            duration: 0
        })
        tl.to(".main", {
            display: "block"
        }, 'b')
        tl.to(".main", {
            opacity: 1,
            duration: 2
        })

    })


}

function textRevealAnimation(divname) {

    let tl = gsap.timeline()
    let clutter = ""

    document.querySelector(divname)
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`;
            clutter += `<span>${e}</span>`;
        });

    gsap.set(divname, { opacity: 1 });


    document.querySelector(divname).innerHTML = clutter;


    tl.from(`${divname} span`, {
        opacity: 0,
        ease: "power4",
        stagger: 0.03,
        OnComplete: function () {
            clutter = ``
        }
    });

}

function exciteRevealAnimation() {
    let tl = gsap.timeline()
    let clutter = ""


    document.querySelector(".exciteText")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`;
            clutter += `<span>${e}</span>`;
        });

    gsap.set(".exciteText", { opacity: 1 });


    document.querySelector(".exciteText").innerHTML = clutter;


    tl.from(".exciteText span", {
        delay: 3.5,
        opacity: 0,
        ease: "power4",
        stagger: 0.03,
        OnComplete: function () {
            clutter = ``
        }
    });


    tl.to(".exciteOverlay", {
        delay: .7,
        width: "0%",
        ease: Expo.easeInOut,
        duration: 1
    })
    tl.to(".excite", {
        boxShadow: "0 0 100px #5cfc54de",
        ease: Expo.easeOut,
        duration: .1,
        OnComplete: function () {
            gsap.set(".main", {
                pointerEvents: "all"
            })
        }
    })


}

function agreeDivMoveRandomAnimation() {


    function ifNoPressed() {
        let no = document.querySelector(".no")
        let heading = document.querySelector(".agreeDiv h1")
        var isMinus = false // the decartion  of isMinus variable as var is neccessary as in the moveRandom func isMinus becomes local scope so we have used the isMinus as a global variable

        function moveRandom() {

            let xVal = Math.random() * 100
            let yVal = Math.random() * 400


            if (!isMinus) {
                isMinus = true
                gsap.to(no, {
                    x: -xVal,
                    y: -yVal,
                    ease: Power4,
                    duration: .2
                })
            } else {
                isMinus = false

                gsap.to(no, {
                    x: xVal,
                    y: yVal,
                    ease: Power4,
                    duration: .2
                })
            }
        }

        no.addEventListener("click", function () {
            moveRandom()
        })
        no.addEventListener("mouseover", function () {
            moveRandom()
        })
    }

    function ifYesPressed() {
        let yes = document.querySelector(".yes")
        let content = document.querySelector(".yesContent")


        let tl = gsap.timeline()

        yes.addEventListener("click", function () {
            tl.set(content, { opacity: 0, display: "none" })

            tl.to(".page3", {
                opacity: 0,
                ease: Power4,
                duration: .8
            })

            tl.set(".page3", { display: "none" })
            tl.set(content, { display: "flex" })

            tl.to(content, {
                opacity: 1,
                ease: Power4,
                duration: 1.5
            })

            tl.to(content, {
                delay: 1.5,
                OnComplete: function () {
                    select(".yesContent").innerHTML += `
                    <div class="watermark text-[skyblue] flex-col hidden opacity-0 absolute right-0 w-full bottom-0 px-5 py-5 text-3xl justify-center items-end text-right" style="text-shadow: 0 0 10px skyblue;">
                        <div class="flex gap-5">
                            <div class="instaLink text-[blue] text-2xl font-['serif']" style="text-decoration: underline; text-shadow: none;"><a href="https://instagram.com/arpit_nikhade">Instagram Profile</a></div>
                            <div class="githubLink text-[blue] text-2xl font-['serif']" style="text-decoration: underline; text-shadow: none;"><a href="https://github.com/arpitbhau">Github Profile</a></div>
                        </div>
                    </div>`
                    select(".yesContent .watermark").innerHTML += `Created and Designed by Arpit 😐`

                    let wtl = gsap.timeline()

                    wtl.set(".watermark", { display: "flex" })

                    wtl.to(".watermark", {
                        opacity: 1,
                        duration: .5,
                        ease: Power4
                    })
                }
            })


        })


    }

    ifYesPressed()
    ifNoPressed()


}

function MainAnimation() {



    window.addEventListener("load", function () {


        exciteRevealAnimation()

        let tl = gsap.timeline()

        // Setting the Opacity of Text to 0

        gsap.set(".revealText", { opacity: 0 })

        let animating = false

        document.querySelector(".excite").addEventListener("click", function () {

            if (!animating) {

                animating = true

                // Making ExciteConatainer Disappear
                tl.to(".exciteContainer", {
                    opacity: 0,
                    ease: Power4,
                    duration: .5
                })
                tl.to(".exciteContainer", {
                    display: "none"
                })

                // Showing the First Page

                gsap.set(".page", { opacity: 0, display: "flex" })

                tl.to(".page1", {
                    opacity: 1,
                    duration: 1,
                    ease: Power4
                })

                tl.to(".page1", {
                    OnComplete: function () {
                        textRevealAnimation(".p1Text1")
                    }
                })

                tl.to(".page1", {
                    delay: 1,
                    OnComplete: function () {
                        textRevealAnimation(".p1Text2")
                    }
                })

                tl.to(".heart", {
                    delay: 3,
                    transform: "scale(150)",
                    ease: Expo.easeInOut,
                    duration: 5
                })

                tl.to(".page1", {
                    delay: .5,
                    opacity: 0,
                    duration: 1,
                    ease: Power4
                }, 'page12page2Shift')

                tl.to(".page1", {
                    display: "none",
                    duration: 1.2
                }, 'page12page2Shift')

                // page2 animation


                tl.to(".page2", {
                    opacity: 1,
                    ease: Power4,
                    duration: .5 , 
                    OnComplete: function() {
                        gsap.set(".main" , {overflow: "auto"})
                        gsap.set(".forSomeTimeHidden" , {display: "none"})
                    }
                })
                
                select(".page2 .nextBtn").addEventListener("click", function () {
                    function page3AndRestAnimation() {
                        // agreediv Animation
                        
                        gsap.set(".main" , {overflow: "hidden"})
                        tl.set(".forSomeTimeHidden" , {display: "flex"})

                        tl.to(".page2" , {
                            opacity: 0 , 
                            ease: Power4  ,
                            duration: .8
                        })

                        tl.set(".page2" , {display: "none"})

                        tl.to(".page3", {
                            opacity: 1,
                            duration: 1,
                            ease: Power4
                        })

                        tl.to(".page3", {
                            delay: .5,
                            OnComplete: function () {
                                textRevealAnimation(".agreeDiv h1")
                            }
                        })

                        // showing the btns

                        tl.to(".yOverlay", {
                            delay: 1.2,
                            width: 0,
                            ease: Power4,
                            duration: .4
                        }, "agreebtn")

                        tl.to(".nOverlay", {
                            delay: 1.2,
                            width: 0,
                            ease: Power4,
                            duration: .4
                        }, "agreebtn")

                        // putting shadows

                        tl.to(".yes", {
                            boxShadow: "0 0 80px red",
                            duration: 1
                        }, "s")

                        tl.to(".no", {
                            boxShadow: "0 0 60px skyblue",
                            duration: 1
                        }, "s")
                    }

                    page3AndRestAnimation()
                })



            }

        })


    })


}



Loader()
MainAnimation()
agreeDivMoveRandomAnimation()
loco()