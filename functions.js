




const cursor = document.querySelector('.cursor');

   



window.onmousemove = function(e) {
    let x = e.clientX;
    let y = e.clientY;

    let newx = x - 20;
    let newy = y - 20;

    cursor.style.transform = "translate3d(" + newx + "px," + newy + "px, 0px)";
};


    function toggleMenu() {
        const sideMenu = document.querySelector('.side-menu');
        const hamburger = document.querySelector('.hamburger');
        const hamburgerText = document.getElementById('hamburgerText');
      
        sideMenu.classList.toggle('active');
        hamburger.classList.toggle('active');

      

        const isOpen = sideMenu.classList.contains('active');
        hamburgerText.textContent = isOpen ? 'GUIDE' : 'GUIDE';


        document.body.classList.toggle('open');
      }
  
  // Optional: Close menu if clicking outside of it
  document.addEventListener('click', (e) => {
    const sideMenu = document.querySelector('.side-menu');
    const hamburger = document.querySelector('.hamburger');
  
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
      sideMenu.classList.remove('active');
      document.body.classList.remove('open');
    }
  });


  



  
  window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    console.log("Page loaded, loader:", loader);
  
    if (!loader) return;
  
    loader.addEventListener('transitionend', () => {
      console.log("Transition ended. Removing loader.");
      document.body.removeChild(loader);
    });
  
    setTimeout(function () {
      console.log("Adding hidden class to loader");
      loader.classList.add("hidden");
    }, 3700);
  });


  class Carousel {
    constructor(element) {
      // Retrieve every elements needed by the carousel (arrows, dots, ...)
      this.content = element.querySelector(".carousel-content");
      this.arrowLeft = element.querySelector(".carousel-arrow-left");
      this.arrowRight = element.querySelector(".carousel-arrow-right");
      this.dots = element.querySelector(".carousel-navigation").children;
      // The index of the current active element of the carousel
      this.activeElement = 0;
    }
  
    // This function will make the element at index n visible in the carousel
    activateElement(n) {
      // Validate index
      if (n < 0 || n >= this.dots.length)
        return;
      this.activeElement = n;
      // Scroll the content to bring the element into view
      // this.content is the parent container of every elements
      // this.content.children[n] is the targeted element
      // .offsetLeft is the distance between the left of the element and the left border of the window
      // .scrollTo(x, y) scroll the element at x, y offset
      this.content.scrollTo(this.content.children[n].offsetLeft - this.content.offsetLeft, 0);
      // Activate the corresponding dot
      for (let i = 0; i < this.dots.length; i++)
        // .classList is the list of classes on the HTML element
        // .toggle(classes, force) is used to add or remove the given classes according to the boolean
        this.dots[i].classList.toggle("carousel-dot-active", this.activeElement === i);
      // Verify the left and right arrow to disable them if necessary
      // No longer needed because we want to be able to cycle through the carousel entries
      //this.arrowLeft.classList.toggle("carousel-arrow-disabled", this.activeElement === 0);
      //this.arrowRight.classList.toggle("carousel-arrow-disabled", this.activeElement === this.dots.length - 1);
    }
  
    // This function will register and required event listeners
    addEventListeners() {
      // To handle the click on the dots
      for (let i = 0; i < this.dots.length; i++)
        this.dots[i].addEventListener("click", () => this.activateElement(i));
      // And on the left / right arrows
      this.arrowLeft.addEventListener("click", () => this.activateElement((this.activeElement === 0 ? this.dots.length : this.activeElement) - 1)); // If we are on the first element and we go left, then we activate the last one
      this.arrowRight.addEventListener("click", () => this.activateElement(this.activeElement === this.dots.length - 1 ? 0 : this.activeElement + 1)); // If we are on the last element and we go right, then we activate the first one
    }
  }
  
  // Initialize the carousel for every HTML element with class "carousel"
  const carousels = document.getElementsByClassName("carousel");
  for (const carousel of carousels)
    new Carousel(carousel).addEventListeners();


  function loadYouTubeTrammell(container) {
    const videoContainer = container.querySelector('.video-container');
  
    // Only load the iframe once
    if (!videoContainer.innerHTML) {
      const iframe = document.createElement('iframe');
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = "https://www.youtube.com/embed/WaoL6cGOOMQ?si=_kcxbcKbYPNuawXn";
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
  
      // Append iframe to the video container
      videoContainer.appendChild(iframe);
    }
  }


  function loadYouTubeDevin(container) {
    const videoContainer = container.querySelector('.video-container');
  
    // Only load the iframe once
    if (!videoContainer.innerHTML) {
      const iframe = document.createElement('iframe');
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = "https://www.youtube.com/embed/WaoL6cGOOMQ?si=_kcxbcKbYPNuawXn";
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
  
      // Append iframe to the video container
      videoContainer.appendChild(iframe);
    }
  }

 
  const scrollbarThumb = document.querySelector('.c-scrollbar_thumb');
  const scrollbar = document.querySelector('.c-scrollbar');

  function updateScrollbar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const thumbHeight = window.innerHeight * (window.innerHeight / document.documentElement.scrollHeight);
    const thumbTop = (scrollTop / docHeight) * (window.innerHeight - thumbHeight);

    scrollbarThumb.style.height = `${thumbHeight}px`;
    scrollbarThumb.style.transform = `translateY(${thumbTop}px)`;
  }

  window.addEventListener('scroll', updateScrollbar);
  window.addEventListener('resize', updateScrollbar);
  window.addEventListener('load', updateScrollbar);

  const grid = document.querySelector('.color-grid');
  const rows = 10;
  const cols = 10;
  
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = document.createElement('div');
      const lightness = 95 - row * 5; // Vary by row
      cell.className = 'cell';
      cell.style.backgroundColor = `hsl(210, 100%, ${lightness}%)`; // Blue hue
      grid.appendChild(cell);
    }
  }

  function toggleExpand(element) {
    element.classList.toggle("expanded");
  }
  
  function gotosoftdepart() {
    const input = document.querySelector('.terminal-input').value.trim().toUpperCase();
  
    if (input === "MRL") {
      window.location.href = "software-department.html";
    } else {
      alert("Access denied. Try typing 'MRL'.");
    }
  }

  
  document.querySelector('.terminal-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      gotosoftdepart();
    }
  });


  function gotocontact(){
    const contactbtn = document.querySelector('.contact');

    contactbtn.addEventListener('click', function() {
      window.location.href = "product-design.html";
    });
  }
  
