// ============================================
//   Creating the portfolio tabed component
// ============================================
const p_btns = document.querySelector(".p_btns");
const p_btn = document.querySelectorAll(".p_btn");
const p_img_elem = document.querySelectorAll(".img_overlay");






// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Creating scroll up button

const heroSection = document.querySelector(".section_hero")
const footerElem = document.querySelector(".section_footer");

const scroollelement = document.createElement("div");
scroollelement.classList.add("scrolltop_style");
scroollelement.innerHTML = `<ion-icon name="caret-up-circle-outline" class="scroll_top"></ion-icon>`;

footerElem.after(scroollelement);

const scrolltop = () => {
  heroSection.scrollIntoView({ behaviour: "smooth" });
}

scroollelement.addEventListener("click", scrolltop);