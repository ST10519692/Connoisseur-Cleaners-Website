//to center map
var map= L.map('map').setView([-26.06,28.21],11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//The pins and popups
L.marker([-26.047679,28.206173]).addTo(map)
    .bindPopup('Alex Shopping Center');
L.marker([-26.0508418,28.2312492]).addTo(map)
    .bindPopup('Birchleigh North Mall');

L.marker([-26.063096,28.216512]).addTo(map)
    .bindPopup('Norkem Mall');

L.marker([-26.08168,28.209424]).addTo(map)
    .bindPopup('Shop 3 Black Throne Ave');
L.marker([-25.964526,28.216512]).addTo(map)
    .bindPopup('Clayville Shooping Centre');

