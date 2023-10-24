function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var words = [
  'Front-End Development','App Development','Machine Learning'
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
  $('#github').click(function(){
    window.open('https://github.com/Sanjay-S31','_blank');
  });
  $('#linkedin').click(function(){
    window.open('https://www.linkedin.com/in/sanjay-s-372120298/','_blank');
  });
});

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function toggleFillBarOnScroll() {
  const skills = document.querySelectorAll('.sk');
  skills.forEach(skill => {
      const bar = skill.querySelector('.bar');
      if (isElementInViewport(bar)) {
          bar.classList.add('fill');
      } else {
          bar.classList.remove('fill');
      }
  });
}
window.addEventListener('scroll', toggleFillBarOnScroll);
toggleFillBarOnScroll();

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  this.setTimeout(function(){
    loader.style.display = "none";
  },2000);
})

function animateTimelineContainer() {
  var timelineContainers = document.querySelectorAll(".timeline-container");
  var aboutSection = document.getElementById("about");

  if (aboutSection.classList.contains("active")) {
    timelineContainers.forEach(function (container) {
      container.classList.add("animate-timeline");
    });
  }
  var cards = document.querySelectorAll(".card");
  var proj = document.getElementById("projects");

  if (proj.classList.contains("active")) {
    cards.forEach(function (container) {
      container.classList.add("slide-effect");
    });
  }
}

window.addEventListener("scroll", animateTimelineContainer);
