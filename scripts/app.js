// DOM REFERENCES //
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const displayIP = document.getElementById('display-ip');
const displayLocation = document.getElementById('display-location');
const displayTimezone = document.getElementById('display-timezone');
const displayISP = document.getElementById('display-isp');

// Console.log check - DOM elements //
console.log('=== DOM REFERENCE CHECKS ===')
console.log('Search form:', searchForm);
console.log('Search input:', searchInput);
console.log('Display IP:', displayIP);
console.log('Display Location:', displayLocation);
console.log('Display Timezone:', displayTimezone);
console.log('Display ISP:', displayISP);

// Leaflet Map Initialization - Quick Start //
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);

// Console.log check - Leaflet initialization //
console.log('=== LEAFLET MAP CHECKS ===');
console.log('Map:', map);
console.log('Marker:', marker);