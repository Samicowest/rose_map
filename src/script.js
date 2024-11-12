const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");
const insideNav = document.getElementById("insideNav");

function ToggleHidden() {
  navbar.classList.add("active");
}

function hideNavbar() {
  navbar.classList.remove("active");
}

menu.addEventListener("click", (event) => {
  event.stopPropagation();
  ToggleHidden();
});

document.addEventListener("click", (event) => {
  if (!insideNav.classList.contains(event.target)) {
    hideNavbar();
  }
});

// swiper section

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });
});

// location
const locationList = document.querySelector(".location-list");

function filterLocations() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const locationList = document.querySelector(".location-list");
  const cards = document.querySelectorAll(".location-card");

  let hasVisibleCards = false;

  cards.forEach((card) => {
    const locationName = card.getAttribute("data-name").toLowerCase();
    if (query && locationName.includes(query)) {
      card.style.display = "block"; // Show card if it matches
      hasVisibleCards = true; // Mark that there's at least one matching card
    } else {
      card.style.display = "none"; // Hide card if it doesn't match
    }
  });

  // Show or hide the location list based on whether there are visible cards
  if (query && hasVisibleCards) {
    locationList.style.display = "grid"; // Show location list if there are matches
  } else {
    locationList.style.display = "none"; // Hide location list if no matches or input is blank
  }
}
function filterLocation() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const locationList = document.querySelector(".location-list");
  const cards = document.querySelectorAll(".location-card");

  let hasVisibleCards = false;

  cards.forEach((card) => {
    const locationName = card.getAttribute("data-name").toLowerCase();
    if (query && locationName.includes(query)) {
      hasVisibleCards = true; // Mark that there's at least one matching card
    } else {
      card.style.display = "none"; // Hide card if it doesn't match
    }
  });

  // Show or hide the location list based on whether there are visible cards
  if (query && hasVisibleCards) {
    locationList.style.display = "grid"; // Show location list if there are matches
  } else {
    locationList.style.display = "none"; // Hide location list if no matches or input is blank
  }
}
