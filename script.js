var carouselItems = document.getElementsByClassName("carousel-item");
var currentItem = 0;

function changeSlide(n) {
  carouselItems[currentItem].classList.remove("active");
  currentItem = (n + carouselItems.length) % carouselItems.length;
  carouselItems[currentItem].classList.add("active");
}

document.getElementsByClassName("carousel-control-prev")[0].addEventListener("click", function() {
  changeSlide(currentItem - 1);
});

document.getElementsByClassName("carousel-control-next")[0].addEventListener("click", function() {
  changeSlide(currentItem + 1);
});


document.getElementById("defaultOpen").click();

function changeTab(event, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}

var slideIndex = 1;
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
      
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// const accordionHeadings = document.querySelectorAll('.accordion-heading');

// accordionHeadings.forEach(heading => {
//   heading.addEventListener('click', function() {
//     const content = this.nextElementSibling;
//     if (content.classList.contains('collapsed')) {
//       content.classList.remove('collapsed');
//       content.classList.add('expanded');
//     } else {
//       content.classList.remove('expanded');
//       content.classList.add('collapsed');
//     }
//   });
// });


// const accordionHeadings = document.querySelectorAll('.accordion-heading');

// accordionHeadings.forEach(heading => {
//   heading.addEventListener('click', function() {
//     const content = this.nextElementSibling;
//     if (content.classList.contains('animate')) {
//       content.classList.remove('animate');
//     } else {
//       content.classList.add('animate');
//     }
//   });
// });

const accordionHeadings = document.querySelectorAll('.accordion-heading');

// Accordion function
function toggleAccordion(heading) {
  const content = heading.nextElementSibling;
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
  } else {
    content.classList.add('expanded');
  }
}

// Add event listeners
accordionHeadings.forEach(heading => {
  heading.addEventListener('click', function() {
    toggleAccordion(heading);
  });
});



const tooltip = document.querySelector('.tooltip');
const tooltipContainer = document.querySelector('.tooltip-container');

tooltipContainer.addEventListener('mouseover', function() {
  tooltip.classList.remove('inactive');
  tooltip.classList.add('active');
});

tooltipContainer.addEventListener('mouseout', function() {
  tooltip.classList.remove('active');
  tooltip.classList.add('inactive');
});
