// Navigation button
let clicked = false;

document.querySelector(".nav-btn").addEventListener("click", () => {
  if (!clicked && window.innerWidth <= 900) {
    document.querySelector(".second-nav").style.display = "block";
    document.querySelector(".navicon").src =
      "assets/svgs/fc5aa7b6-15e3-4643-92b8-314ea10037b8.svg";
    clicked = true;
  } else {
    document.querySelector(".second-nav").style.display = "none";
    document.querySelector(".navicon").src =
      "assets/svgs/a28dfc97-ebe9-4eb5-b789-bd704cdd3153.svg";
    clicked = false;
  }
});

//Scroll To Top Button

const scrollToTopBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//FAQs Drop Down

const main = document.querySelectorAll(".question-main");
main.forEach(function (eachmain) {
  const mainChildren = eachmain.children;
  const states = [false, false, false]; // Track clicked states for divs

  // Function to toggle div visibility
  function toggleDivs(visibleIndex) {
    for (let i = 1; i <= 5; i += 2) {
      // Assume the divs to be shown/hidden are at odd indices
      mainChildren[i].style.padding = i === visibleIndex ? "15px" : "0px";
      mainChildren[i].style.height =
        i === visibleIndex ? `${mainChildren[i].scrollHeight + "px"}` : "0";

      const smallChildren = mainChildren[i - 1].children;
      smallChildren[0].innerHTML =
        i === visibleIndex
          ? '<i class="fa-solid fa-minus">'
          : '<i class="fa-solid fa-plus">';
      smallChildren[2].innerHTML =
        i === visibleIndex
          ? '<i class="fa-solid fa-chevron-down"></i>'
          : '<i class="fa-solid fa-chevron-right"></i>';
    }
    // Update the clicked states
    states.forEach(
      (state, index) => (states[index] = index === (visibleIndex - 1) / 2)
    );
  }

  // Function to handle click events
  function handleClick(event, index) {
    if (!states[index]) {
      toggleDivs(index * 2 + 1); // Calculate the index of the div to show
      states.forEach((_, i) => (states[i] = i === index)); // Update state
    } else {
      mainChildren[index * 2 + 1].style.padding = "0px"; // Hide the div
      mainChildren[index * 2 + 1].style.height = "0"; // Hide the div
      states[index] = false; // Update state
    }
  }

  // Event listeners
  for (let i = 0; i < mainChildren.length; i += 2) {
    mainChildren[i].addEventListener("click", (event) => {
      handleClick(event, i / 2);
      changePlusIcon(i / 2);
      changeRightIcon(i / 2);
    });

    const smallChildren = mainChildren[i].children;
    const plusIcon = smallChildren[0];
    const rightIcon = smallChildren[2];

    function changePlusIcon(index) {
      if (states[index]) {
        plusIcon.innerHTML = '<i class="fa-solid fa-minus">';
      } else {
        plusIcon.innerHTML = '<i class="fa-solid fa-plus">';
      }
    }

    function changeRightIcon(index) {
      if (states[index]) {
        rightIcon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      } else {
        rightIcon.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      }
    }
  }
});

//FAQs Drop Down (Longer Code)

// function toggleDivs(visibleP, ...hiddenPs) {
//     visibleP.style.display = 'block';

//     hiddenPs.forEach(each => each.style.display = 'none')
//     }

// let mainChildren = eachmain.children;
// let clicked1 = false;
// let clicked2 = false;
// let clicked3 = false;

// mainChildren[0].addEventListener('click', () => {
//     const p1 = mainChildren[1];
//     const p2 = mainChildren[3];
//     const p3 = mainChildren[5];

//     if(!clicked1){
//         toggleDivs(p1, p2, p3);
//         clicked1 = true;
//         clicked2 = false;
//         clicked3 = false;
//     } else {
//         p1.style.display = 'none'
//         clicked1 = false;
//     }
// });

// mainChildren[2].addEventListener('click', () => {
//     const p1 = mainChildren[1];
//     const p2 = mainChildren[3];
//     const p3 = mainChildren[5];

//     if(!clicked2){
//         toggleDivs(p2, p1, p3);
//         clicked2 = true;
//         clicked1 = false;
//         clicked3 = false;
//     } else {
//         p2.style.display = 'none'
//         clicked2 = false;
//     }
// });

// mainChildren[4].addEventListener('click', () => {
//     const p1 = mainChildren[1];
//     const p2 = mainChildren[3];
//     const p3 = mainChildren[5];

//     if(!clicked3){
//         toggleDivs(p3, p1, p2);
//         clicked3 = true;
//         clicked2 = false;
//         clicked1 = false;
//     } else {
//         p3.style.display = 'none'
//         clicked3 = false;
//     }
// });

//Testimonial Scroll

// Function to check if a section is in view
function isInViewport(element, height) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) - height &&
    rect.bottom >= height
  );
}

//Scaling Image

const infoImages = document.querySelectorAll(".scale-img");

infoImages.forEach(function (each) {
  window.addEventListener("scroll", () => {
    if (isInViewport(each, 20)) {
      each.style.transform = `scale(${1 + window.scrollY / 27000})`;
    }
  });
});

//Script for Placement.html

if (document.querySelector('.hybrid')) {
  const animationsInPlacement = [
    document.getElementById("hybrid-header"),
    document.getElementById("hybrid-text"),
    document.getElementById("why-hire-text-one"),
    document.getElementById("why-hire-text-two"),
    document.getElementById("why-hire-text-three"),
    document.getElementById("why-hire-text-four"),
    document.getElementById("why-hire-text-five"),
    document.getElementById("why-hire-text-six"),
  ];

  window.addEventListener("scroll", () => {
    animationsInPlacement.forEach(function (each) {
      if (isInViewport(each, 50)) {
        each.style.opacity = "1";
      }
    });
  });

  const opacityOnLoad = [document.getElementById("board-text")];

  opacityOnLoad.forEach(function (each) {
    setTimeout(() => (each.style.opacity = "1"), 500);
  });
}

//Script for Partnership.html

if (document.querySelector('.dedicated')) {
  const opacityOnLoad = [document.getElementById("welcome-section")];

  opacityOnLoad.forEach(function (each) {
    setTimeout(() => (each.style.opacity = "1"), 500);
  });

  const dedicatedScrollInText = document.querySelector(".dedicated-p");
  const dedicatedScaleInImage = document.getElementById("dedicated-img");

  window.addEventListener("scroll", () => {
    if (isInViewport(dedicatedScrollInText, 30)) {
      dedicatedScrollInText.style.transform = "translateX(0)";
    }

    if (isInViewport(dedicatedScaleInImage, 30)) {
      dedicatedScaleInImage.style.transform = "scale(1)";
    }
  });

  const animationsInPartnership =
    document.querySelectorAll("#why-partner-clone");

  window.addEventListener("scroll", () => {
    animationsInPartnership.forEach(function (each) {
      if (isInViewport(each, 50)) {
        each.style.opacity = "1";
      }
    });
  });

  const imagesBox = document.querySelector(".images");
  const imageSlider = imagesBox.querySelector(".image-slider");
  const images = imageSlider.querySelectorAll("img");
  let imageEnd = false;
  let positionDiff, prevScrollLeft, prevPagex;
  let imgWidth = images[0].clientWidth + 10;

  let isDragging = false;

  function dragging(e) {
    if (!isDragging) return;
    positionDiff = ((e.pageX || e.touches[0].pageX) - prevPagex);
    imagesBox.scrollLeft = prevScrollLeft - positionDiff;
  }

  function dragStart(e) {
    e.preventDefault();
    prevPagex = (e.pageX || e.touches[0].pageX);
    prevScrollLeft = imagesBox.scrollLeft;
    imagesBox.classList.remove("dragging");
    isDragging = true;
  }

  function notDragging() {
    imagesBox.classList.add("dragging");
    isDragging = false;
    autoSlide();
  }

  function moveImageRight(index) {
    imagesBox.scrollLeft += imgWidth;
  }

  function moveImageLeft(index) {
    imagesBox.scrollLeft -= imgWidth;
  }

  function autoSlide() {
    if (imagesBox.scrollLeft == imagesBox.scrollWidth - imagesBox.clientWidth)
      return;
    positionDiff = Math.abs(positionDiff / 7);
    let valDifference = imgWidth - positionDiff;

    if (imagesBox.scrollLeft > prevScrollLeft) {
      return (imagesBox.scrollLeft +=
        positionDiff > imgWidth / 3
          ? valDifference
          : -positionDiff);
    }

    imagesBox.scrollLeft -=
      positionDiff > imgWidth / 3
        ? valDifference
        : -positionDiff;
  }

  setInterval(() => {
    if (isDragging) return;

    if (!imageEnd) {
      moveImageRight();
      if (Math.floor(imagesBox.scrollWidth - imagesBox.scrollLeft) == imagesBox.clientWidth) imageEnd = true;
    } else {
      moveImageLeft();
      if (imagesBox.scrollLeft == 0) imageEnd = false;
    }
  }, 2200);

  imagesBox.addEventListener("mousemove", dragging);
  imagesBox.addEventListener("touchmove", (e) => {
    console.log('hhhh')
    e.preventDefault();
    dragging(e);
  });

  imagesBox.addEventListener("mousedown", dragStart);
  imagesBox.addEventListener("touchstart", dragStart);

  imagesBox.addEventListener("mouseup", notDragging);
  imagesBox.addEventListener("touchend", notDragging);
  imagesBox.addEventListener("mouseleave", () => {
    imagesBox.classList.add("dragging");
    isDragging = false;
  });

  const currentPartnersSection = document.querySelector('.current-partners-section');
  const currentPartnersBtn = currentPartnersSection.querySelector('.btns');
  const currentPartnersSpanBtn = currentPartnersBtn.querySelectorAll('span');

  currentPartnersSpanBtn.forEach(function (each, i){
    each.addEventListener('click', () => {
      currentPartnersBtn.querySelector('.active').classList.remove('active')
      imagesBox.scrollLeft = (imgWidth * i);
      each.classList.add('active')
    })
  })
}

//Script for Index.html

if (document.querySelector('.testimonials')){
  const testimonialBox = document.querySelector(".sub-section-testimonial");
  const testimonialSlider = testimonialBox.querySelector(".sub-section-slider");
  const testimonials = testimonialSlider.querySelectorAll(".clone");
  let testimonialEnd = false;
  let positionDiffTestm, prevScrollLeftTestm, prevPagexTestm;
  let testmWidth = testimonials[0].clientWidth + 4;

  let isDraggingTestm = false;

  const secondClone = testimonials[1];
  const secondCloneHeight = secondClone.clientHeight;
  testimonials[0].style.height = `${secondCloneHeight}px`;
  testimonials[2].style.height = `${secondCloneHeight}px`;

  function draggingTestm(e) {
    if (!isDraggingTestm) return;
    positionDiffTestm = (e.pageX || e.touches[0].pageX) - prevPagexTestm;
    testimonialBox.scrollLeft = prevScrollLeftTestm - positionDiffTestm;
  }

  function dragStartTestm(e) {
    e.preventDefault();
    prevPagexTestm = e.pageX || e.touches[0].pageX;
    prevScrollLeftTestm = testimonialBox.scrollLeft;
    testimonialBox.classList.remove("dragging");
    isDraggingTestm = true;
  }

  function notDraggingTestm() {
    testimonialBox.classList.add("dragging");
    isDraggingTestm = false;
    autoSlideTestm();
  }

  function moveImageRightTestm(index) {
    testimonialBox.scrollLeft += testmWidth;
  }

  function moveImageLeftTestm(index) {
    testimonialBox.scrollLeft -= testmWidth;
  }

  function autoSlideTestm() {
    if (testimonialBox.scrollLeft == testimonialBox.scrollWidth - testimonialBox.clientWidth)
      return;
    positionDiffTestm = Math.abs(positionDiffTestm);
    let valDifferenceTestm = testmWidth - positionDiffTestm;

    if (testimonialBox.scrollLeft > prevScrollLeftTestm) {
      return (testimonialBox.scrollLeft +=
        positionDiffTestm > testmWidth / 3
          ? valDifferenceTestm
          : -positionDiffTestm);
    }

    testimonialBox.scrollLeft -=
      positionDiffTestm > testmWidth / 3
        ? valDifferenceTestm
        : -positionDiffTestm;
  }

  setInterval(() => {
    if (isDraggingTestm) return;

    if (!testimonialEnd) {
      moveImageRightTestm();
      if (Math.floor(testimonialBox.scrollWidth - testimonialBox.scrollLeft - testimonialBox.clientWidth) <= 1) testimonialEnd = true;

    } else {
      moveImageLeftTestm();
      if (testimonialBox.scrollLeft == 0) testimonialEnd = false;
    }
  }, 5000);

  testimonialBox.addEventListener("mousemove", draggingTestm);
  testimonialBox.addEventListener("touchmove", (e) => {
    e.preventDefault();
    draggingTestm(e);
  });

  testimonialBox.addEventListener("mousedown", dragStartTestm);
  testimonialBox.addEventListener("touchstart", dragStartTestm);

  testimonialBox.addEventListener("mouseup", notDraggingTestm);
  testimonialBox.addEventListener("touchend", notDraggingTestm);
  testimonialBox.addEventListener("mouseleave", () => {
    testimonialBox.classList.add("dragging");
    isDraggingTestm = false;
  });

  const testimonialsSection = document.querySelector('.testimonials-section');
  const testimonialsSectionBtn = testimonialsSection.querySelector('.btns');
  const testimonialsSectionSpanBtn = testimonialsSectionBtn.querySelectorAll('span');

  testimonialsSectionSpanBtn.forEach(function (each, i){
    each.addEventListener('click', () => {
      testimonialsSectionBtn.querySelector('.active').classList.remove('active')
      testimonialBox.scrollLeft = ((testimonials[i].clientWidth + 4) * i);
      each.classList.add('active')
    })
  })
}