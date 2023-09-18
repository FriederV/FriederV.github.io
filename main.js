//-----------------------------CHECK DEVICE-----------------------




//----------------------------- STARTEPAGE -------------------------

const spans1 = document.querySelectorAll('.img_hover_1');
const images1 = document.querySelectorAll('.img1');

const spans2 = document.querySelectorAll('.img_hover_2');
const images2 = document.querySelectorAll('.img2');

const spans3 = document.querySelectorAll('.img_hover_3');
const images3 = document.querySelectorAll('.img3');

const spans4 = document.querySelectorAll('.img_hover_4');
const images4 = document.querySelectorAll('.img4');

let previousIndex1 = -1; // Track the previously hovered image index for img_hover_1
let previousIndex2 = -1; // Track the previously hovered image index for img_hover_2
let previousIndex3 = -1; // Track the previously hovered image index for img_hover_3
let previousIndex4 = -1; // Track the previously hovered image index for img_hover_4

// Preload the images
const preloadedImages1 = Array.from(images1).map(image => {
  const img = new Image();
  img.src = image.src;
  return img;
});

const preloadedImages2 = Array.from(images2).map(image => {
  const img = new Image();
  img.src = image.src;
  return img;
});

const preloadedImages3 = Array.from(images3).map(image => {
  const img = new Image();
  img.src = image.src;
  return img;
});

const preloadedImages4 = Array.from(images4).map(image => {
  const img = new Image();
  img.src = image.src;
  return img;
});

// Function to hide all images in img1
function hideAllImages1() {
  images1.forEach(image => {
    image.style.display = 'none';
  });
}

// Function to hide all images in img2
function hideAllImages2() {
  images2.forEach(image => {
    image.style.display = 'none';
  });
}

// Function to hide all images in img3
function hideAllImages3() {
  images3.forEach(image => {
    image.style.display = 'none';
  });
}

// Function to hide all images in img4
function hideAllImages4() {
  images4.forEach(image => {
    image.style.display = 'none';
  });
}

spans1.forEach((span, index) => {
  span.addEventListener('mouseover', () => {
    let randomIndex = Math.floor(Math.random() * images1.length);

    // Generate a different random index if it matches the previous index
    while (randomIndex === previousIndex1) {
      randomIndex = Math.floor(Math.random() * images1.length);
    }

    hideAllImages2(); // Hide all images from img2
    hideAllImages3(); // Hide all images from img3
    hideAllImages4(); // Hide all images from img4

    images1.forEach((image, i) => {
      if (i === randomIndex) {
        image.style.display = 'block'; // Display the random image from img1
      } else {
        image.style.display = 'none'; // Hide other images from img1
      }
    });

    previousIndex1 = randomIndex; // Update the previous index for img_hover_1
  });
});

spans2.forEach((span, index) => {
  span.addEventListener('mouseover', () => {
    let randomIndex = Math.floor(Math.random() * images2.length);

    // Generate a different random index if it matches the previous index
    while (randomIndex === previousIndex2) {
      randomIndex = Math.floor(Math.random() * images2.length);
    }

    hideAllImages1(); // Hide all images from img1
    hideAllImages3(); // Hide all images from img3
    hideAllImages4(); // Hide all images from img4

    images2.forEach((image, i) => {
      if (i === randomIndex) {
        image.style.display = 'block'; // Display the random image from img2
      } else {
        image.style.display = 'none'; // Hide other images from img2
      }
    });

    previousIndex2 = randomIndex; // Update the previous index for img_hover_2
  });
});

spans3.forEach((span, index) => {
  span.addEventListener('mouseover', () => {
    let randomIndex = Math.floor(Math.random() * images3.length);

    // Generate a different random index if it matches the previous index
    while (randomIndex === previousIndex3) {
      randomIndex = Math.floor(Math.random() * images3.length);
    }

    hideAllImages1(); // Hide all images from img1
    hideAllImages2(); // Hide all images from img2
    hideAllImages4(); // Hide all images from img4

    images3.forEach((image, i) => {
      if (i === randomIndex) {
        image.style.display = 'block'; // Display the random image from img3
      } else {
        image.style.display = 'none'; // Hide other images from img3
      }
    });

    previousIndex3 = randomIndex; // Update the previous index for img_hover_3
  });
});

spans4.forEach((span, index) => {
  span.addEventListener('mouseover', () => {
    let randomIndex = Math.floor(Math.random() * images4.length);

    // Generate a different random index if it matches the previous index
    while (randomIndex === previousIndex4) {
      randomIndex = Math.floor(Math.random() * images4.length);
    }

    hideAllImages1(); // Hide all images from img1
    hideAllImages2(); // Hide all images from img2
    hideAllImages3(); // Hide all images from img3

    images4.forEach((image, i) => {
      if (i === randomIndex) {
        image.style.display = 'block'; // Display the random image from img4
      } else {
        image.style.display = 'none'; // Hide other images from img4
      }
    });

    previousIndex4 = randomIndex; // Update the previous index for img_hover_4
  });
});

//------------------------------- WORKS SECTION -------------------------

// Event listeners for slideshow links
var slideshowLinks = document.querySelectorAll('.slideshow-link');

slideshowLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    var slideshowId = link.dataset.slideshow;
    var selectedSlideshow = document.getElementById(slideshowId);
    var linksContainer = link.parentNode;

    // Hide all slideshows
    var slideshows = document.querySelectorAll('.slider');
    slideshows.forEach(function (slideshow) {
      slideshow.style.display = 'none';
    });

    // Show the selected slideshow
    selectedSlideshow.style.display = 'block';

    // Hide the links container
    linksContainer.style.display = 'none';
  });
});

// Get the slideshow links and slideshows
var slideshowLinks = document.querySelectorAll('.slideshow-link');
var slideshows = document.querySelectorAll('.slider');
var projectHeaders = document.querySelectorAll('.project_header');

projectHeaders.forEach(function (header) {
  header.addEventListener('click', function () {
    var linksContainer = header.nextElementSibling;
    var parentContainer = header.parentNode;
    
    // Show the links container
    linksContainer.style.display = 'block';
    
    // Hide all slideshows
    slideshows.forEach(function (slideshow) {
      slideshow.style.display = 'none';
    });
    
    // Show the parent container (to reveal the slideshow links)
    parentContainer.style.display = 'block';
  });
});

function showSlide(slideshow, index) {
  var slides = slideshow.querySelectorAll('.slide');

  slides.forEach(function (slide) {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

// Call showSlide for each slideshow to display the first slide initially
var slideshows = document.querySelectorAll('.slider');
slideshows.forEach(function (slideshow) {
  showSlide(slideshow, 0);
});

function nextSlide(slideshow) {
  var currentSlide = slideshow.querySelector('.slide.active');
  var slides = Array.from(slideshow.querySelectorAll('.slide'));
  var currentIndex = slides.indexOf(currentSlide);
  var slideCount = slides.length;
  var nextSlide = slides[(currentIndex + 1) % slideCount];

  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

function previousSlide(slideshow) {
  var currentSlide = slideshow.querySelector('.slide.active');
  var slides = Array.from(slideshow.querySelectorAll('.slide'));
  var currentIndex = slides.indexOf(currentSlide);
  var slideCount = slides.length;
  var previousSlide = slides[(currentIndex - 1 + slideCount) % slideCount];

  currentSlide.classList.remove('active');
  previousSlide.classList.add('active');
}

// Event listeners for next and previous buttons
var nextButtons = document.querySelectorAll('[id^="next-button-"]');
var prevButtons = document.querySelectorAll('[id^="previous-button-"]');

nextButtons.forEach(function (nextButton) {
  nextButton.addEventListener('click', function () {
    var slideshowId = nextButton.dataset.slideshow;
    var slideshow = document.getElementById(slideshowId);
    var currentSlide = slideshow.querySelector('.slide.active');

    if (!currentSlide) {
      // If no active slide, show the first slide
      var firstSlide = slideshow.querySelector('.slide:first-child');
      firstSlide.classList.add('active');
    } else {
      nextSlide(slideshow);
    }
  });
});

prevButtons.forEach(function (prevButton) {
  prevButton.addEventListener('click', function () {
    var slideshowId = prevButton.dataset.slideshow;
    var slideshow = document.getElementById(slideshowId);
    var currentSlide = slideshow.querySelector('.slide.active');

    if (!currentSlide) {
      // If no active slide, show the last slide
      var lastSlide = slideshow.querySelector('.slide:last-child');
      lastSlide.classList.add('active');
    } else {
      previousSlide(slideshow);
    }
  });
});


//------------------------------ ABOUT SECTION -----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class 'about_person'
  const aboutPersons = document.querySelectorAll(".about_person");

  // Get all elements with class 'person_detailed'
  const personDetailedElements = document.querySelectorAll(".person_detailed");

  // Get the element with class 'about_header'
  const aboutHeader = document.querySelector(".about_header");

  // Add a click event listener to each 'about_person'
  aboutPersons.forEach((person, index) => {
    person.addEventListener("click", function () {
      // Hide all 'about_person' elements
      aboutPersons.forEach((person) => {
        person.style.display = "none";
      });

      // Show the corresponding 'person_detailed' element based on the clicked index
      if (personDetailedElements[index]) {
        personDetailedElements.forEach((personDetailed) => {
          personDetailed.style.display = "none";
        });
        personDetailedElements[index].style.display = "flex";
      }
    });
  });

  // Add a click event listener to 'about_header'
  aboutHeader.addEventListener("click", function () {
    // Show all 'about_person' elements
    aboutPersons.forEach((person) => {
      person.style.display = "flex";
    });

    // Hide all 'person_detailed' elements
    personDetailedElements.forEach((personDetailed) => {
      personDetailed.style.display = "none";
    });
  });
});

// -------------------------------------- RANDOM NUMBERS -----------------------


const all_fonts = [
  "'Amatic SC', cursive",
  "'Bad Script', cursive",
  "'Bangers', cursive",
  "'Black Ops One', cursive",
  "'Creepster', cursive",
  "'Libre Barcode 39 Extended Text', cursive",
  "'Orbitron', sans-serif",
  "'Playfair Display SC', serif",
  "'Press Start 2P', cursive",
  "'Raleway Dots', cursive",
  "'Reenie Beanie', cursive",
  "'Roboto Mono', monospace",
  "'Rubik Moonrocks', cursive",
  "'Shadows Into Light', cursive",
  "'Sigmar', cursive",
  "'Silkscreen', cursive",
  "'Tangerine', cursive",
  "'Tilt Prism', cursive",
  "'Vina Sans', cursive"
];

function random_font(all_fonts) {
  const random = Math.floor(Math.random() * all_fonts.length);
  return all_fonts[random];
}

const rot_letter = document.querySelectorAll('.rotating_letter');

function randomizeLetters() {
  rot_letter.forEach(rot => {
    rot.style.setProperty("font-family", random_font(all_fonts));
  });
}

function changeRandomLetterFont() {
  const randomIndex = Math.floor(Math.random() * rot_letter.length);
  rot_letter[randomIndex].style.setProperty("font-family", random_font(all_fonts));

  const randomInterval = Math.floor(Math.random() * 4000) + 1000; // Random interval between 1 and 5 seconds
  setTimeout(changeRandomLetterFont, randomInterval);
}

randomizeLetters();
changeRandomLetterFont();

rot_letter.forEach(rot => {
  rot.addEventListener('mouseover', function () {
    console.log('letter changed');
    rot.style.setProperty("font-family", random_font(all_fonts));
  });

  rot.addEventListener('click', function(){
    console.log('clicked');
  });
});


