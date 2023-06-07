let active = 3;

let mncircels = document.querySelectorAll(".mncircle")
let sec = document.querySelectorAll(".sec")

gsap.to(mncircels[active-1], {
  opacity: .5
})

gsap.to(sec[active-1], {
  opacity: 1
})

mncircels.forEach(function(val, index){
  val.addEventListener("click", function(){
    gsap.to("#circle", {
      rotate: (3-(index+1))*10,
      ease: Expo.easeInOut,
      duration: 1
    })
     
    greyout()
    gsap.to(this, {
      opacity: .5
    })

    gsap.to(sec[index], {
      opacity: 1
    })
  })
})

function greyout(){
  gsap.to(mncircels, {
    opacity: .08
  })

  gsap.to(sec, {
    opacity: .4
  })
}

gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2
})