var swiper = new Swiper(".mySwiper", {});

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
