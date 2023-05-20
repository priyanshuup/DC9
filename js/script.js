function createBubble() {

  const section = document.getElementById("bubblepage");
  const createElement = document.createElement("span");
  var size = Math.random() * 100;
  console.log(size);
  createElement.style.width = 10 + size + "px";
  createElement.style.height = 10 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    createElement.style.backgroundColor = bgColor;
  }

  random_bg_color();

  const app = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  console.log(app(19, 25));
  createElement.style.top = app(10, 1200) + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 10000);
}
setInterval(createBubble, 250);

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


