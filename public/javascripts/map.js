var map = L.map('main_map').setView([-34.5941125,-58.409658], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);

var marker = L.marker([-34.629157, -58.416293]).addTo(map);
var marker = L.marker([-34.615750, -58.392133]).addTo(map);