// TRACKER SERVER //
const BASE_URL = "https://ip-tracker-server.onrender.com/api/lookup";

// DOM REFERENCES //
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const displayIP = document.getElementById("display-ip");
const displayLocation = document.getElementById("display-location");
const displayTimezone = document.getElementById("display-timezone");
const displayISP = document.getElementById("display-isp");

// Console.log check - DOM elements //
console.log("=== DOM REFERENCE CHECKS ===");
console.log("Search form:", searchForm);
console.log("Search input:", searchInput);
console.log("Display IP:", displayIP);
console.log("Display Location:", displayLocation);
console.log("Display Timezone:", displayTimezone);
console.log("Display ISP:", displayISP);

// Leaflet Map Initialization - Quick Start //
const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);

// Console.log check - Leaflet initialization //
console.log("=== LEAFLET MAP CHECKS ===");
console.log("Map:", map);
console.log("Marker:", marker);

// UPDATE USER INTERFACE //
function updateUI(data) {
  const { ip, location, isp } = data;
  const { city, region, postalCode, lat, lng, timezone } = location;

  // Update info card //
  displayIP.textContent = ip;
  displayLocation.textContent = `${city}, ${region} ${postalCode}`;
  displayTimezone.textContent = `UTC ${timezone}`;
  displayISP.textContent = isp;

  // Map updates //
  map.setView([lat, lng], 13);
  marker.setLatLng([lat, lng]);

  // Data Retreived by UI //
  console.log("=== User Interface Data ===");
  console.log("IP:", ip);
  console.log("City:", city, "| Region:", region);
  console.log("Lat:", lat, "| Lng:", lng);
  console.log("Timezon:", timezone);
  console.log("ISP:", isp);
}

// FETCH API IP ADDRESS DATA //
async function fetchIPData(ipAddress = "") {
  const queryParam = ipAddress ? `?ipAddress=${ipAddress}` : "";
  const url = `${BASE_URL}${queryParam}`;

  console.log("=== FETCH REQUEST ===");
  console.log("URL:", url);

  try {
    const response = await fetch(url);

    console.log("=== RESPONSE STATUS ===");
    console.log("Status:", response.status, response.statusText);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log("=== RENDER API RESPONSE ===");

    updateUI(data);
  } catch (error) {
    console.error("fetchIPData error:", error.message);
    displayIP.textContent = "Error - check console";
  }
}

// Event listener
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.trim();

    if(!query) {
        searchInput.focus();
        return;
    }

console.log('=== SEARCH SUBMISSION ===');
console.log('Query:', query);

fetchIPData(query);
});