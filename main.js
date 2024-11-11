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

document.addEventListener('DOMContentLoaded', function () {
  var slideshowLinks = document.querySelectorAll('.slideshow-link');
  var slideshows = document.querySelectorAll('.slider');
  var projectHeaders = document.querySelectorAll('.project_header');

  function showSlideshow(slideshowId) {
    slideshows.forEach(function (slideshow) {
      slideshow.style.display = slideshow.id === slideshowId ? 'block' : 'none';
    });
  }

  slideshowLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var slideshowId = link.dataset.slideshow;

      // Update the URL without a page reload
      history.pushState({ slideshowId: slideshowId }, '', '#' + slideshowId);

      showSlideshow(slideshowId);

      var linksContainer = link.parentNode;
      linksContainer.style.display = 'none';
    });
  });

  projectHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var linksContainer = header.nextElementSibling;
      var parentContainer = header.parentNode;

      // Update the URL without a page reload
      history.pushState({ slideshowId: null }, '', '#');

      slideshows.forEach(function (slideshow) {
        slideshow.style.display = 'none';
      });

      parentContainer.style.display = 'block';
      linksContainer.style.display = 'block';
    });
  });

  // Listen for the back/forward button events
  window.addEventListener('popstate', function (event) {
    var state = event.state;

    if (state && state.slideshowId) {
      showSlideshow(state.slideshowId);

      // Show the corresponding links container
      var linksContainer = document.querySelector('[data-slideshow="' + state.slideshowId + '"]').parentNode;
      linksContainer.style.display = 'block';
    } else {
      slideshows.forEach(function (slideshow) {
        slideshow.style.display = 'none';
      });

      projectHeaders.forEach(function (header) {
        header.parentNode.style.display = 'block';
        header.nextElementSibling.style.display = 'none';

        // Show the links container for each project header
        header.nextElementSibling.querySelector('.slideshow-link').parentNode.style.display = 'block';
      });
    }
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
  // Store the original URL when the page is loaded
  const originalUrl = window.location.href;

  const aboutPersons = document.querySelectorAll(".about_person");
  const personDetailedElements = document.querySelectorAll(".person_detailed");
  const aboutHeader = document.querySelector(".about_header");

  // Function to show person details based on index
  function showPersonDetails(index) {
    personDetailedElements.forEach((personDetailed) => {
      personDetailed.style.display = "none";
    });
    if (personDetailedElements[index]) {
      personDetailedElements[index].style.display = "flex";
    }
  }

  // Function to handle click on about_person element
  function handlePersonClick(index) {
    aboutPersons.forEach((person) => {
      person.style.display = "none";
    });
    showPersonDetails(index);
    history.pushState({ personIndex: index, page: 'person' }, "", `#${index}`);
  }

  // Function to handle click on about_header element
  function handleHeaderClick() {
    aboutPersons.forEach((person) => {
      person.style.display = "flex";
    });
    personDetailedElements.forEach((personDetailed) => {
      personDetailed.style.display = "none";
    });

    // Update the history state for the home page without creating a new entry
    const homeState = { page: 'home' };
    history.replaceState(homeState, "", originalUrl);
  }

  // Event listener for popstate event
  window.addEventListener("popstate", function (event) {
    const state = event.state;
    if (state) {
      if (state.page === 'person') {
        showPersonDetails(state.personIndex);
      } else {
        handleHeaderClick();
      }
    } else {
      // Handle initial load or navigating to a page without state
      handleHeaderClick();
    }

    // Disable the browser forward button
    history.pushState(null, '', originalUrl);
    event.preventDefault();
  });

  // Event listener for pageshow event
  window.addEventListener("pageshow", function (event) {
    // Detect if pageshow event was due to forward navigation
    if (event.persisted) {
      // Use the popstate logic for forward navigation
      const state = history.state;
      if (state) {
        if (state.page === 'person') {
          showPersonDetails(state.personIndex);
        } else {
          aboutPersons.forEach((person) => {
            person.style.display = "flex";
          });
          personDetailedElements.forEach((personDetailed) => {
            personDetailed.style.display = "none";
          });
        }
      } else {
        // Handle initial load or navigating to a page without state
        handleHeaderClick();
      }
    }
  });

  // Event listener for beforeunload event
  window.addEventListener("beforeunload", function () {
    // Clear the state when leaving the page
    history.replaceState(null, "", originalUrl);
  });

  // Add a click event listener to each 'about_person'
  aboutPersons.forEach((person, index) => {
    person.addEventListener("click", function () {
      handlePersonClick(index);
    });
  });

  // Add a click event listener to 'about_header'
  aboutHeader.addEventListener("click", function () {
    handleHeaderClick();
  });
});


// -------------------------------------- RANDOM NUMBERS -----------------------

const all_fonts = [
  "Bangers",
  "Black Ops",
  "Libre Barcode 39 Extended Text",
  "Playfair Display SC",
  "Raleway Dots",
  "'Roboto Mono'",
  "Silkscreen",
  "Vina Sans",
  "Righteous",
  "Kalam",
  "Cormorant Garamond",
  "Unlock",
  "Lobster",
  "Bebas Neue",
  "Itim",
  "Vesper Libre",
];

// Function to pick a new font that's different from the previous one
function random_font(all_fonts, previousFont) {
  let newFont;
  do {
    const randomIndex = Math.floor(Math.random() * all_fonts.length);
    newFont = all_fonts[randomIndex];
  } while (newFont === previousFont); // Keep picking until we get a new font
  return newFont;
}

const rot_letter = document.querySelectorAll('.rotating_letter');
let currentIndex = 0;
const previousFonts = new Array(rot_letter.length).fill(null); // Track previous fonts for each letter

function randomizeLetters() {
  rot_letter.forEach((rot, index) => {
    const newFont = random_font(all_fonts, previousFonts[index]);
    rot.style.setProperty("font-family", newFont);
    previousFonts[index] = newFont; // Update previous font for this letter
  });
}

function changeSequentialLetterFont() {
  if (rot_letter.length === 0) return;

  const currentElement = rot_letter[currentIndex];
  const previousFont = previousFonts[currentIndex];

  // Pick a new font different from the previous
  const newFont = random_font(all_fonts, previousFont);
  currentElement.style.setProperty("font-family", newFont);

  // Update previous font for this element
  previousFonts[currentIndex] = newFont;

  // Move to the next letter
  currentIndex++;
  if (currentIndex >= rot_letter.length) {
    currentIndex = 0; // Reset to the start after all letters are updated
  }
}

function startPulsing() {
  const pulseInterval = 100; // Time between each letter change
  const pauseInterval = 3000; // Pause duration after a full cycle

  let pulseActive = true;

  // Randomize letters on load
  randomizeLetters();

  // Pulsing effect loop
  setInterval(() => {
    if (pulseActive) {
      changeSequentialLetterFont();

      // After a full cycle, pause pulsing temporarily
      if (currentIndex === 0) {
        pulseActive = false;
        setTimeout(() => { pulseActive = true; }, pauseInterval);
      }
    }
  }, pulseInterval);
}

startPulsing();




rot_letter.forEach(rot => {
  rot.addEventListener('mouseover', function () {
    console.log('letter changed');
    rot.style.setProperty("font-family", random_font(all_fonts));
  });

  rot.addEventListener('click', function(){
    console.log('clicked');
  });
});






