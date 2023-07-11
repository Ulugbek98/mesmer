// const topNav = document.querySelector("#topNav");
// const elNavbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   topNav.classList.toggle("nav_on_scroll", window.scrollY > 500);
//   elNavbar.classList.toggle("goUp", window.scrollY > 500);
// });

const mobNav = document.querySelector(".navbar_list"),
  toggler = document.querySelector(".navbar_toggle"),
  bars = '<i class="fas fa-2x fa-bars"></i>',
  times = '<i class="fas fa-2x fa-times"></i>';
let openNav = !1;
openNav || ((toggler.innerHTML = bars), mobNav.classList.add("navbar_close")),
  toggler.addEventListener("click", () => {
    openNav
      ? (mobNav.classList.remove("navbar_open"),
        mobNav.classList.add("navbar_close"),
        (toggler.innerHTML = bars),
        (openNav = !1))
      : (mobNav.classList.remove("navbar_close"),
        mobNav.classList.add("navbar_open"),
        (toggler.innerHTML = times),
        (openNav = !0));
  });