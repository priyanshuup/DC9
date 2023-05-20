function pg() {

  // let mm = ScrollTrigger.matchMedia({

    // "(max-width:995px)": function(){
        // #for desktop only 
  gsap.to(".homeswiper", {
    scrollTrigger: {
      trigger: "#homepage",
      // start:"top 0%",
      // end:"top 80%",
      pin: true,
      //    markers:true,
      scrub: true,
    },
    // position:"relative",
    height: "85vh",
    width: "85vw",
    duration: 10,
  });
  gsap.to("#awardsfree>.awardstext", {
    scrollTrigger: {
      trigger: "#awardsfree",
      // start:"top 0%",
      // end:"top 80%",
      pin: true,
      //    markers:true,
      scrub: true,
    },
    // position:"relative",
    // top: "-70%",
    duration: 10,
  });

  gsap.to("section>#bubblepage", {
    scrollTrigger: {
      trigger: "#awardsfree",
      start: "top 0%",
      // end:"top 80%",
      pin: true,
      //    markers:true,
      scrub: true,
    },
    // position: "absolute",
    // stagger:0.5,
    // top:"-100%",
    duration: 10,
  });
//   gsap.to("#services>.servicebox", {
//     scrollTrigger: {
//       trigger: "section #services",
//       start: "top 0%",
//       // end:"top 0%",
//       pin: true,
//       markers: true,
//       scrub: true,
//     },
//     // position:"relative",
//   });

  gsap.to("#insideservices",{
    scrollTrigger: {
        trigger: "section #services",
      start: "top 0%",
      // end:"top 0%",
      pin: true,
      // markers: true,
      scrub: true,
    },
    height: "85vh",
    width: "85vw",
    duration: 10,
  })

  gsap.to("#aboutussecondcol>.abtrightimg>img",{
    scrollTrigger: {
      trigger: "#abtpage",
    start: "top 20%",
    // end:"top 0%",
    // pin: true,
    // markers: true,
    scrub: true,
  },
  right: "60%",
  width: "150%",
  duration: 10,
  })
  gsap.from(".abtthirddiv>.abtthirdleftimg>img",{
    scrollTrigger: {
      trigger: ".abtsecondleftimg",
    start: "top 50%",
    // end:"top 0%",
    // pin: true,
    // markers: true,
    scrub: true,
  },
  right: "30%",
    // width: "150%",
  duration: 10,
  })
// }})


}
pg();
