// zoom page when screen reaches 1400px
function scalePage() {
  const body = document.querySelector('body');
  const maxWidth = 1400;
  const minWidth = 480;
  let scale = 1;
  console.log(window.innerWidth);
  if (window.innerWidth < minWidth) {
    scale = window.innerWidth / minWidth;
  } else if (window.innerWidth > maxWidth) {
    scale = window.innerWidth / maxWidth;

  }
  body.style.zoom = `${scale}`;
}

// Run on load and on resize
window.addEventListener('load', scalePage);
window.addEventListener('resize', scalePage);

// appearing header on scroll
function monitorScroll() {
  let lastScroll = window.pageYOffset;
  const header = document.querySelector("header");
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
  
    if (currentScroll <= 0) {
      header.classList.remove("hidden");
      return;
    }
  
    if (currentScroll > lastScroll + 84) {
      // Scrolling down
      header.classList.add("hidden");
      lastScroll = currentScroll;
    } else if (currentScroll < lastScroll - 192) {
      // Scrolling up
      header.classList.remove("hidden");
      lastScroll = currentScroll;
    }
  });
}

// Run on document load 
document.addEventListener('DOMContentLoaded', monitorScroll);